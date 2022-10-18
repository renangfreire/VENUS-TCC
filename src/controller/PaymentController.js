const PaymentService = require('../service/PaymentService')


module.exports = {
    async handle(req, res) {

        // const payment_data = {
        //     transaction_amount: Number(req.body.transactionAmount),
        //     token: req.body.token,
        //     description: req.body.description,
        //     installments: Number(req.body.installments),
        //     payment_method_id: req.body.paymentMethodId,
        //     issuer_id: req.body.issuer,
        //     payer: {
        //       email: req.body.email,
        //       identification: {
        //         type: req.body.identificationType,
        //         number: req.body.identificationNumber
        //       }
        //     }
        //   };
          
      const payment_data = req.body

        const paymentService = new PaymentService()

        await paymentService.execute({payment_data, res})

        // return res.json({"message": "successfully"})
    }
}