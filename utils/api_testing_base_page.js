const {test, expect} = require ('@playwright/test')

exports.API_Base_Class = class API_Base_Class{

    async verify_Response_code(Response,status,code){
        if (status.toLowerCase() == 'truth'){
            expect(await Response.ok()).toBeTruthy();
        }
        else if (status.toLowerCase() == 'false'){
            expect(await Response.ok()).toBeFalsy();
        }
        expect(await Response.status()).toBe(code);
    }

    async get_Response_in_json(Response){
        return await Response.json();
    }

}
