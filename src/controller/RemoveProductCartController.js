const RemoveProductCartService = require("../service/RemoveProductCartService")

module.exports = {
    async handle(req, res){
        const { index } = req.body;
        const cookie = JSON.parse(req.cookies.cart).products

        const removeProductCartService = new RemoveProductCartService()

        removeProductCartService.execute({res, index, cookie})

        res.status(201).redirect('back')
    }
}