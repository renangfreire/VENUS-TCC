const FindProductService = require('../service/FindProductService')

module.exports = {
    async handle(req, res){
        // res.cookie('cart', JSON.stringify({products: [{id: "37422705"}, {id: '26972801'}]}), { expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)})
        let products

        console.log(req.cookies.cart)

        if(req.cookies.cart != null){
        const arrayList = JSON.parse(req.cookies.cart).products;
        
        const idArray = []
        const colorsArray = []
        const sizesArray = []
    
        arrayList.map(function(product){

            idArray.push(product.id)
            colorsArray.push((product.color).toUpperCase())
            sizesArray.push(product.size)
        });
        
        const findProductService = new FindProductService();

        products = await findProductService.execute({idProduct: idArray, colors: colorsArray, sizes: sizesArray})

    }

    return res.render("index", {page: "carrinho", libs:['carrinho'], styles: ["carrinho"], username: req.user_name, products});
        
    }
}