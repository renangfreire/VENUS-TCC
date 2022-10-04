const express = require('express')
const app = express()

class UserLogoutService {
    async execute({venus_user_data, access_token, res}){
        
        if(!venus_user_data || !access_token){
            return
        }

        res.clearCookie('venus_user_data');
        res.clearCookie('access_token');
        
        return 
        
    }
}

module.exports = UserLogoutService