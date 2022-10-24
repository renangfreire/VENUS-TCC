const SearchAllProductsService = require('../service/SearchAllProductsService')

module.exports = {
    async handle(req,res){
        const searchAllProductsService = new SearchAllProductsService

        const searchParam = req.query.search
        const page = req.query.page

        try{
           const getProducts = await searchAllProductsService.execute(searchParam)    
        
           let products
           if(page == 1 || typeof page == 'undefined'){
             products = getProducts.slice(0, 6)
           } else{
            const indexArray = page * 2
             products = getProducts.slice(indexArray, indexArray + 6)
           }

           if(products){
            return res.render('index', {
                page: 'pesquisa',
                styles: ['pesquisa'],
                libs: ['pesquisar'],
                username: req.user_name,
                products,
                err: undefined,
                searchParam
            })
           }
        }catch(err){
            if(err){
                return res.redirect('/404')
            }
        }
       
    }
}