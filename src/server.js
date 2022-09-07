const express = require('express')  
const router = require('./routes')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }))

app.use(router)

app.listen(3000, () => {
    console.log('listening on port 3000');
})