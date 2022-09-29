const FindProductService = require('../service/FindProductService')

module.exports = {
    async handle(req, res, next){
        const findProductService = new FindProductService()

        const idProduct = req.params.id_product;
        
        const productJson = await findProductService.execute(idProduct)
        
        return res.render('index', { page: 'pg-product' , productJson, libs: ["pg-product"], styles: ["pg-product"], username: req.user_name})
        
    }
}