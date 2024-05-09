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


// DONE: .tabs_tit 클릭 시 .tabs 열고 닫기
$('.tabs_tit').on('click', function(e) {
  e.preventDefault();

  $(this).toggleClass('on');
  $('.tabs').slideToggle('fast');
});

// DOING: 초기 상태 (첫 번째 .tab 활성화)
$('.tab_menu:eq(0) .tab').addClass('current');
// DONE: cont1 보이기
$('.cont1').show();


// DONE: 각 .tab 클릭 시 본인 활성화 
$('.tab_menu .tab').click(function(e) {
  e.preventDefault();

  $('.tab').removeClass('current');
  $(this).addClass('current');
  
  // DONE: tabs_tit 에 자기 자신 text 넣기
  $('.tabs_tit').text($(this).text());
  
  // DONE: 클릭 시 .tabs 닫기
  $('.tabs').slideUp('fast');
  // DONE: 클릭 시 .tabs_tit에 toggleClass('on')
  $('.tabs_tit').toggleClass('on');
  

  // DONE: 각 페이지에 자기 자신 뜨게 하기
  var ind = $(this).parent('.tab_menu').index();
  console.log(ind);
  $('.contlist').hide();
  $(`.cont${ind + 1}`).show();

});
