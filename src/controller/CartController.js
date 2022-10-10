const FindProductService = require('../service/FindProductService')

module.exports = {
  async handle(req, res) {
    res.cookie(
      'cart',
      JSON.stringify({ products: [{ id: '03408245' }, { id: '68624231' }] }),
      { expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) }
    )
    let products
    if (req.cookies.cart != null) {
      const arrayList = JSON.parse(req.cookies.cart).products

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
