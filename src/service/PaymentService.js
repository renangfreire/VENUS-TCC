const prisma = require('../prisma')

class PaymentService {
    async execute({userId}){
        const [ activeAddress ] = await prisma.userAddresses.findMany({where: { userId, padrao: true }})
    
        delete activeAddress.id
        delete activeAddress.userId

        return { activeAddress }
    }
}

module.exports = PaymentService





