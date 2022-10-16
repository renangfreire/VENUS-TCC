<<<<<<< HEAD
import Modal from './modal.js'
//import ProductComponent from './pg-product.js'

const modal = Modal()
//const productComponent = ProductComponent()
=======
<<<<<<< HEAD
import Modal from './modal.js'
//import ProductComponent from './pg-product.js'

const modal = Modal()
//const productComponent = ProductComponent()
=======
import Modal from './modal.js';

const modal = Modal()
>>>>>>> a05ec7295d0b195acea4ac6d84aadfb6e36ec17f
>>>>>>> 4b051a72c0218ec9fb836724c1b45c8bd8b44d4a
const buttonOpenModal = document.querySelector('#modalOpen')
const button = document.querySelectorAll('.btnColor')

buttonOpenModal.addEventListener('click', modal.open)
