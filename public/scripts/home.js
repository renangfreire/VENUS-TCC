//  Swiper JS
// core version + navigation, pagination modules:

//Initialize Swiper

const swiper = new Swiper('.mySwiper', {
  cssMode: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})
