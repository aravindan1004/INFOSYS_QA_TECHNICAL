const { test, expect } = require("@playwright/test");
import {userdata} from '../../../utils/Api_testing_Userdata'
const { API_Base_Class } = require('../../../utils/api_testing_base_page');


test.describe("Test all the POST API requests replated to Register and login", () => {
  //create a object for a base page
  const basepageapi = new API_Base_Class
  
  test("Post API test to register new username and password", async ({request}) => {
    const getResponse = await request.post('/api/register', {
      data :  userdata.register
    });
    //verify the response status and code
    basepageapi.verify_Response_code(getResponse,"truth",200);
    //Get Response body in JSON format
    const getResponseBody = await basepageapi.get_Response_in_json(getResponse);
    //Verify that newly registered username has Id in number format in Response
    expect(getResponseBody.id === Number)
    //Verify that there is a token in reponce body for the newly registered account
    expect(getResponseBody.token === String) 
  });


  test("Post API test for successful login", async ({request}) => {
    const getResponse = await request.post('/api/login', {
      data :  userdata.login
    });
    //verify the response status and code
    basepageapi.verify_Response_code(getResponse,"truth",200);
    //Get Response body in JSON format
    const getResponseBody = await basepageapi.get_Response_in_json(getResponse);
    //Verify that there is a token in reponce body for the newly registered account
    expect(getResponseBody.token === String)  

  });
})
