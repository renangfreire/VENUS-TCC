const prisma = require('../prisma')
const CorreiosFreteService = require('../service/CorreiosFreteService')
const FindProductService = require('../service/FindProductService')

class PaymentService {
    async execute({userId, productArray}){

        const correiosFreteService = new CorreiosFreteService()
        const findProductService = new FindProductService()
        let freteData

        const [ activeAddress ] = await prisma.userAddresses.findMany({where: { userId, padrao: true }})
        
        // Por algum motivo quando eu dou refresh na pagina, apos a inserção os dados não são inseridos na pagina, mesmo retornando, com esse timeout funciona.
        setTimeout(() => {}, 100)

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

        
        if(activeAddress){
            delete activeAddress.id
            delete activeAddress.userId

            freteData = await correiosFreteService.calcFrete(activeAddress.cep)
        }


        return { activeAddress, freteData, products}
    }
}

module.exports = PaymentService





