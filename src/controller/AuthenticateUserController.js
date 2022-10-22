const AuthenticateUserService = require('../service/AuthenticateUserService')

module.exports = {
    async handle(req, res){
        const { email, password } = req.body

        const authenticateUserService = new AuthenticateUserService()
        let token
        
        try{
            token = await authenticateUserService.execute({ email, password })
        }catch(err){
            if(err){
                return res.render('index', {page: "login", styles: ["login", "modalError"], libs: ["modalError"], username: req.user_name, err: err.message});
            }
        }
        
        res.status(201).cookie('access_token', 'Bearer ' + token, {expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), httpOnly: true})
        return res.redirect('/')
    }
}