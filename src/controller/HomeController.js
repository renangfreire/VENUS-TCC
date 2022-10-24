const SearchAllProductsService = require('../service/SearchAllProductsService')

module.exports = {
    async handle(req, res){
        const response = {
                page: 'home',
                styles: ['home', 'swipper'],
                libs: ['homeSwipper'],
                username: req.user_name,
                err: undefined
        }
    

        const searchAllProductsService = new SearchAllProductsService()

        try {
            const products = await searchAllProductsService.execute()

            if(products){
                response.products = products.slice(0,6)
            }
        } catch (error) {
            if(error){
                return res.status(500).redirect('/404')
            }
        }

        return res.render('index', response)
    }
    

        
}