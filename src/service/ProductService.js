const productJson = require('../../product.json')
const { request, response } = require('express')
class ProductService{
    async execute(product){
        // Verifica se o Produto Existe
        for(const p of productJson) {
            if(product != p.id){
                throw new Error('Product not exits')
            }
            return p
        }
    } 
}

module.exports = ProductService