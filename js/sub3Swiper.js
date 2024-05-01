var swiper1 = new Swiper(".swiper1", {
  slidesPerView: 3.4,
  initialSlide: 0,
});

var swiper2 = new Swiper('.swiper2', {
  effect: "cube",
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    // shadowOffset: ,
    // shadowScale: 0.94,
  },
}); 

// var swiper3 = new Swiper('.swiper3', {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "1.1",
//   coverflowEffect: {
//     rotate: 75,
//     stretch: 10,
//     depth: 500,
//     modifier: 2,
//     slideShadows: true,
//   },
// })