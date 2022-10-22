const PaymentService = require('../service/MercadoPagoPaymentService')


module.exports = {
    async handle(req, res) {

      const  {formData, orderData } = req.body
      const userId = req.user_id

<<<<<<< HEAD

=======
>>>>>>> 8d2b1852619f2b984225e1917a6f7e17215aae0b
      orderData.userId = userId      

        const paymentService = new PaymentService()

        await paymentService.execute({payment_data: formData, orderData,res})
      }
}