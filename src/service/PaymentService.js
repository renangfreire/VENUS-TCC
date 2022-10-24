const prisma = require('../prisma')
const CorreiosFreteService = require('../service/CorreiosFreteService')
const FindProductService = require('../service/FindProductService')

class PaymentService {
    async execute({userId, productArray}){

        const correiosFreteService = new CorreiosFreteService()
        const findProductService = new FindProductService()
        let freteData

        const user = await prisma.user.findUnique({where: {id: userId}, select: {name: true, cpf: true, email: true}})
        
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

        const [ activeAddress ] = await prisma.userAddresses.findMany({where: { userId, padrao: true }})

        if(activeAddress){
            delete activeAddress.id
            delete activeAddress.userId

            freteData = await correiosFreteService.calcFrete(activeAddress.cep)
        }

        return { activeAddress, freteData, products, user}
    }
}

module.exports = PaymentService





