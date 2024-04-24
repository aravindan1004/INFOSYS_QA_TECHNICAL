const { test, expect } = require("@playwright/test");
import {userdata} from '../../../utils/Api_testing_Userdata';
const { API_Base_Class } = require('../../../utils/api_testing_base_page');

var userId = 1;

test.describe("Test POST, PUT, PATCH, DELETE API requests", () => {
  //create a object for a base page
  const basepageapi = new API_Base_Class;
  
  test("Post API test to create a user details", async ({request}) => {
    const getResponse = await request.post('/api/users', {
      data :  userdata.createnewuser
    });
    //verify the response status and code
    basepageapi.verify_Response_code(getResponse,"truth",201);
    //Get Response body in JSON format
    const getResponseBody = await basepageapi.get_Response_in_json(getResponse);
    //Verify that newly registered username is on the Response body
    expect(getResponseBody.name).toBe(userdata.createnewuser.name);
    //Verify that newly registered job is on the Response body
    expect(getResponseBody.job).toBe(userdata.createnewuser.job);

    //get the newly created user Id into variable
    userId = getResponseBody.id;

  });


  test("Test for PUT(update) a user details", async ({request}) => {
    const getResponse = await request.put('/api/users/'+userId, {
      data :  userdata.updatenewdataPUT
    });

    //verify the response status and code
    basepageapi.verify_Response_code(getResponse,"truth",200);
    //Get Response body in JSON format
    const getResponseBody = await basepageapi.get_Response_in_json(getResponse);
    //Verify that updated username is on the Response body
    expect(getResponseBody.name).toBe(userdata.updatenewdataPUT.name);
    //Verify that updated job is on the Response body
    expect(getResponseBody.job).toBe(userdata.updatenewdataPUT.job);
  });


  test("Test for PATCH (update) a user details", async ({request}) => {
    const getResponse = await request.patch('/api/users/'+ userId, {
      data :  userdata.updatenewdataPATCH
    });
    //verify the response status and code
    basepageapi.verify_Response_code(getResponse,"truth",200);
    //Get Response body in JSON format
    const getResponseBody = await basepageapi.get_Response_in_json(getResponse);
    //Verify that updated username is on the Response body
    expect(getResponseBody.name).toBe(userdata.updatenewdataPATCH.name);
    //Verify that updated job is on the Response body
    expect(getResponseBody.job).toBe(userdata.updatenewdataPATCH.job);
  });


  test("Test for DELETE a user details", async ({request}) => {
    const getResponse = await request.delete('/api/users/'+ userId);
    //verify the response status and code
    basepageapi.verify_Response_code(getResponse,"true",204);

  });
  
})