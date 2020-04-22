import os
import time
import random
from selenium import webdriver
from chromedriver_py import binary_path
import pytest
from itertools import chain, combinations


# CSS selector that points to the mount point of the space form component. If the mock vue parent component changes, this must change.
SPACE_FORM_ROOT_SELECTOR = "body > div > div"


def powerset(iterable):
    "powerset([1,2,3]) --> () (1,) (2,) (3,) (1,2) (1,3) (2,3) (1,2,3)"
    s = list(iterable)
    return chain.from_iterable(combinations(s, r) for r in range(1, len(s) + 1))


@pytest.fixture(scope="function", autouse=True)
def setup_selenium():
    driver = webdriver.Chrome(binary_path)
    driver.maximize_window()
    driver.get(os.environ["FORM_APP_URL"])
    driver._form = driver.find_element_by_css_selector(SPACE_FORM_ROOT_SELECTOR)
    yield driver
    driver.quit()


def test_can_select_only_one_booth_size(setup_selenium):
    driver = setup_selenium
    size_selection_row = driver._form.find_element_by_css_selector(
        "div.tile.is-parent.is-vertical > div:nth-child(3) > div"
    )
    cards = size_selection_row.find_elements_by_class_name("binary-state-card")
    for card in cards:
        card.click()
        time.sleep(0.2)
        assert "selected" in card.get_attribute("class")
        for other_card in [c for c in cards if c != card]:
            assert "selected" not in other_card.get_attribute("class")


def test_increment_decrement_buttons_change_text_value(setup_selenium):
    driver = setup_selenium
    field_groups = driver.find_elements_by_css_selector(
        "div.b-numberinput.field.is-grouped"
    )
    for field_group in field_groups:
        randint = random.randint(1, 10)
        input_field = field_group.find_element_by_css_selector("input")
        input_field.send_keys(str(randint))
        assert input_field.get_property("value") == str(randint)
        minus_button = field_group.find_elements_by_class_name("button")[0]
        # test if pressing minus will decrease the value by one
        minus_button.click()
        assert input_field.get_property("value") == str(randint - 1)
        plus_button = field_group.find_elements_by_class_name("button")[1]
        # test if pressing plus will increase the value by one
        plus_button.click()
        assert input_field.get_property("value") == str(randint)


def test_numerical_input_fields_cannot_go_below_zero(setup_selenium):
    driver = setup_selenium
    field_groups = driver.find_elements_by_css_selector(
        "div.b-numberinput.field.is-grouped"
    )
    for field_group in field_groups:
        randint = random.randint(1, 10)
        input_field = field_group.find_element_by_css_selector("input")
        input_field.send_keys(str(randint))
        minus_button = field_group.find_elements_by_class_name("button")[0]
        for i in range(15):
            minus_button.click()
        assert input_field.get_property("value") == str(0)
