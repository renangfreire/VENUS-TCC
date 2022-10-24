// const prisma = require('../prisma');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

class UserRepositories{
    async create({name, email, password, cpf, sexo, tel}){              
        const response = await prisma.user.create({
            data: {
            name,
            email,
            password,
            cpf,
            sexo,
            tel
            }
        }
        )      
        return response
    }
}

module.exports = UserRepositories