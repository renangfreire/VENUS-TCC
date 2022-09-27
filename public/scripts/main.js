import Modal from './modal.js';

const modal = Modal()
const buttonOpenModal = document.querySelector('#modalOpen')
const button = document.querySelectorAll('.btnColor')
 

buttonOpenModal.addEventListener('click', modal.open)
