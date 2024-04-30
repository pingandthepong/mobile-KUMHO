var swiper1 = new Swiper(".swiper1", {
  slidesPerView: 3.2,
  initialSlide: 0,
});

var swiper2 = new Swiper('.swiper2', {
  slidesPerView: 2.3,
}); 

var swiper3 = new Swiper('.swiper3', {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "1.5",
  coverflowEffect: {
    rotate: 75,
    stretch: 0,
    depth: 250,
    modifier: 1,
    slideShadows: true,
  },
})