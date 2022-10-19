const prisma = require('../prisma');

class AddressRepository {
    async create({cep, rua, identificacao, cidade, estado, complemento, userId}){
        await prisma.userAddresses.create({
            data: {
                cep,
                rua,
                identificacao,
                cidade,
                estado,
                complemento,
                userId
            }
        })
    }
}

module.exports = AddressRepository;