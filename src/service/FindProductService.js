const prisma = require('../prisma')
const express = require('express')

class FindProductService{
    async execute({productArray, res}){
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

        if(getProducts.length < 1){
            throw new Error("Product not exists")
        }

         getProducts.map((product, i) => {
            if(typeof productArray == "string"){
                // se for Req de pag produto
                if(productArray !== product.id){
                    throw new Error('Product not exits') 
                }
                products = product
            }
        })
            // se for Array
            
            if(typeof productArray !== "string"){
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
        return products
    } 
}

module.exports = FindProductService

// pesquisar todos os produtos com todas cores e tamanhos
// validação para quando for pag product
// quand for carrinho, ele vai se auto configurar

// limitar para pag de carrinho
// funcionar :)