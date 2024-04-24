const api_User_Schema = {
        id	: {type:"integer"},
        //email	: {type:"string"},
        first_name	: {type:"string"},
        last_name : {type:"string"},
        avatar	: {type:"string"},
        required : ["id", "email", "first_name", "last_name", "avatar"],
        additionalProperties : false
        };

module.exports = api_User_Schema