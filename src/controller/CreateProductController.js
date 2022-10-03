const CreateProductService = require('../service/CreateProductService')
const ProductRepository = require('../repositories/ProductRepositories')

module.exports = {
    async handle(req, res){
        const {name, value, color, size, images} = req.body

        const productRepository = new ProductRepository
        const createProductService = new CreateProductService(productRepository)

        await createProductService.execute({name, value, color, size, images})

        return res.status(201).json({'message': 'Product created successfully'})
    }
}