// 스크롤 방향에 따라 헤더 영역 숨기거나 표시

var lastScrollTop = 0;

$(window).on('scroll', function() {
  var scroll = $(this).scrollTop();

  if(scroll > lastScrollTop) {
    $('.header_top').addClass('hide').removeClass('show');
  } else {
    $('.header_top').addClass('show white').removeClass('hide');
    $('.menu_ham').addClass('black');
  }

  lastScrollTop = scroll;

  // 스크롤이 위에 다다르면 headerArea 다시 투명하게
  if (scroll <= 10) {
    $('.header_top').removeClass('white');
    $('.menu_ham').removeClass('black');
  }
});