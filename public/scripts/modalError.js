const modalOverlay = document.querySelector('.modalError-overlay')
const buttonClose = document.querySelector('.modalError-close')
const buttonDone = document.querySelector('.modalError-done')


function closeModal(){
    modalOverlay.classList.remove('active')
}

buttonClose.addEventListener('click', closeModal)
buttonDone.addEventListener('click', closeModal)