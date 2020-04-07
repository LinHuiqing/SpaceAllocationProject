import pandas as pd
import re
import json
import numpy as np

COLUMN_NAMES = {
    "name": "Unnamed: 0",
    # "space": "Showcase Space Needed:",
    "power_outlets": "No. of Power Points Needed:",
    "big_pedestals": "Big",
    "small_pedestals": "Small",
    "monitors": "Monitor / Screen",
    "frames": "TV",
    "tables": "Table",
    "chairs": "Chair",
}


def bad_int(value):
    try:
        return int(value)
    except:
        return None


COLUMN_TYPES = {
    "name": str,
    "space": str,
    "length": float,
    "breadth": float,
    "power_outlets": bad_int,
    "big_pedestals": bad_int,
    "small_pedestals": bad_int,
    "monitors": bad_int,
    "frames": bad_int,
    "tables": bad_int,
    "chairs": bad_int,
}


def generate_dict_from_line_item(row):
    base = {
        firebase_name: row[excel_name]
        for (firebase_name, excel_name) in COLUMN_NAMES.items()
    }
    space_input_string = row.at["Showcase Space Needed:"]
    space_input_string = space_input_string if type(space_input_string) is str else ""
    matches = re.findall(
        r"(\d+\.?\d*)m?\s*(?:x|\*)?\s*(\d+\.?\d*)m?", space_input_string, re.IGNORECASE
    )
    if len(matches) != 0:
        base["length"], base["breadth"] = matches[0]
    return {
        firebase_name: COLUMN_TYPES[firebase_name](value)
        for firebase_name, value in base.items()
    }


def main():
    df = pd.read_csv("test.csv", converters=COLUMN_TYPES)
    f = generate_dict_from_line_item
    results = [f(row) for _, row in df.iterrows()]
    outfile = open("output.json", "w")
    json.dump(results, outfile)
    outfile.close()


if __name__ == "__main__":
    main()
