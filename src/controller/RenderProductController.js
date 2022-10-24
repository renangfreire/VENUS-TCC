const FindProductService = require('../service/FindProductService')
const ProductRepository = require('../repositories/ProductRepositories')

module.exports = {
    async handle(req, res, next){
        const productRepository = new ProductRepository()
        const findProductService = new FindProductService(productRepository)
        let productJson

        const id = req.params.id_product;
        
        try{
            productJson = await findProductService.execute({productArray: id, res})
        }catch(err){
            if(err){
                return res.redirect('/404')
            }
        }

        return res.render('index', { page: 'pg-product' , productJson , libs: ["pg-product", "productSwipper"], styles: ["pg-product", "swipper"], username: req.user_name, err: undefined})
         
    }
}