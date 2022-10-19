const PaymentService = require('../service/PaymentService')


module.exports = {
    async handle(req, res) {

      const payment_data = req.body

        const paymentService = new PaymentService()

        await paymentService.execute({payment_data, res})
    }
}