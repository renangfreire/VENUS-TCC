const prisma = require('../prisma')
const { compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')

require('dotenv').config()


class AuthenticateUserService {
    async execute({email, password}){
        if(!email || !password){
            throw new Error("Please insert an email address and password")
        }

        const user = await prisma.user.findUnique({where: {email}}) 

        if(!user){
            throw new Error('Email/password incorrect')
        }
        const passwordMatch = await compare(password, user.password)
        if(!passwordMatch){
            throw new Error('Email/password incorrect')
        }
        const token = await sign({email: user.email}, process.env.JWT_SECRET, {subject: user.id, expiresIn: "1d"})
        
        
        return token
    }
}

module.exports = AuthenticateUserService