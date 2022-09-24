const AuthenticateUserService = require('../service/AuthenticateUserService')

module.exports = {
    async handle(req, res){
        const { email, password } = req.body

        const authenticateUserService = new AuthenticateUserService()
        
        const token = await authenticateUserService.execute({ email, password })

        res.status(201).cookie('access_token', 'Bearer ' + token, {expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), httpOnly: true})
        return res.redirect('/')
    }
}