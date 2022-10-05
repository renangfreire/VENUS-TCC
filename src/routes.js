const express = require('express');

const CreateUserController = require('./controller/CreateUserController')
const CreateProductController = require('./controller/CreateProductController')
const RenderProductController = require('./controller/RenderProductController')
const AuthenticateUserController = require('./controller/AuthenticateUserController')
const UserLogoutController = require('./controller/UserLogoutController')
const AddProductCartController = require('./controller/AddProductCartController')

// MIDDLEWARE
const ensureAuthenticate = require('./middlewares/ensureAuthenticated')
const getUserName = require('./middlewares/getUserName');
const CartController = require('./controller/CartController');

const router = express.Router()


// Routes GET
router.get('/', getUserName,  (req, res) => {
    res.render("index",{page: "home", styles: ["home"], username: req.user_name})
})
router.get('/home', getUserName, (req, res) => {
    res.render("index", {page: "home", styles: ["home"], username: req.user_name})
})

router.get('/carrinho', getUserName, CartController.handle)

router.get('/cadastro', getUserName, (req, res) => {
    res.render("index", {page: "cadastro", styles: ["login"], username: req.user_name});
})

router.get('/product/', (req, res) => {
    res.redirect('/')
})

router.get('/product/:id_product', getUserName, RenderProductController.handle)


router.get('/dados', ensureAuthenticate, getUserName, (req, res) => {
    res.render('index', {page: "dados", styles: ["dados"], username: req.user_name});
})
router.get('/login', getUserName,(req, res) => {
    res.render('index', {page: "login", styles: ["login"], username: req.user_name});
})
router.get('/popup', getUserName, (req, res) => {
    res.render('index', {page: "popup", username: req.user_name})
})
router.get('/pesquisa', getUserName, (req, res) => {
    res.render('index',  {page: "pesquisa", styles: ["pesquisa"],username: req.user_name})
})

router.get('/logout', UserLogoutController.handle)


// ROUTES POST
router.post('/cadastro', CreateUserController.handle)

router.post('/login', AuthenticateUserController.handle)

router.post('/carrinho', CartController.handle)

router.post('/createproduct/product', CreateProductController.handle)

router.post('/precarrinho', AddProductCartController.handle)

module.exports = router 