// new Swiper가 잡는 클래스명 맞게 고쳐주기
const Swiper1 = new Swiper('.swiper1', {
  autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
  slidesPerView: 1,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.next1',
    prevEl: '.prev1',
  },
  pagination: {
    el: '.pagination1',
    clickable: true,
  }
});

const Swiper2 = new Swiper('.swiper2', {
  slidesPerView: 1,
  pagination: {
    el: '.pagination2',
    clickable: true,
  }
});

const Swiper3 = new Swiper('.swiper3', {
  slidesPerView: 1.1,
  spaceBetween: 10,
  centeredSlides: true,
});

const Swiper5 = new Swiper(".swiper5", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  slidesPerView: 2,
  loop: true,
  spaceBetween: 10,
  centeredSlides: true,
  
});