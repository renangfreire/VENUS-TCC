const PaymentService = require('../service/MercadoPagoPaymentService')


module.exports = {
    async handle(req, res) {

      const  {formData, orderData } = req.body
      const userId = req.user_id


      orderData.userId = userId      

        const paymentService = new PaymentService()

        await paymentService.execute({payment_data: formData, orderData,res})
      }
}