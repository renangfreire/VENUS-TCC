const { verify } = require('jsonwebtoken') 
const validateToken = require('../utils/ValidateToken')

function ensureAuthenticated(req, res, next){
    const sub = validateToken(req, res)
    
    if(!sub){
        res.redirect('/login')
    }

    req.user_id = sub

    return next()
}

module.exports = ensureAuthenticated