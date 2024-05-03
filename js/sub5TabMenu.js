// 초기 상태
// $('.tab_menu:eq(0) .tab').addClass('current');
// $('.contlist:eq(0)').show();

// // 클릭 이벤트 핸들러
// $('.tab').on('click focus', function(e) {
//   e.preventDefault();
  
//   $('.tab_menu .tab').removeClass('current');
//   $(this).addClass('current');
  
//   let ind = $(this).index('.tab');
//   $('.contlist').hide();
//   $(`.contlist:eq(${ind})`).show();
// });


$('.tabs_tit').on('click', function(e) {
  e.preventDefault();

  $(this).toggleClass('on');
  $('.tabs').slideToggle('fast');
});

// 초기 상태
$('.tab_menu:eq(0) .tab').addClass('current');
$('.cont1').show();

// $('.tab_menu:eq(0) .tab') 클릭 시 직장인 브이로그
// $('.tab_menu:eq(1) .tab') 클릭 시 직무소개
$('.tab').click(function(e) {
  e.preventDefault();

  $('.tabs_tit').toggleClass('on');
  $('.tab_menu').slideToggle();
  
});

