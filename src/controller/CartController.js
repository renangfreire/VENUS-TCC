const FindProductService = require('../service/FindProductService')

module.exports = {
    async handle(req, res){
        let products

        if(req.cookies.cart != null){
        const arrayList = JSON.parse(req.cookies.cart).products;
        
        const productArray = []
    
        arrayList.map(function(product){

            productArray.push({
                id: product.id,
                color: product.color.toUpperCase(),
                size: product.size.toUpperCase()
            })
        });
        
        const findProductService = new FindProductService();

        products = await findProductService.execute({productArray})
      const findProductService = new FindProductService()

    return res.render("index", {page: "carrinho", libs:['carrinho'], styles: ["carrinho"], username: req.user_name, products, err: undefined});
    }

    return res.render('index', {
      page: 'carrinho',
      libs: ['carrinho'],
      styles: ['carrinho'],
      username: req.user_name,
      products
    })
  }
}
