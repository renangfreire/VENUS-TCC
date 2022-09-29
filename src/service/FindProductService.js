const productJson = require('../../product.json')
const { request, response } = require('express')
class FindProductService{
    async execute(productId){
        const products = []

         // Verifica se o Produto Existe
        function productExits(productId, p){
            
                    if(p.id !== productId){
                        throw new Error('Product not exits') 
                    }
                    return p
            } 
        if(typeof productId == 'string'){
            
            for(const p of productJson) {
                // se for STRING - PAGE DE PRODUTO
                if(productId != p.id){
                    continue
                }
                    productExits(productId, p)
                    return p
            }
            
    }


        // se for Array
        productId.map((element) => {
            
            for(const p of productJson){
                if(element != p.id){
                    continue
                }
                productExits(element, p);
               
                products.push(p)
            }        
        })
        
        return products

    } 
}

module.exports = FindProductService