const prisma = require('../prisma')
const CorreiosFreteService = require('../service/CorreiosFreteService')

class PaymentService {
    async execute({userId}){

        const correiosFreteService = new CorreiosFreteService()
        let freteData

        const [ activeAddress ] = await prisma.userAddresses.findMany({where: { userId, padrao: true }})

        if(activeAddress){
            delete activeAddress.id
            delete activeAddress.userId

            freteData = await correiosFreteService.calcFrete(activeAddress.cep)
        }


        return { activeAddress, freteData}
    }
}

module.exports = PaymentService





