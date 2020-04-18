"""
Provides custom expected conditions for this test suite.
"""
from selenium.webdriver.remote.webdriver import WebDriver
from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.support import expected_conditions as EC


class LoginStateChanges:
    """
    Expected Condition to see if the page state changed after clicking on the login button
    It could be a successful login or not. This returns `True` for either.
    """

    def __init__(self, driver: WebDriver):
        self.url_changes = EC.url_changes(driver.current_url)
        self.alert_boxes = driver.find_elements_by_css_selector(".alert")

    def __call__(self, driver: WebDriver):
        if self.url_changes(driver):
            return True
        # check if new alert box appears
        # if the stored alert boxes is different, that means page has changed
        return self.alert_boxes != driver.find_elements_by_css_selector(".alert")


class FormInputInvalidated:
    """
    Expected Condition to see if a form input has been rejected using HTML5 client-side form validation
    """

    def __init__(self, element: WebElement):
        self.element = element

    def __call__(self, driver: WebDriver):
        # inject and expose javascript testing modules via window.test
        bundle = open("bundle.js")
        driver.execute_script(bundle.read())
        bundle.close()
        selector = driver.execute_script(
            "return window.test.getCssSelector(arguments[0])", self.element
        )
        return (
            driver.find_element_by_css_selector(selector + ":invalid") == self.element
        )
