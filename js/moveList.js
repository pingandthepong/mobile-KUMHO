const moveSize = 1;
let position = 0;
let ulWidth = $('.move_list_wrap ul').width();

function init() {
  $('.move_list_wrap ul').after($('.move_list_wrap ul').clone());
  animate();
}

function moveList() {
  position -= moveSize;
  $('.move_list_wrap').css({ left: position });

  if (position <= -ulWidth) {
    $('.move_list_wrap').css({ left: 0 });
    position = 0;
  }
}

function animate() {
  moveList();
  requestAnimationFrame(animate);
}

init();
