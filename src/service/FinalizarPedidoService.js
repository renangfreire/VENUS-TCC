const prisma = require('../prisma');

class FinalizarPedidoService{
    async execute({userId}){
        const order = await prisma.orders.findFirst({where: { 
            userId, 
                dateOrdered: {
            gte: new Date(new Date() - 5 * 60 * 1000)
        }},
    include:{
        products: {
            select: {
                Products: {
                    select: {
                        name: true, 
                        value: true,
                        images: true,
                    }
                },
                Colors: {
                    select: {          
                            color: true
                    }
                },
                Sizes: {
                    select: {
                        size: true
                    }
                },
                quantity: true
            }
        },
        User: {
            select: {
                name: true,
                address: {
                    where: {padrao: true},
                    select: {
                        cep: true,
                        rua: true,
                        identificacao: true,
                        bairro: true,
                        estado: true,
                        cidade: true,
                        complemento: true
                    }
                    
                }
            }
        },
        paymentDetails: {
            select: {
                    methodPayment: true,
                    installments: true,
                    statusPag: true,
                    installment_amount: true
            }
        }
        }
           
    })

    if(!order){
        throw new Error('Você não fez pedidos ultimamente')
    }

    const { valorTotal, valorFrete, statusOrder, products, User, id, paymentDetails} = order

    const orderId = id.split("-")[0] + '-' + id.split("-")[1]
    
    return { valorTotal, valorFrete, statusOrder, products, User, orderId, paymentDetails }
    }
}
module.exports = FinalizarPedidoService;