export default function Modal() {
    const modalWrapper = document.querySelector('.popup-wrapper')
    const buttonClose = document.querySelector('.popup-close')

    buttonClose.addEventListener('click', close)

    function open(){
        modalWrapper.classList.add('active')
    }
    function close(){
        modalWrapper.classList.remove('active')

    //     const classNameOfClickedElement = event.target.classList[0]
    //     const classNames = ['popup-close', 'popup-wrapper', 'popup-link']
    //     const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)
    // if (shouldClosePopup){
    //     popup.style.display = 'none'
    //   }
    }

    return {
        open
    }
}
