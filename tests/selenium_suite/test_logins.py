import os
import random
import time
from typing import Tuple

import pytest
from chromedriver_py import binary_path
from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.remote.webdriver import WebDriver
from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.support.ui import WebDriverWait

from more_expected_conditions import LoginStateChanges, FormInputInvalidated

if not (os.path.exists("bundle.js") and os.path.isfile("bundle.js")):
    pytest.skip(
        "Javascript test bundle (bundle.js) not found: Have you run `npm install` and `npx webpack` in the selenium_suite directory?"
    )


@pytest.fixture(scope="function", autouse=True)
def setup_selenium():
    driver = webdriver.Chrome(binary_path)
    # navigate to the login page
    driver.get(os.environ["APP_URL"] + "/login")
    # inject javascript testing modules via window.test
    bundle = open("bundle.js")
    driver.execute_script(bundle.read())
    bundle.close()
    yield driver
    driver.quit()


def find_login_inputs(driver: WebDriver) -> Tuple[WebElement, WebElement, WebElement]:
    """
    Helper method to retrieve email input, password input and submit button in the login form.

    :param driver: webdriver instance
    :return: email_input, password_input, submit_button
    """
    email_input = driver.find_element_by_id("email")
    password_input = driver.find_element_by_id("password")
    submit_button = driver.find_element_by_id("loginbtn")
    return email_input, password_input, submit_button


class TestValidCredentials:
    """
    Tests sample logins using a set of admin and normal student user credentials
    """

    @pytest.mark.skipif(
        not os.environ.get("ADMIN_EMAIL"),
        reason="please set ADMIN_EMAIL environment variable to do admin login tests",
    )
    @pytest.mark.skipif(
        not os.environ.get("ADMIN_PASSWORD"),
        reason="please set ADMIN_PASSWORD environment variable to do admin login tests",
    )
    def test_admin_login(self, setup_selenium):
        driver = setup_selenium
        email_input, password_input, submit_button = find_login_inputs(driver)
        email_input.send_keys(os.environ["ADMIN_EMAIL"])
        password_input.send_keys(os.environ["ADMIN_PASSWORD"])
        submit_button.click()
        # check that we are logged in as an admin
        try:
            # wait until the login success and page changes
            WebDriverWait(driver, 10).until(LoginStateChanges(driver))
        except TimeoutException:
            pytest.fail("Login timed out")
        # assert we are in the dashboard after logging in
        assert driver.execute_script("return window.location.pathname") == "/dashboard"
        # assert we are in the admin dashboard, not the normal user dashboard
        alert = driver.find_element_by_css_selector(".alert.alert-success")
        assert "You are logged in as admin!" in alert.text

    @pytest.mark.skipif(
        not os.environ.get("STUDENT_EMAIL"),
        reason="please set STUDENT_EMAIL environment variable to do user login tests",
    )
    @pytest.mark.skipif(
        not os.environ.get("STUDENT_PASSWORD"),
        reason="please set STUDENT_PASSWORD environment variable to do user login tests",
    )
    def test_user_login(self, setup_selenium):
        driver = setup_selenium
        email_input, password_input, submit_btn = find_login_inputs(driver)
        email_input.send_keys(os.environ["STUDENT_EMAIL"])
        password_input.send_keys(os.environ["STUDENT_PASSWORD"])
        submit_btn.click()
        try:
            # wait until login page state changes
            WebDriverWait(driver, 10).until(LoginStateChanges(driver))
        except TimeoutException:
            pytest.fail("Login timed out")
        # assert we are in the dashboard after logging in
        assert driver.execute_script("return window.location.pathname") == "/dashboard"
        # assert we are in the user dashboard, not the admin dashboard
        navbar = driver.find_element_by_css_selector(".navbar-start")
        assert "Student Form" in navbar.text


class TestSyntacticallyInvalidInputsPreventFormSubmission:
    """
    Tests how the system will react to syntactically invalid inputs such as blank email addresses.
    """

    @staticmethod
    def syntactically_invalid_emails():
        """
        Factory method to get bad test cases
        """
        tests = {
            "blank email": "",
            "email with spaces": " " * random.randint(1, 100),
            "no @": "something",
            "multiple @'s": "something@@",
            "space between account name and @": "something @gmail.com",
            "space between domain name and @": "something@ gmail.com",
            "space around @": "something @ gmail.com",
        }
        return [pytest.param(value, id=key) for key, value in tests.items()]

    @pytest.mark.parametrize(
        "bad_email", syntactically_invalid_emails.__func__(),
    )
    def test_bad_email_rejected_clientside(self, setup_selenium, bad_email: str):
        """
        Tests that syntatically invalid email address are rejected client-side using HTML5 form validation.

        :param bad_email: bad email format to test. parameterized.
        """
        driver = setup_selenium
        email_input, password_input, submit_btn = find_login_inputs(driver)
        email_input.send_keys(bad_email)
        # don't leave password input blank
        password_input.send_keys("ayyy lemeow")
        submit_btn.click()
        try:
            WebDriverWait(driver, 3).until(FormInputInvalidated(email_input))
        except TimeoutException:
            pytest.fail("Did not detect client side validation failure")
        email_input.clear()
        password_input.clear()

    def no_password_rejected_clientside(self, setup_selenium):
        """
        Tests that the user cannot submit the form if there is no password entered.
        """
        driver = setup_selenium
        email_input, password_input, submit_btn = find_login_inputs(driver)
        email_input.send_keys("someone@somewhere.com")
        submit_btn.click()
        try:
            WebDriverWait(driver, 3).until(FormInputInvalidated(password_input))
        except TimeoutException:
            pytest.fail("Did not detect client side validation failure")
        email_input.clear()
        password_input.clear()


class TestSyntacticallyValidButNonexistentCredentials:
    """
    Performs tests against syntactically valid, but nonexistent credentials
    """

    def test_nonexistent_email(self, setup_selenium):
        """
        Try to login with a nonexistent user. Checks that the browser stays on the login page and an alert box appears.
        """
        driver = setup_selenium
        email_input, password_input, submit_btn = find_login_inputs(driver)
        email_input.send_keys(str(round(time.time())) + "@mailinator.com")
        password_input.send_keys("ayyy lemeow")
        old_url = driver.current_url
        submit_btn.click()
        try:
            WebDriverWait(driver, 10).until(LoginStateChanges(driver))
        except TimeoutException:
            pytest.fail("Login timed out")
        # check that there is no change in url after login failure
        assert driver.current_url == old_url
        # check that there is an error alert box
        alert = driver.find_element_by_css_selector(".alert.alert-danger")
        assert "There is no user record" in alert.text

    @pytest.mark.skipif(
        not os.environ.get("ADMIN_EMAIL") and not os.environ.get("STUDENT_EMAIL"),
        reason="Please set either ADMIN_EMAIL or STUDENT_EMAIL environment variables to run this test",
    )
    def test_wrong_password(self, setup_selenium):
        """
        Try to login with an existing email, but with the wrong password. Requires either ADMIN_EMAIL or STUDENT_EMAIL to be set.
        """
        driver = setup_selenium
        email_input, password_input, submit_btn = find_login_inputs(driver)
        email_input.send_keys(os.environ["ADMIN_EMAIL"] or os.environ["STUDENT_EMAIL"])
        password_input.send_keys("ayyyy lemeow")
        old_url = driver.current_url
        submit_btn.click()
        try:
            WebDriverWait(driver, 10).until(LoginStateChanges(driver))
        except TimeoutException:
            pytest.fail("Login timed out")
        # check that there is no change in url after login failure
        alert = driver.find_element_by_css_selector(".alert.alert-danger")
        assert "The password is invalid" in alert.text
