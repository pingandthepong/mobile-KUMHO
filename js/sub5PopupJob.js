// javaScript AJAX
// XMLHttpRequest 객체 생성
var xhr = new XMLHttpRequest();
var responseObject;


xhr.onload = function() {
  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
  // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.
  responseObject = JSON.parse(xhr.responseText);
  // console.log(responseObject); // 확인

};

// 요청 준비 및 전송
xhr.open('GET', './data/popupJob.json', true);
xhr.send(null);



$(document).ready(function(){
 
  var newContent='';
  const list = $('.job_info_list li');
  list.addClass('hide');

  list.find('a').click(function(e){
    e.preventDefault();

    // 클릭 시 인덱스 번호 추출
    var ind = $(this).index('.job_info_list a');
    // console.log('클릭 이벤트 발생'); // 확인


    newContent=''; // 이전 데이터가 비워지도록 초기화
    newContent+=`<dl class="introduce">`;
    newContent+=`<dt>직무특성 및 소개</dt>`;
    newContent+=`<dd class="strong">${responseObject.popupJob[ind].introStrong}</dd>`;
    newContent+=`<dd>${responseObject.popupJob[ind].introDes}</dd>`;
    newContent+=`</dl>`;
    newContent+=`<dl class="condition">`;
    newContent+=`<dt>필요역량 및 우대조건</dt>`;
    newContent+=`<dd><span class="category">전공 :  </span>${responseObject.popupJob[ind].condition1}</dd>`;
    newContent+=`<dd><span class="category">학위 :  </span>${responseObject.popupJob[ind].condition2}</dd>`;
    newContent+=`<dd><span class="category">knowledge :  </span>${responseObject.popupJob[ind].condition3}</dd>`;
    newContent+=`<dd><span class="category">Skill :  </span>${responseObject.popupJob[ind].condition4}</dd>`;
    newContent+=`</dl>`;
    newContent+=`<dl class="direction">`;
    newContent+=`<dt>Career Path 및 발전 방향</dt>`;
    newContent+=`<dd>${responseObject.popupJob[ind].direction}</dd>`;
    newContent+=`</dl>`;


    $('.popup_job').html(newContent);


    // 클릭 이벤트 핸들러
    let myList = $(this).parent('li');
    let myListOffset = myList.offset().top;



    // 닫혀있다면
    if(myList.hasClass('hide')) {
      
    // 모두 다 닫고
    list.find('.popup_job').slideUp('fast');
    list.removeClass('show').addClass('remove');
    list.parent('li').find('a').removeClass('on');

    // 클래스 변경
    myList.removeClass('hide').addClass('show');
    myList.find('.popup_job').slideDown('fast');
    myList.find('a').addClass('on');

    // 선택한 요소가 상단으로 오도록 하기
    window.scrollTo({top: myListOffset, behavior: 'smooth'});    


    // 열려있다면
    } else {

      // 다른 list show 지우기
      list.removeClass('show').addClass('hide');
      list.parent('li').find('a').removeClass('on');
      // 클래스 바꾸기
      myList.removeClass('show').addClass('hide');
      myList.find('.popup_job').slideUp('fast');
      myList.find('a').removeClass('on');

      // 선택한 요소가 상단으로 오도록 하기
      window.scrollTo({top: myListOffset, behavior: 'smooth'});
    }
  });

});



// TODO: myList 화살표 
// TODO: popup_job 열려있을 때 전체 스크롤 좌표값 다시 받기
// TODO: 중복되는 코드들 함수로 다시 만들기