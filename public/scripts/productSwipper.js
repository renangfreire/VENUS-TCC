var swiper = new Swiper('.mySwiper', {
    zoom: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    mousewheel: true,
    keyboard: true
  })
