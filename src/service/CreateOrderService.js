const OrderRepository = require('../repositories/OrderRepositories')
const prisma = require('../prisma')

class CreateOrderService{
    async execute({ payment_data, statusPag, orderData, installment_amount}){

        const idArray = []
        const products = []

        const { freteValue, productsArray, userId } = orderData

        const orderRepository = new OrderRepository()

        if(typeof orderData.productsArray !== "string"){
            orderData.productsArray.map(e => idArray.push(e.id))
        }

        const { id: userAddressId } = await prisma.userAddresses.findFirst({
            where: {
                userId,
                padrao: true
            },
             select: {
                    id: true
            }})

        const getProducts = await prisma.products.findMany({
            where: {
            id:{ 
                in: 
                idArray
            }
            },
            select:{
                id: true,
             color: {
                    select: {
                        color: true,
                        id: true
                    }
                },
            size: {  
                    select: {
                            size: true,
                            id: true
                        }
                    }
                },
        }
        )
            orderData.productsArray.forEach(cookieProduct => {
                getProducts.find(({id, color, size}) => {
                    if(id == cookieProduct.id){

                        const colors = color.find(elColor => elColor.color == cookieProduct.color)
                        const sizes = size.find(elSize => elSize.size == cookieProduct.size)

                        products.push({
                            productsId: id,
                            colorsId: colors.id,
                            sizesId: sizes.id,
                            quantity: Number(cookieProduct.quantity)
                        })
                }})
            })

        await orderRepository.create({
            valorTotal: payment_data.transaction_amount, 
            valorFrete: freteValue, 
            userId,
            products,
            userAddressId,
            statusPag: statusPag,
            installments: payment_data.installments,
            methodPayment: payment_data.payment_method_id,
            installment_amount
        })

        return
    }
}

module.exports = CreateOrderService