const CartService = require('../service/CartService')

module.exports = {
    async handle(req, res){
        if(req.cookies.cart != null){
        const arrayList = JSON.parse(req.cookies.cart).products;

        if(arrayList.length < 1){
          res.clearCookie("cart");
        }

        const productArray = []
    
        const cartService = new CartService()

        arrayList.map(function(product){
            productArray.push({
                id: product.id,
                color: product.color.toUpperCase(),
                size: product.size.toUpperCase(),
                quantity: product.quantity
            })
        });
        
        const products = await cartService.execute({productArray})

    return res.render("index", {page: "carrinho", libs:['carrinho'], styles: ["carrinho"], username: req.user_name, products, err: undefined});
    }

    return res.render("index", {page: "carrinho", libs:['carrinho'], styles: ["carrinho"], username: req.user_name, products: undefined, err: undefined});
  }
}
