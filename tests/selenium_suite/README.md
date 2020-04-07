# Selenium Test Suites – Python

This test suite tests UI logic of the space input form. Requires a Python installation and a version of Chrome compatible with the chromedriver binary specified in `requirements.txt` (e.g. if version 80 is specified in requirements file, your system should have chromium version 80 installed as well)

## Running the tests

### Setup the mock space form

The mock space form is a "mini" vue project that contains just enough code to display the Space Form component. In particular, it contains a mock VueX store for the form.

```bash
cd dummy_space_form
npm install
npm run serve
```

And take note of the running url (especially the port) the page is being served on.

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

Export Environment Variables (see what was outputted when serving your mock space form):

```bash
export APP_URL=http://localhost:8080
```

Run tests.

```bash
pytest test_form.py
```
