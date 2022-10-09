const prisma = require('../prisma')

class FindProductService{
    async execute({idProduct, colors, sizes}){
        console.log(idProduct, colors, sizes);
        
        let products = []

       const productExists = await prisma.products.findMany({
                where: {
                id:{ 
                    in: 
                    idProduct
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
          
            productExists.map((product, index) => {
            if(typeof idProduct == 'string'){
                
                // se for STRING - PAGE DE PRODUTO
                if(idProduct !== product.id){
                    throw new Error('Product not exits') 
                }

                products = product
            }

            // se for Array
            
            if(typeof idProduct !== 'string'){
            idProduct = idProduct.sort((a, b) => {return a-b})  

                if(idProduct[index] !== product.id){
                    throw new Error('Product not exits') 
                }
                
                    products.push(product)
            }
        })


        return products


    } 
}

module.exports = FindProductService

// pesquisar todos os produtos para NÂO quegrar a pag de produto
// limitar para pag de carrinho
// funcionar :)