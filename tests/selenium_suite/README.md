# Selenium Test Suites – Python

This test suite tests UI logic of the space input form, login forms, and tests for XSS vulnerabilities. Requires a Python installation and a version of Chrome compatible with the chromedriver binary specified in `requirements.txt` (e.g. if version 80 is specified in requirements file, your system should have chromium version 80 installed as well)

## Running the tests


### Setup the Python environment

In a new terminal window, create a new Python virtual environment and activate it:

```bash
python3 -m venv venv
source venv/bin/activate # unix-based, windows has a different way of doing it
```

Install required dependencies:

```bash
pip install -r requirements.txt
```

### Setup the JS environments

There are two JS projects: one vue-mini project in `dummy_space_form`, and one in this directory.

The former is for testing the space form individually, the other is for injecting testing tools for `test_logins` and `test_xss`.

### Setup dummy_space_form

```bash
cd dummy_space_form
npm install
npm run serve
```

Take note of the app URL without trailing slashes, and save it to the `FORM_APP_URL` environment variable.

### Setup injection files

```bash
cd (this directory)
npm install
npx webpack
```

### Setup the main app

In the project root, `npm install` and `npm run serve`.

Take note of the app URL without trailing slashes, and save it to the `APP_URL` environment variable.

### Set other environment variables

4 other environment variables are required to run all the tests in this test suite:

| Key            | Value                            |
| -------------- | -------------------------------- |
| ADMIN_EMAIL    | email for the admin account      |
| ADMIN_PASSWORD | password for the admin account   |
| USER_EMAIL     | email for sample user account    |
| USER_PASSWORD  | password for sample user account |

