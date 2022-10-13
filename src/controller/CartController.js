const FindProductService = require('../service/FindProductService')

module.exports = {
    async handle(req, res){
<<<<<<< HEAD
        res.cookie('cart', JSON.stringify({products: [{id: "60906868"}, {id: '75852980'}]}), { expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)})
=======
        // res.cookie('cart', JSON.stringify({products: [{id: "75343671"}, {id: '30274141'}]}), { expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)})
>>>>>>> 4b051a72c0218ec9fb836724c1b45c8bd8b44d4a
        let products
        if(req.cookies.cart != null){
        const arrayList = JSON.parse(req.cookies.cart).products;
        
        const idArray = []

      const idArray = []

      arrayList.map(function (product) {
        idArray.push(product.id)
      })

      const findProductService = new FindProductService()

      products = await findProductService.execute({ idProduct: idArray })
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
