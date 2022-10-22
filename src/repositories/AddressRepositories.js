const prisma = require('../prisma');

class AddressRepository {
    async create({cep,
        rua,
        identificacao,
        cidade,
        bairro,
        padrao,
        destinatario,
        idenEndereco,
        estado,
        complemento,
        userId}){
            
        const response = await prisma.userAddresses.create({
            data: {
                cep,
                rua,
                identificacao,
                cidade,
                bairro,
                padrao,
                destinatario,
                idenEndereco,
                estado,
                complemento,
                userId,
            }

        })
        return response
    }
}

module.exports = AddressRepository;