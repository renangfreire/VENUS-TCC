const PaymentService = require('../service/PaymentService')


module.exports = {
    async handle(req, res) {
        const paymentService = new PaymentService()

        paymentService.execute()

        return res.json({"message": "successfully"})
    }
}