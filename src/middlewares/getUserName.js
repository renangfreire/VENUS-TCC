const validateToken = require('../utils/ValidateToken')
const { verify } = require('jsonwebtoken') 
const prisma = require('../prisma');


async function getUserName(req, res, next){

   const tokenAlreadyExists = req.cookies.access_token ? true : false
   const userDataAlreadyExists = req.cookies.venus_user_data ? true : false

   // Verifica se tem um dado existente
   if(userDataAlreadyExists){
      if(!tokenAlreadyExists){
         res.clearCookie('venus_user_data')

         return next()
      }

      const cookieJSON = JSON.parse(req.cookies.venus_user_data)
      req.user_name = cookieJSON.clientUserName

      return next()
   }

   // Verifica se tem um token
   if(!tokenAlreadyExists){
      return next()
   }

   const sub = validateToken(req, res)

    if(!sub){
       return next()
    }
    
    const user = await prisma.user.findUnique({where: {id: sub}}) 

    const userName = user.name.split(' ')[0];

   if(!user){
    res.status(404).end()
   }
   if(tokenAlreadyExists){
      res.cookie("venus_user_data", JSON.stringify({isLoggedIn: tokenAlreadyExists, clientUserName: userName}), {httpOnly: true})
   }

   req.user_name = userName
   return next()
}

module.exports = getUserName