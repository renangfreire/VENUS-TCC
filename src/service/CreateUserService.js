const prisma = require('../prisma')
const PrismaUserRepository = require('../repositories/UserRepositories')
const { hash } = require('bcrypt')

class CreateUserService {
    async execute({name, password, email, cpf, sexo, tel}){
        const userRepository = new PrismaUserRepository()

        if(!email){
            throw new Error('Por favor insira um email correto')
        }

        const EmailAlreadyExists = await prisma.user.findUnique({where: { email }}) ? true : false

        if(EmailAlreadyExists){
            throw new Error('Por favor insira um email correto')
        }

        const passwordHash = await hash(password, 8)
        
        
        await userRepository.create({name, password: passwordHash, email, cpf, sexo, tel})
        
    }
} 

module.exports = CreateUserService