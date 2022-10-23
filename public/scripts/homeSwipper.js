var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
  },
  mousewheel: true,
  keyboard: true,
});