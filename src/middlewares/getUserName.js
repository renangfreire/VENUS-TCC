const validateToken = require('../utils/ValidateToken')
const { verify } = require('jsonwebtoken') 
const prisma = require('../prisma')

async function getUserName(req, res, next){
    const sub = validateToken(req, res)

    if(!sub){
        next()
    }

   const user = await prisma.user.findUnique({where: {id: sub}}) 

    const userName = user.name.split(' ')[0];

   if(!user){
    res.status(404).end()
   }
   req.user_name = userName
   return next()
}

module.exports = getUserName