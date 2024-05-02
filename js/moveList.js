const moveSize = 2;
let position = 0;
let ulWidth = $('.move_list_wrap ul').width(); 
let one = ulWidth/5;
let total = ulWidth*2;


$('.move_list_wrap ul').after($('.move_list_wrap ul').clone());


function moveList() {
  position -= moveSize;
  $('.move_list_wrap').css({ left: position });

  if (position <= -(ulWidth+one)) {
    $('.move_list_wrap').css({ left: -one });
    position = -one;
  }
}

setInterval(moveList,50);


