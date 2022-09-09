const express = require('express');

const CreateUserController = require('./controller/CreateUserController')

const router = express.Router()

router.get('/', (req, res) => {
    res.render("home")
})

router.get('/cadastro', (req, res) => {
    res.render("cadastro")
})

router.post('/cadastro', CreateUserController.handle)


module.exports = router 