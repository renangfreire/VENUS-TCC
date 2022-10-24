const FindProductService = require('../service/FindProductService')
const ProductRepository = require('../repositories/ProductRepositories')
const SearchAllProductsService = require('../service/SearchAllProductsService')

module.exports = {
    async handle(req, res, next){
        const productRepository = new ProductRepository()
        const findProductService = new FindProductService(productRepository)
        const searchAllProductsService = new SearchAllProductsService()

        let productJson
        let moreProducts

        const id = req.params.id_product;
        
        try{
            productJson = await findProductService.execute({productArray: id, res})
            const getProducts = await searchAllProductsService.execute()

            moreProducts = getProducts.slice(0, 3)
        }catch(err){
            if(err){
                return res.redirect('/404')
            }
        }

        return res.render('index', { page: 'pg-product' , productJson, moreProducts, libs: ["pg-product", "productSwipper"], styles: ["pg-product", "swipper"], username: req.user_name, err: undefined})
         
    }
}