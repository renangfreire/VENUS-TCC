const ProductRepository = require('../repositories/ProductRepositories')
const prisma = require('../prisma')

class CreateProductService{
    async execute({name, value, color, size, images}){
        function createId(){
            let id

            for(let i = 0; i < 8; i++)
            i == 0 ? id = Math.floor(Math.random() * 10).toString() : id += Math.floor(Math.random() * 10).toString()

            return id
        }

        function ifMoreData(array, variableName){
            let dataArray = []
            
            for(let i = 0; i < array.length; i++){
                let dataObj = {}
                
                dataObj[variableName] = array[i]
                
                dataArray.push(dataObj)   
            }

            return dataArray
        }
        
        const productRepository = new ProductRepository();

        if(!name){
            throw new Error('Please provide a product name')
        }
        if(!value){
            throw new Error('Please provide a product value')
        }
        if(!images){
            throw new Error('Please provide a product images')
        }

        if(typeof color != 'string' && typeof color != 'undefined'){
            color = ifMoreData(color, 'color')
        }
        if(typeof size != 'string' && typeof size != 'undefined'){
            size = ifMoreData(size, 'size')
        }
        
        let productId = createId()

        let idAlreadyExists = await prisma.products.findUnique({where: {id: productId}}) ? true : false

        while(idAlreadyExists){
            productId = createId()

            idAlreadyExists = await prisma.products.findUnique({where: {id: productId}}) ? true : false
        }

        await productRepository.create({id: productId,name, value, color, size, images})
        
    }
}

module.exports = CreateProductService