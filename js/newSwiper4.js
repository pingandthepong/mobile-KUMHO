$.ajax({
  url: "./data/mobile_youtube.json",
  dataType: "json",
  success: function (data) {
    var useData = data.mobileYoutube;

    function dataPrint() {
      
      var txt = `<ul class="swiper-wrapper">`;

      for (var i in useData) {
        txt += `<li class="swiper-slide">`,
        txt += `<a href="./sub5_1.html" class="youtube_link">`,
        txt += `<div class="img_box">`,
        txt += `<div class="img">`;
        txt += `<img src="${useData[i].imgSrc}" alt="${useData[i].imgAlt}">`,
        txt += `</div>`,
        txt += `</div>`,
        txt += `<div class="txt_box">`,
        txt += `<p class="tit">${useData[i].tit}</p>`;
        txt += `<p class="txt">${useData[i].txt}</p>`;
        txt += `</div>`,
        txt += `</a>`,
        txt += `</li>`
      }
      
      txt += `</ul>`;
      
      $(".swiper4").html(txt);

      const Swiper4 = new Swiper('.swiper4', {
        slidesPerView: 1.1,
        centeredSlides: true,
        spaceBetween: 10,
      });
    }
    dataPrint();
  },
});

