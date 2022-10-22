const prisma = require('../prisma');
class OrderRepository{
    async create({
        valorTotal, 
        valorFrete, 
        rastreio, 
        productsId,
        statusOrder,
        userId,
        userAddressId,
        productColorsId, 
        productSizesId,
        statusPag
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
            color: {
                create: productColorsId
            },
            size: {
                create: productSizesId
            },
            products: {
                create: productsId
            },
            paymentDetails: {
                create: {
                    amount: valorTotal,
                    statusPag
                }
            }
        }})
    }
}

module.exports = OrderRepository