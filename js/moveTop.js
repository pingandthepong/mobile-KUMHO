var lastScrollTopFooter = 0;
var moveTopVisible = false;

function moveTop() {
  var scroll = $(window).scrollTop();

  if(scroll > lastScrollTopFooter && scroll > 30 && !moveTopVisible) {
    $('.moveTop').stop().animate({opacity: 1}, 100);
    moveTopVisible = true;
  } else if (scroll <= 30 && moveTopVisible) {
    $('.moveTop').stop().animate({opacity: 0}, 100);
    moveTopVisible = false;
  }

  lastScrollTopFooter = scroll;
};

$(window).on('scroll', function() {
  requestAnimationFrame(moveTop);
});

$('.move_top').click(function(e) {
  e.preventDefault();
  $('html, body').stop().animate({scrollTop: 0}, 500);
});