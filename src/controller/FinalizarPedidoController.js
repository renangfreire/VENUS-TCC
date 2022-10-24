const FinalizarPedidoService = require('../service/FinalizarPedidoService')

module.exports = {
    async handle(req ,res){
        const finalizarPedidoService = new FinalizarPedidoService()

        const userId = req.user_id

        try{
            const orderData = await finalizarPedidoService.execute({userId})
            if(orderData){
                return res.render('index', {
                    page: 'finalizarPedido',
                    styles: ['finalizarPedido'],
                    libs: ['finalizarPedido'],
                    username: req.user_name,
                    orderData
                  })
            }

        } catch(err){
            if(err){
                console.log(err.message)
                return res.redirect('/')
            }
        }
    }
}