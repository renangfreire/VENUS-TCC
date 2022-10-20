const FindProductService = require('./FindProductService')

class CartService{
    async execute({productArray}){

        const findProductService = new FindProductService();

        let products = await findProductService.execute({productArray})

        for(let cookieProduct of productArray){
          products.map((el, i) => {
            if(Object.values(el).includes(cookieProduct.id)){
                if(el.color[0].color == cookieProduct.color && el.size[0].size == cookieProduct.size){
                    el.quantity = cookieProduct.quantity
                }
            }
          })
        }

        return products;

    }
}

module.exports = CartService