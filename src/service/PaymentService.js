const mercadoPago = require('mercadopago')

mercadoPago.configurations.setAccessToken(process.env.ACCESS_TOKEN_MP);

class PaymentService{
    async execute({payment_data, res}){

 await mercadoPago.payment.save(payment_data)
  .then(function(response) {
    return res.status(response.status).json({
      status: response.body.status,
      status_detail: response.body.status_detail,
      id: response.body.id
    });
  })
  .catch(function(error) {
    return console.error(error)
  });
  
    }
}

module.exports = PaymentService;