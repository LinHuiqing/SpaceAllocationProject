import os
import time
import random
from selenium import webdriver
from chromedriver_py import binary_path
import pytest
from itertools import chain, combinations


def powerset(iterable):
    "powerset([1,2,3]) --> () (1,) (2,) (3,) (1,2) (1,3) (2,3) (1,2,3)"
    s = list(iterable)
    return chain.from_iterable(combinations(s, r) for r in range(1, len(s) + 1))


@pytest.fixture(scope="function", autouse=True)
def setup_selenium():
    driver = webdriver.Chrome(binary_path)
    driver.get(os.environ["APP_URL"])
    yield driver
    driver.quit()


def test_can_select_only_one_booth_size(setup_selenium):
    driver = setup_selenium
    size_selection_row = driver.find_element_by_css_selector(
        "body > div > section:nth-child(3) > div > div > div > div.tile.is-parent.is-vertical > div:nth-child(3) > div"
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


@pytest.mark.parametrize("combination", powerset(range(3)), ids=lambda k: str(k))
def test_can_select_multiple_additional_details(setup_selenium, combination):
    driver = setup_selenium
    cards = driver.find_element_by_css_selector(
        "body > div > section:nth-child(3) > div > div > div > div.tile.is-parent.is-vertical > div:nth-child(6) > div"
    ).find_elements_by_class_name("binary-state-card")
    cards_to_select = [card for (i, card) in enumerate(cards) if i in combination]
    for card_to_select in cards_to_select:
        card_to_select.click()
    time.sleep(0.5)
    for card in cards_to_select:
        assert "selected" in card.get_attribute("class")
    for card in [c for c in cards if c not in cards_to_select]:
        assert "selected" not in card.get_attribute("class")