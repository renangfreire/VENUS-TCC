const prisma = require('../prisma')

class UpdateUserDataService{
    async execute({name, tel, sexo, userId, email}){

        const telFormated = tel.replace(/[^0-9]+/g, '-').slice(1)

        const user = await prisma.user.updateMany(
            {
                where: {
                id: userId,
            },
            data: {
                name,
                tel: telFormated, 
                sexo
            },
        })
    }
}

module.exports = UpdateUserDataService;