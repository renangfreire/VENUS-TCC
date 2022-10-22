const PaymentService = require('../service/PaymentService')

module.exports = {
    async handle(req, res){

        const userId = req.user_id

        if(req.cookies.cart == null){
            res.redirect('/carrinho')
        }

        if(req.cookies.cart != null){
            const arrayList = JSON.parse(req.cookies.cart).products;
            const productArray = []
            
            arrayList.map(function(product){
                productArray.push({
                    id: product.id,
                    color: product.color.toUpperCase(),
                    size: product.size.toUpperCase(),
                    quantity: product.quantity
                })
            });
        

        const paymentService = new PaymentService()

        const { activeAddress, freteData, products, user } = await paymentService.execute({userId, productArray})
        
        res.render('index', {
        page: "pagamento", 
        styles: ["pagamento"], 
        libs: ['pagamento'], 
        err: undefined,
        username: req.user_name,
        activeAddress,
        freteData,
        products,
        user
        })
    }
    }
}