const PaymentService = require('../service/PaymentService')

module.exports = {
    async handle(req, res){

        const userId = req.user_id

        const paymentService = new PaymentService()

        const { activeAddress, freteData } = await paymentService.execute({userId})

        res.render('index', {
        page: "pagamento", 
        styles: ["pagamento"], 
        libs: ['pagamento'], 
        err: undefined,
        username: req.user_name,
        activeAddress,
        freteData
        })
    }
}