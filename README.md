# Test Web app using Cypress.io
Test Airwalles's web app, automate following scenario:
- Launch and login to Web app.
- Click the LOG IN or 登录
- Assert user have been successfully logged in
- Navigate to Payments > Payment List
- Assert user is on Payment List.
- Click and validate the payment details.

## Run test
1. [Installing Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements), or [Download Cypress directly](https://download.cypress.io/desktop)
2. Clone or dowload this project from github
```bash
git clone git@github.com:mmcatt/Airwallex.git
```
3. Open Cypress and choose Airwallex project
4. Click spec.js, the test will automatically run

## Change environments
You can change enviroments without changing code, following these instructions:  
1. Change base URL  
Check ```cypress.json```, modify ```"baseUrl"```
2. Switch between languages  
To support Chinese, using ```Cypress.env('zh'), 'utf8')``` in ```spec.js```  
for English, using ```Cypress.env('en'), 'utf8')```  
You can add more language support, and configure them in ```cypress.json```
3. User data  
Set user data path in ```cypress.json```, you can modify it, or add other user's data.  
using ```Cypress.env('user')``` in ```spec.js```  
