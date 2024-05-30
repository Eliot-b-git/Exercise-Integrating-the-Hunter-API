# Hunter.io Google Sheets Add-on

## Description
This Google Sheets add-on allows users to find email addresses using the Hunter.io API and display the results in the spreadsheet.

## Setup Instructions
1. Open Google Sheets and create a new spreadsheet.
2. Go to `Extensions` > `Apps Script` and copy the contents of `Code.gs` into the script editor.
3. Create a new HTML file named `ConfigSidebar.html` in the script editor and copy the contents of `ConfigSidebar.html` into it.
4. Save the project.
5. Go to `Deploy` > `Test deployments` to test the deployment.

## Usage Instructions
1. Open the Google Sheet with the add-on installed.
2. Go to the custom menu `Hunter.io` > `Configurer API` and enter your Hunter.io API key.
3. Enter first names, last names, and domain names in separate columns.
4. Use the formula `=FIND_EMAIL(A2; B2; C2)` to find the email addresses.

## Example
