const prisma = require('../prisma')

class GetUserDataService{
    async execute({userId}){
        const userData = await prisma.user.findUnique({
                where: {
                    id: userId
                },
            select: {
                address: {
                    select: {
                        bairro: true,
                        cidade: true,
                        cep: true,
                        estado: true,
                        complemento: true,
                        rua: true,
                        identificacao: true,
                        idenEndereco: true
                    }
                },
                cpf: true, email: true, name: true, sexo: true, tel: true
            },

        })

        if(!userData){
            throw new Error("Usuário Inexistente")
        }

        return userData
    }
}

module.exports = GetUserDataService;