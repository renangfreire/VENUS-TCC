const prisma = require('../prisma')

class FindProductService{
    async execute(productArray){
        console.log(productArray)
        let products = []
        let idArray = []

        console.log(productArray)

        productArray.map(e => idArray.push(e.id))

       const getProducts = await prisma.products.findMany({
                where: {
                id:{ 
                    in: 
                    idArray
                }
        },
            orderBy: {
                id: 'asc'
            },
                include:{
                    color: {
                        select: {
                           color: true
                        }
                    },
                    size: {  
                        orderBy: {
                            size: 'asc',
                        },
                        select: {
                            size: true
                        }
                    }
                }
        })

         getProducts.map((product, i) => {
            if(productArray.length == 1){
                // se for Req de pag produto
                if(idArray[i] !== product.id){
                    throw new Error('Product not exits') 
                }
                products = product
            }
        })
            // se for Array
            
            if(productArray.length > 1){
            productArray.map(id => {
                console.log(id)
                
            })

            }

        return products
    } 
}

module.exports = FindProductService

// pesquisar todos os produtos com todas cores e tamanhos
// validação para quando for pag product
// quand for carrinho, ele vai se auto configurar

// limitar para pag de carrinho
// funcionar :)