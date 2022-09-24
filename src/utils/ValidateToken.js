const { verify } = require('jsonwebtoken') 

function validateToken(req, res){
    const authToken = req.cookies.access_token
    if(!authToken){
        return
    }

    const [, token] = authToken.split(' ')

    try{
        const { sub } = verify(token, process.env.JWT_SECRET)
        return sub
    }
    catch(err){
        res.status(401).end()
    }

    r
  
}

module.exports = validateToken;