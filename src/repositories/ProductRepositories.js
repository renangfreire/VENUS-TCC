const prisma = require('../prisma');

class ProductRepository {
    async create({id, name, value, color, size, images}){
        
       await prisma.products.create({
            data: {
                id,
                name,
                value,
                color: {
                    create: color
                },
                size: {
                    create: size
                },
                images
            }
        })        
    }
}

module.exports = ProductRepository;