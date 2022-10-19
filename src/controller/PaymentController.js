const PaymentService = require('../service/PaymentService')

module.exports = {
    async handle(req, res){

        const userId = req.user_id

        const paymentService = new PaymentService()

        const { activeAddress } = await paymentService.execute({userId})

        console.log(activeAddress)

        res.render('index', {
        page: "pagamento", 
        styles: ["pagamento"], 
        libs: ['pagamento'], 
        err: undefined,
        username: req.user_name,
        activeAddress})
    }
}