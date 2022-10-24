const GetUserDataService = require('../service/GetUserDateService')

module.exports = {
    async handle(req,res){

        const userId = req.user_id

        const getUserDataService = new GetUserDataService()
        
        try {
            const userData = await getUserDataService.execute({userId})

            if(userData){
                return res.render('index', {
                    page: 'dados',
                    styles: ['dados'],
                    username: req.user_name,
                    err: undefined,
                    userData
                  })
            }
        } catch (error) {
            if(error){
                console.log(error)
                return res.redirect('/404')
            }
        }
    }
}