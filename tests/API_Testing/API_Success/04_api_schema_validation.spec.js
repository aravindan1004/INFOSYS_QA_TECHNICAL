const schema = require('../../../utils/api_User_Schema');
const { test, expect } = require("@playwright/test");
const { API_Base_Class } = require('../../../utils/api_testing_base_page');
const Ajv = require("ajv")


const userId = 2;

test.skip("Schema validation", async({ request } ) => {

      //create a object for a base page
    const basepageapi = new API_Base_Class
    const ajv = new Ajv();

    const getResponse = await request.get('/api/users/'+ userId)
    //verify the response status and code
    basepageapi.verify_Response_code(getResponse,"truth",200);
    
        console.log(schema);
        console.log("-----------------------------------------------------------------");
        console.log(getResponse.body.data);
      const validate = ajv.compile(schema)
      const valid = validate(getResponse.body);
      
      if (await !valid) console.log(validate.errors)





/*

    
    
    console.log(schema.User);
    console.log("-----------------------------------------------------------------");
    console.log(getResponseBody.data);
    const valid = ajv.validate(schema.User, getResponseBody.data);
    expect(valid).toBe(true);
    */
});