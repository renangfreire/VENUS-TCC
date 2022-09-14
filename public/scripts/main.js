import Modal from './modal.js';

const modal = Modal()
const buttonOpenModal = document.querySelector('#modalOpen')

buttonOpenModal.addEventListener('click', modal.open)