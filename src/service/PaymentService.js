const mercadoPago = require('mercadopago')

mercadoPago.configurations.setAccessToken(process.env.ACCESS_TOKEN_MP);

class PaymentService{
    async execute({id, description, quantity, amount}){
    
        var preference = {
            items: [
              item = {
                id,
                title: description,
                description,
                quantity,
                currency_id: 'BRL',
                unit_price: parseFloat(amount)
              }
            ],
            payer : {
              email: email
            },
            auto_return : "all",
            external_reference : id,
            back_urls : {
              success : getFullUrl(req) + "/payments/success",
              pending : getFullUrl(req) + "/payments/pending",
              failure : getFullUrl(req) + "/payments/failure",
            }
          }
          
          mercadoPago.payment.create(preference)

        //   mercadoPago.preferences.get()

        return
    }
}

module.exports = PaymentService;