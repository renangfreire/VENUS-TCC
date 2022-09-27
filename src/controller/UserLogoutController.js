const UserLogoutService = require('../service/UserLogoutService')

module.exports = {
    async handle(req, res){
        const { venus_user_data, access_token} = req.cookies

        const userLogoutService = new UserLogoutService();

       await userLogoutService.execute({ venus_user_data, access_token, res})

       res.clearCookie('venus_user_data');
       res.clearCookie('access_token');

       return res.redirect('/')

        
    }
}