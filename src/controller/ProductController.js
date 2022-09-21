const ProductService = require('../service/ProductService')
const productJson = require('../../product.json')

module.exports = {
    async handle(req, res, next){
        const productService = new ProductService()

        const idProduct = req.params.id_product;

        const productJson = await productService.execute(idProduct)
        
        return res.render('index', { page: 'pg-product' , productJson})
        
    }
}