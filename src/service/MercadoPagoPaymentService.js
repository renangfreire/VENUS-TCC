const mercadoPago = require('mercadopago')
const CreateOrderService = require('./CreateOrderService')
const OrderRepository = require('../repositories/OrderRepositories')


mercadoPago.configurations.setAccessToken(process.env.ACCESS_TOKEN_MP);

class PaymentService{
    async execute({orderData, payment_data, res}){

      const orderRepository = new OrderRepository()
      const createOrderService = new CreateOrderService(orderRepository)


 await mercadoPago.payment.save(payment_data)
  .then(function(response) {

    if(response.body.status != 'rejected'){
      res.clearCookie('cart')
    }

    createOrderService.execute({
        payment_data,
        statusPag: response.body.status.toUpperCase(),
        orderData,
    })


    return res.status(response.status).json({
      status: response.body.status,
      status_detail: response.body.status_detail,
      id: response.body.id
    })
  })
  .catch(function(error) {
    return console.error(error)
  });
  
    }
}

module.exports = PaymentService;