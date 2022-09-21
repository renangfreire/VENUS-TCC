import Modal from './modal.js';
// import ProductComponent from './pg-product.js'

const modal = Modal()
// const productComponent = ProductComponent()
const buttonOpenModal = document.querySelector('#modalOpen')
const button = document.querySelectorAll('.btnColor')


buttonOpenModal.addEventListener('click', modal.open)