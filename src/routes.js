const express = require('express');

const CreateUserController = require('./controller/CreateUserController')

const router = express.Router()


// Routes GET
router.get('/', (req, res) => {
    res.render("home")
})
router.get('/home', (req, res) => {
    res.render("home")
})
router.get('/carrinho', (req, res) => {
    res.render("index")
})

router.get('/cadastro', (req, res) => {
    res.render("cadastro")
})

router.get('/pg-product', (req, res) => {
    res.render('pg-product')
})
router.get('/dados', (req, res) => {
    res.render('dados')
})
router.get('/login', (req, res) => {
    res.render('login')
})
router.get('/popup', (req, res) => {
    res.render('popup')
})
router.get('/pesquisa', (req, res) => {
    res.render('pesquisa')
})



// ROUTES POST
router.post('/cadastro', CreateUserController.handle)


module.exports = router 