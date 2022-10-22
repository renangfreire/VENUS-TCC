const express = require('express')  
require("express-async-errors")

const router = require('./routes')
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const flush = require('connect-flash')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // SOMENTE PARA USO DO INSOMNIA, DESABILITAR PRA USAR NORMAL

app.use(session({   
    secret: 'secret', 
    cookie: {maxAge: 60000}, 
    resave: false, 
    saveUninitialized: false
}))
app.use(flush())
app.use(cookieParser())
app.use(router)


app.use((err, req, res, next) => {
    if(err instanceof Error){
        return res.status(400).json({err: err.message})
    }
    return res.return(500).json({
        "status": "ERROR",
        "message": "Internal Server Error"})
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})