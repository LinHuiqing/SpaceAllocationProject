"""
Tests XSS vulnerabilities on vulnerable fields. Vulnerable fields are fields display user input from a database.
"""

import os
import time

import pytest
from chromedriver_py import binary_path
from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.action_chains import ActionChains
from more_expected_conditions import LoginStateChanges
from test_logins import find_login_inputs


if not (os.path.exists("bundle.js") and os.path.isfile("bundle.js")):
    pytest.skip(
        "Javascript test bundle (bundle.js) not found: Have you run `npm install` and `npx webpack` in the selenium_suite directory?"
    )


@pytest.fixture(scope="function", autouse=True)
def setup_selenium():
    driver = webdriver.Chrome(binary_path)
    driver.maximize_window()
    # inject javascript testing modules via window.test
    bundle = open("bundle.js")
    driver.execute_script(bundle.read())
    bundle.close()
    yield driver
    driver.quit()


def test_group_name_during_registration(setup_selenium):
    """
    During registration, users can enter a group name. The group name is echoed back to the user in home page. Check whether it is vulnerable to XSS.
    """
    driver = setup_selenium
    driver.get(os.environ["APP_URL"] + "/register")
    name_input = driver.find_element_by_id("name")
    # test xss by trying to insert a javascript alert
    name_input.send_keys("<script>alert('Ayyy lemeow')</script>")
    email_input = driver.find_element_by_id("email")
    email_input.send_keys("xss_selenium_test_" + str(time.time()) + "@mailinator.com")
    password_input = driver.find_element_by_id("password")
    password_input.send_keys("password")
    submit_btn = driver.find_element_by_css_selector(
        "button.btn.btn-primary[type='submit']"
    )
    submit_btn.click()
    try:
        WebDriverWait(driver, 10).until(LoginStateChanges(driver))
    except TimeoutException:
        pytest.fail("Did not register successfully")
    # check that we have arrived in the dashboard successfully
    assert "/dashboard" in driver.current_url
    # check that we did not see a javascript alert
    with pytest.raises(TimeoutException):
        WebDriverWait(driver, 3).until(EC.alert_is_present())


@pytest.mark.skipif(
    not os.environ.get("STUDENT_EMAIL"),
    reason="please set STUDENT_EMAIL environment variable to do user login tests",
)
@pytest.mark.skipif(
    not os.environ.get("STUDENT_PASSWORD"),
    reason="please set STUDENT_PASSWORD environment variable to do user login tests",
)
def test_space_form_xss(setup_selenium):
    """
    Test whether text inputs on the student space form are vulnerable to XSS.
    """
    driver = setup_selenium
    driver.get(os.environ["APP_URL"] + "/login")
    username_input, password_input, submit_btn = find_login_inputs(driver)
    username_input.send_keys(os.environ["STUDENT_EMAIL"])
    password_input.send_keys(os.environ["STUDENT_PASSWORD"])
    submit_btn.click()
    try:
        WebDriverWait(driver, 10).until(LoginStateChanges(driver))
    except TimeoutException:
        pytest.fail("Login timed out")
    link_to_form = driver.find_element_by_css_selector(
        "body > div > nav > div.navbar-menu > div.navbar-start > a"
    )
    link_to_form.click()
    try:
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located(
                (
                    By.CSS_SELECTOR,
                    "body > div > div > div.row > form > div:nth-child(5) > div > button.button.is-success > span > a",
                )
            )
        )
    except TimeoutException:
        pytest.fail("Didn't manage to go to space form")
    # inject javascript testing modules via window.test
    bundle = open("bundle.js")
    driver.execute_script(bundle.read())
    bundle.close()
    # if the form root html changes this needs to be changed
    form_root = driver.find_element_by_css_selector("body > div > div")
    # get a list of css selectors to test xss on
    input_selectors = [
        driver.execute_script("return window.test.getCssSelector(arguments[0])", e)
        for e in form_root.find_elements_by_css_selector("input[type='text']")
    ]
    for input_selector in input_selectors:
        current_input = driver.find_element_by_css_selector(input_selector)
        current_input.send_keys("""\" onfocus="alert('ayyy lemeow')" autofocus=\"""")
        time.sleep(0.5)
        submit_btn = driver.find_element_by_css_selector(
            "body > div > div > div.row > form > div:nth-child(5) > div > button.button.is-success"
        )
        actions = ActionChains(driver)
        actions.move_to_element(submit_btn).perform()
        submit_btn.click()
        # dismiss the modal
        try:
            WebDriverWait(driver, 10).until(
                EC.presence_of_element_located(
                    (
                        By.CSS_SELECTOR,
                        "body > div.dialog.modal.is-active > div.modal-card.animation-content > footer > button",
                    )
                )
            )
        except TimeoutException:
            pytest.fail("Couldn't find modal dialog post submission")
        modal_dismiss = driver.find_element_by_css_selector(
            "body > div.dialog.modal.is-active > div.modal-card.animation-content > footer > button"
        )
        modal_dismiss.click()
        link_to_form = driver.find_element_by_css_selector(
            "body > div > nav > div.navbar-menu > div.navbar-start > a"
        )
        link_to_form.click()
        try:
            WebDriverWait(driver, 10).until(
                EC.presence_of_element_located(
                    (
                        By.CSS_SELECTOR,
                        "body > div > div > div.row > form > div:nth-child(5) > div > button.button.is-success > span > a",
                    )
                )
            )
        except TimeoutException:
            pytest.fail("Didn't manage to go to space form")
        # check that we did not see a javascript alert
        with pytest.raises(TimeoutException):
            WebDriverWait(driver, 3).until(EC.alert_is_present())
