const AddProductCartService = require('../service/AddProductCartService')

module.exports = {
    async handle(req, res){
        const { id ,color, size } = req.body
        let cookie

        console.log(req.cookies.cart);
        
        if(req.cookies.cart){
            cookie = JSON.parse(req.cookies.cart).products
        }

        const addProductCartService = new AddProductCartService()

        addProductCartService.execute({res, id, color, size, cookie})
        

        return res.redirect(`/carrinho/`)
    }
}