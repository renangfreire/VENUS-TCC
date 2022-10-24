const prisma = require('../prisma');
class OrderRepository{
    async create({
        valorTotal, 
        valorFrete, 
        rastreio, 
        statusOrder,
        userId,
        userAddressId,
        products, 
        statusPag,
        installments,
        methodPayment,
        installment_amount
    }){
        await prisma.orders.create({
        data: {
            valorTotal,
            valorFrete,
            User: {
                connect: {
                    id: userId
                }
            },
            shippingAddress: {
                connect: {
                    id: userAddressId
                }
            },
            products: {
                create: products
            },
            paymentDetails: {
                create: {
                    amount: valorTotal,
                    statusPag,
                    methodPayment,
                    installments,
                    installment_amount
                }
            }
        }})
    }
}

module.exports = OrderRepository