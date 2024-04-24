const {test, expect} = require('@playwright/test')
const { API_Base_Class } = require('../../../utils/api_testing_base_page')

const userId = 23;
const resourceId = 23;

test.describe("Test all the GET not found scenerios", () => {
  //create a object for a base page
  const basepageapi = new API_Base_Class

  test("Verify that single user not found", async ({request}) => {
    
    const getResponse = await request.get('/api/users/'+ userId)
    //verify the response status and code
    basepageapi.verify_Response_code(getResponse,"false",404)
    
  });


  test("Verify that single Resource not found", async ({request}) => {
    
    const getResponse = await request.get('/api/unknown/'+ resourceId)
    //verify the response status and code
    basepageapi.verify_Response_code(getResponse,"false",404)
  });

})
