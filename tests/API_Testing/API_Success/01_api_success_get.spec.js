const { test, expect } = require("@playwright/test");
const { API_Base_Class } = require('../../../utils/api_testing_base_page');

const page = 2;
const userId = 2;
const resourceId = 2;
const delayTime = 3;

test.describe("Test all the GET API requests endpoints", () => {
  //create a object for a base page
  const basepageapi = new API_Base_Class

  test("GET the List of Users on the particular page", async ({request}) => {
    const getResponse = await request.get('/api/users?page='+ page);
    //verify the response status and code
    basepageapi.verify_Response_code(getResponse,"truth",200);
    //Get Response body in JSON format
    const getResponseBody = await basepageapi.get_Response_in_json(getResponse);
    //verify that page number on the Response body is equal to the page number in request
    expect(getResponseBody.page).toBe(page);
    //verify that data length in reponse body is equal to the per_page count
    expect(getResponseBody.data.length).toBe(getResponseBody.per_page);
    
  });
  
  
  test("GET a single user details", async ({request}) => {
  
    const getResponse = await request.get('/api/users/'+ userId)
    //verify the response status and code
    basepageapi.verify_Response_code(getResponse,"truth",200);
    //Get Response body in JSON format
    const getResponseBody = await basepageapi.get_Response_in_json(getResponse);
    //Verify the ID in reponce body is equal to the ID on the request
    expect(getResponseBody.data.id).toBe(userId);
    
  });
  
  test("GET the List of all Resources", async ({request}) => {
  
    const getResponse = await request.get('/api/unknown/')
    //verify the response status and code
    basepageapi.verify_Response_code(getResponse,"truth",200);
    //Get response body in JSON format
    const getResponseBody = await basepageapi.get_Response_in_json(getResponse);
    //verify that the response body has page number 1
    expect(getResponseBody.page).toBe(1);
    //verify that first id under data is equal to 1
    expect(getResponseBody.data[0].id).toBe(1);
  });
  
  
  test("GET a single Resource details", async ({request}) => {
  
    const getResponse = await request.get('/api/unknown/'+resourceId)
    //verify the response status and code
    basepageapi.verify_Response_code(getResponse,"truth",200);
    //Get response body in JSON format
    const getResponseBody = await basepageapi.get_Response_in_json(getResponse);
    //verify that the ID in Response is equal to the id in request
    expect(getResponseBody.data.id).toBe(resourceId);
  });


  test("GET the delayed Response", async ({request}) => {
  
    var starttime = new Date()
    const getResponse = await request.get('/api/user?delay='+delayTime)
    //verify the response status and code
    var endtime = await new Date()
    var actualTime = (endtime.getSeconds()-starttime.getSeconds());
    //verify that actual delay time is equal to the given one
    expect (actualTime).toBe(delayTime);
    basepageapi.verify_Response_code(getResponse,"truth",200);
    //Get response body in JSON format
    const getResponseBody = await basepageapi.get_Response_in_json(getResponse);
  });

})

