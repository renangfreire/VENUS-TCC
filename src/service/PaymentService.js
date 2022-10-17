const mercadoPago = require('mercadopago')

mercadoPago.configurations.setAccessToken(process.env.ACCESS_TOKEN_MP);

class PaymentService{
    async execute(){
    
        var preference = {
            items: [
              {
                id: '26972801',
                title: "Moletom Nezuko",
                description: "Moletom Nezuko",
                quantity: 1,
                currency_id: 'BRL',
                unit_price: 79.99
              }
            ],
            payer : {
              email: 'teste@teste.com'
            },
            auto_return : "all",
            external_reference : "26972801",
          }
          
          const mp = mercadoPago.payment.create(preference)
          console.log(mp)

        return
    }
}

module.exports = PaymentService;