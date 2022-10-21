const express = require('express')

const CreateUserController = require('./controller/CreateUserController')
const CreateProductController = require('./controller/CreateProductController')
const RenderProductController = require('./controller/RenderProductController')
const AuthenticateUserController = require('./controller/AuthenticateUserController')
const UserLogoutController = require('./controller/UserLogoutController')
const AddProductCartController = require('./controller/AddProductCartController')
const RemoveProductCartController = require('./controller/RemoveProductCartController')
const MercadoPagoPaymentController = require('./controller/MercadoPagoPaymentController')
const PaymentController = require('./controller/PaymentController')
const NewAddressController = require('./controller/NewUserAddressController')
const CorreiosFreteController = require('./controller/CorreiosFreteController')
const CartController = require('./controller/CartController')
const OrderController = require('./controller/OrderController')

// MIDDLEWARE
const ensureAuthenticate = require('./middlewares/ensureAuthenticated')
const getUserName = require('./middlewares/getUserName')

const router = express.Router()
const err = undefined

// Routes GET
router.get('/', getUserName,  (req, res) => {
    res.render("index",{page: "home", styles: ["home"], username: req.user_name, err})
})
router.get('/home', getUserName, (req, res) => {
    res.render("index", {page: "home", styles: ["home"], username: req.user_name, err})
})

router.get('/carrinho', getUserName, CartController.handle)

router.get('/cadastro', getUserName, (req, res) => {
    res.render("index", {page: "cadastro", styles: ["login"], username: req.user_name, err});
})

router.get('/product/', (req, res) => {
  res.redirect('/')
})

router.get('/product/:id_product', getUserName, RenderProductController.handle)

router.get('/dados', ensureAuthenticate, getUserName, (req, res) => {
    res.render('index', {page: "dados", styles: ["dados"], username: req.user_name, err});
})
router.get('/login', getUserName,(req, res) => {
    res.render('index', {page: "login", styles: ["login"], username: req.user_name, err});
})
router.get('/popup', getUserName, (req, res) => {
    res.render('index', {page: "popup", username: req.user_name, err})
})
router.get('/pesquisa', getUserName, (req, res) => {
    res.render('index',  {page: "pesquisa", styles: ["pesquisa"],username: req.user_name, err})
})

router.get('/user/logout', UserLogoutController.handle)

router.get('/calcFrete/:cepUser', CorreiosFreteController.handle)
router.get('/searchCep/:cepUser', CorreiosFreteController.handle)

router.get('/pagamento', ensureAuthenticate, getUserName, PaymentController.handle)


router.get('*', getUserName, (req, res) => {
    res.render('index', {page: 'error404', styles: ['error404'], username: req.user_name, err})
})

// ROUTES POST
router.post('/cadastro', CreateUserController.handle)

router.post('/login', AuthenticateUserController.handle)

router.post('/carrinho', CartController.handle)

router.post('/createproduct/product', CreateProductController.handle)

router.post('/precarrinho', AddProductCartController.handle)

router.post('/removeProduct', RemoveProductCartController.handle)

router.post('/pagamento', ensureAuthenticate, MercadoPagoPaymentController.handle)

router.post('/new-address', ensureAuthenticate, NewAddressController.handle)

router.post('/criarPedido', OrderController.handle)

module.exports = router 