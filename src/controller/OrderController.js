const CreateOrderService = require('../service/CreateOrderService')
const OrderRepository = require('../repositories/OrderRepositories')

module.exports = {
    async handle(req, res){

        const {
            valorTotal, 
            valorFrete, 
            rastreio, 
            productsId,
            statusOrder,
            userId,
            userAddressesId,
            productColorsId, 
            productSizesId,
            statusPag
        } = req.body

        const orderRepository = new OrderRepository()
        const createOrderService = new CreateOrderService(orderRepository);

        await createOrderService.execute({
            valorTotal, 
            valorFrete, 
            rastreio, 
            productsId,
            statusOrder,
            userId,
            userAddressesId,
            productColorsId, 
            productSizesId,
            statusPag
        })

        return res.json({'message': "bom dia"})
    }
}