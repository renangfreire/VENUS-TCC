const prisma = require('../prisma')

class SearchAllProductsService {
    async execute(searchParam) {             
            const getAllProducts = await prisma.products.findMany({
                where: {
                    name: {
                        contains: searchParam
                    },
                },
                select: {id: true, name: true, value: true, images: true}})
        
        return getAllProducts
    }
}

module.exports = SearchAllProductsService