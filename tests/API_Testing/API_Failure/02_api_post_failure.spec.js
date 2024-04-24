const { test, expect } = require("@playwright/test");
import {userdata} from '../../../utils/Api_testing_Userdata'
const { API_Base_Class } = require('../../../utils/api_testing_base_page');


test.describe("Test all the POST API Unsuccessful requests", () => {
  //create a object for a base page
  const basepageapi = new API_Base_Class
  test("Test POST unsuccessful register", async ({request}) => {
    const getResponse = await request.post('/api/register', {
      data :  userdata.registerfailed
    });
    //verify the response status and code
    basepageapi.verify_Response_code(getResponse,"false",400);
    //Get Response body in JSON format
    const getResponseBody = await basepageapi.get_Response_in_json(getResponse);
    //Verify that Response has password missing error
    expect(getResponseBody.error).toBe(userdata.Responseregisterfailed.error)
  });

  test("Test POST unsuccessful Login", async ({request}) => {
    const getResponse = await request.post('/api/login', {
      data :  userdata.loginfailed
    });
    //verify the response status and code
    basepageapi.verify_Response_code(getResponse,"false",400);
    //Get Response body in JSON format
    const getResponseBody = await basepageapi.get_Response_in_json(getResponse);
    //Verify that Response has password missing error
    expect(getResponseBody.error).toBe(userdata.Responseloginfailederror.error)
  });

})