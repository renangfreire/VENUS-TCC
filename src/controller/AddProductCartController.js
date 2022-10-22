const AddProductCartService = require('../service/AddProductCartService')

module.exports = {
    async handle(req, res){
        const { id ,color, size } = req.body
        const quantity = 1;
        let cookie
        
        if(req.cookies.cart){
            cookie = JSON.parse(req.cookies.cart).products
        }

        const addProductCartService = new AddProductCartService()

        addProductCartService.execute({res, id, color, size, quantity, cookie})
        return res.redirect(`/carrinho/`)
    }
}