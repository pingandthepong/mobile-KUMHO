var famLink = $('.family_site .arrow');

// family_site 클릭 시 ul 열고 닫기
famLink.on('click', function(e) {
  e.preventDefault();

  var famOnOff = $(this).data('famOnOff');

  if (!famOnOff) {
    // 닫혀있다면 열기
    $('.family_site ul').stop().slideDown();
    $(this).addClass('on');
    $(this).data('famOnOff', true);

  } else {
    // 열려있다면 닫기
    $('.family_site ul').stop().slideUp('fast');
    $(this).removeClass('on');
    $(this).data('famOnOff', false);

  }
});

// family 사이트가 열려있을 때, body 클릭 시 닫기
$('body').click(function(e) {
  famOnOff = famLink.data('famOnOff');

  if (famOnOff) {
    if(!$(e.target).closest('.family_site').length) {
      $('.family_site ul').stop().slideUp('fast');
      famLink.removeClass('on');
      famLink.data('famOnOff', false);
    }
  }
});