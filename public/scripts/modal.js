export default function Modal() {

  const modalWrapper = document.querySelector('.popup-wrapper')
  const buttonClose = document.querySelector('.popup-close')
  
  const swiper = document.querySelector('.swiper')
  const swiperWrapper = document.querySelector('.swiper-wrapper')

  buttonClose.addEventListener('click', close)

  function open() {
    modalWrapper.classList.add('active')
    swiper.style.zIndex = '0'
    swiperWrapper.style.zIndex = '0'
  }
  function close() {
    modalWrapper.classList.remove('active')
    swiper.style.zIndex = '1'
    swiperWrapper.style.zIndex = '1'

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
var pedisac = document.querySelector('#pedidos-sac');
var pagsac = document.querySelector('#pagamento-sac');
var contsac = document.querySelector('#conta-sac');


pedisac.addEventListener('click', function() {

  if(pagsac.style.display === 'none'){
    pagsac.style.display = 'list-item';
  } else {
    pagsac.style.display = 'none';
  }

});

pedisac.addEventListener('click', function() {

  if(contsac.style.display === 'none'){
    contsac.style.display = 'list-item';
  } else {
    contsac.style.display = 'none';
  }

});

pagsac.addEventListener('click', function() {

  if(pedisac.style.display === 'none'){
    pedisac.style.display = 'list-item';
  } else {
    pedisac.style.display = 'none';
  }

});

pagsac.addEventListener('click', function() {

  if(contsac.style.display === 'none'){
    contsac.style.display = 'list-item';
  } else {
    contsac.style.display = 'none';
  }

});

contsac.addEventListener('click', function() {

  if(pedisac.style.display === 'none'){
    pedisac.style.display = 'list-item';
  } else {
    pedisac.style.display = 'none';
  }

});

contsac.addEventListener('click', function() {

  if(pagsac.style.display === 'none'){
    pagsac.style.display = 'list-item';
  } else {
    pagsac.style.display = 'none';
  }

});