
const UpdateUserDataService = require('../service/UpdateUserDataService')

module.exports = {
    async handle(req, res){
        const { name, sexo, tel, email} = req.body
        const userId = req.user_id

        const tokenAlreadyExists = req.cookies.access_token ? true : false

        const updateUserDataService = new UpdateUserDataService()

        updateUserDataService.execute({name, sexo, tel, userId, email})

        res.cookie("venus_user_data", JSON.stringify({isLoggedIn: tokenAlreadyExists, clientUserName: name.split(' ')[0]}), {httpOnly: true})
        return res.redirect('back')
    }
}