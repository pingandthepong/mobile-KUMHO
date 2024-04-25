// function moveTop() {
//   var scroll = $(window).scrollTop();

//   if(scroll > 300) {
//     $('.moveTop').stop().animate({opacity: 1}, 100);
    
//   } else if (scroll <= 300) {
//     $('.moveTop').stop().animate({opacity: 0}, 100);
    
//   }

//   lastScrollTopFooter = scroll;
// };
// var lastScrollTopFooter = 0;
// var moveTopVisible = false;

// function moveTop() {
//   var scroll = $(window).scrollTop();

//   if(scroll > lastScrollTopFooter && scroll > 300 && !moveTopVisible) {
//     $('.moveTop').stop().animate({opacity: 1}, 100);
//     moveTopVisible = true;
//   } else if (scroll <= 300 && moveTopVisible) {
//     $('.moveTop').stop().animate({opacity: 0}, 100);
//     moveTopVisible = false;
//   }

//   lastScrollTopFooter = scroll;
// };

// $(window).on('scroll', function() {
//   requestAnimationFrame(moveTop);
// });

$(window).on('scroll',function(){
  var windowTop = $(window).scrollTop();
  if(windowTop > 500){
      $('.move_top').css({opacity: 1});
  }else{
      $('.move_top').css({opacity: 0});
  }
});


$('.move_top').on('click', function(e) {
  e.preventDefault();
  $('html, body').stop().animate({scrollTop: 0}, 500);
});
