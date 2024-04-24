### Playwright test runner for Polestar UI and REST API

Design Page Objects and run Tests with JavaScript

### Run application

clone the repository
```bash
git clone https://github.com/aravindan1004/INFOSYS_QA_TECHNICAL.git
```

Install dependencies
```bash
npm install
npx playwright install --with-deps
```

Run test
```bash
npx playwright test - To run tests in Chrome, webkit and Firefox
npx playwright test --project chrome
```

##Folder Structure
```
INFOSYS_QA_TECHNICAL
├── pages
│   └── cookie_Page.js                                            #cookie_page testing functionality
│   └── getStarted_Page.js                                        #Not yet implemented
├── tests
│   ├── API_Testing                                               #API Test Suit
│   │   ├── API_Failure                                           #API Negative Scenerios
│   │   │   ├── 01_api_get_failure.spec.js                        #API GET Negative scenerios
│   │   │   └── 02_api_post_failure.spec.js                       #API POST Negative scenerios
│   │   └── API_Success                                           #API Success Scenerios
│   │       ├── 01_api_success_get.spec.js	        	  #API GET Success scenerios
│   │       ├── 02_api_success_post.spec.js                       #API POST Success scenerios
│   │       ├── 03_api_success_put_patch_update_delete.spec.js    #API PUT, PATCH, DELETE Success scenerios
│   │       └── 04_api_schema_validation.spec.js                  #Not yet implemented
│   └── polestar
│       ├── cookiePageTest.spec.js                                #cookie Page Automated test script
│       └── getStartedPageTest.spec.js                            #Not yet implemented
└── utils
    ├── Api_testing_Userdata.js                                   #User data for API testing in JS Object file
    ├── api_User_Schema.js                                        #Not yet implemented
    └── api_testing_base_page.js                                  #API basic functions

```
### Playwright test report
```
HTML-test-report : npx playwright show-report my-report
```
