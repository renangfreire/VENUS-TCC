const prisma = require('../prisma')
const PrismaUserRepository = require('../repositories/UserRepositories')
const { hash } = require('bcrypt')
const { sign } = require('jsonwebtoken')

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
        
        const user = await userRepository.create({name, password: passwordHash, email, cpf, sexo, tel})

        const token = await sign({email: user.email}, process.env.JWT_SECRET, {subject: user.id, expiresIn: "1d"})

        return token
        
    }
} 

module.exports = CreateUserService