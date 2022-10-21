const OrderRepository = require('../repositories/OrderRepositories')
const prisma = require('../prisma')

class CreateOrderService{
    async execute({ payment_data, statusPag, orderData}){
        const idArray = []
        const idColors = []
        const idSizes = []

        console.log(payment_data)

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
                getProducts.find(el => {
                    if(el.id == orderData.productsArray.id){

                        const colors = el.color.find(elColor => elColor.color == cookieProduct.color)
                        const sizes = el.size.find(elSize => elSize.size == cookieProduct.size)

                        idColors.push({productColorsId: colors.id})
                        idSizes.push({productSizesId: sizes.id})
                }})
            })

            const arrayProducts = []

            idArray.forEach(el => arrayProducts.push({productsId: el}))

        await orderRepository.create({
            valorTotal: payment_data.transaction_amount, 
            valorFrete: freteValue, 
            productsId: arrayProducts,
            userId,
            userAddressId,
            productColorsId: idColors, 
            productSizesId: idSizes,
            statusPag: statusPag
        })

        return
    }
}

module.exports = CreateOrderService