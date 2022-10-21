const prisma = require('../prisma')

class FindProductService{
    async execute(productArray){
        let products = []
        let idArray = []

        if(typeof productArray == "string"){
            idArray.push(productArray)
        }

        if(typeof productArray !== "string"){
            productArray.map(e => idArray.push(e.id))
        }

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
             console.log(productArray)
            if(typeof productArray == "string"){
                // se for Req de pag produto
                if(productArray !== product.id){
                    throw new Error('Product not exits') 
                }
                products = product
                console.log(product)
            }
        })
            // se for Array
            
            if(productArray.length > 1 && typeof productArray !== "string"){
            productArray.forEach(cookieProduct => {
                getProducts.find(el => {
                    if(el.id == cookieProduct.id){
                        const newObj = Object.assign({}, el)

                        newObj.color = [{color: cookieProduct.color}]
                        newObj.size = [{size: cookieProduct.size}]

                        products.push(newObj)
                }})
            })
            
            }
        console.log(products)
        return products
    } 
}

module.exports = FindProductService

// pesquisar todos os produtos com todas cores e tamanhos
// validação para quando for pag product
// quand for carrinho, ele vai se auto configurar

// limitar para pag de carrinho
// funcionar :)