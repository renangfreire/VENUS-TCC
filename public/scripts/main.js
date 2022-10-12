<<<<<<< HEAD
import Modal from './modal.js'
//import ProductComponent from './pg-product.js'

const modal = Modal()
//const productComponent = ProductComponent()
=======
import Modal from './modal.js';

const modal = Modal()
>>>>>>> a05ec7295d0b195acea4ac6d84aadfb6e36ec17f
const buttonOpenModal = document.querySelector('#modalOpen')
const button = document.querySelectorAll('.btnColor')
 

buttonOpenModal.addEventListener('click', modal.open)
