// 메인페이지 드래그(스와이프) 배너 기능함수

import $ from "jquery";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");

export function darggBanner() {
  const dragSlide = (e) => {
    const tg = e.target;
    // console.log(tg);

  // 2. 대상선정
  // (1) 슬라이드
  const sldBox = $(tg).parent().siblings(".ats-movie-area");
  // console.log("현재슬라이드:",sldBox);
  // (2) 슬라이드 블릿
  const bindic = $(tg).parent().siblings('.bindic').find('li');
  // console.log('블릿:',bindic);
  // (3) 슬라이드 개수
  const sCnt = sldBox.find('li').length;
  // console.log('슬라이드개수:', sCnt);

  // 커버
  const cover = $(".cover");
  // 블릿
  const indic = $(".bindic li");
    console.log(indic);
  // 드래그 기능넣기
  sldBox.draggable({ axis: "x" });

  // 드래그가 끝났을때 슬라이드 위치
  sldBox.on("dragstop",()=>{
    // 광드래그 막기 커버
  cover.show();

    // 비교를 위한 윈도우 가로값
  let winW = $(window).width();
  // 현재 슬라이드 left값
  let pos = sldBox.offset().left;
  // 이동차이수 = 슬라이드위치값(양수) - 윈도우가로값
  let diff = Math.abs(pos) - winW;
  // 결과해석: 양수->왼쪽으로 이동/음수->오른쪽으로 이동

  // 기준값 : 화면크기를 기준한 부분
  let gap = winW / 10;
  // console.log("드래그 멈춤!", pos, winW, diff);

  // 왼쪽으로 이동하기 ///////////////
  if (diff > gap) {
    sldBox.animate({ left: "-200%" }, 800, "easeOutQuint", () => {
      // 맨앞li 맨뒤로 이동
      sldBox
        .append(sldBox.find("li").first())
        // left값 -100%(처음값)
        .css({ left: "-100%" });
      // 커버제거
      cover.hide();
    });
    sNum++;
    if(sNum>=sCnt) sNum=0;
    console.log('슬라이드 순번:',sNum);
  }
  // 오른쪽으로 이동하기 //////////////
  else if (diff < -gap) {
    sldBox.animate({ left: "0%" }, 800, "easeOutQuint", () => {
      // 맨뒤li 맨앞으로 이동
      sldBox
        .prepend(sldBox.find("li").last())
        // left값 -100%(처음값)
        .css({ left: "-100%" });
      // 커버제거
      cover.hide();
    });
    // 슬라이드순번 감소(0보다 작으면 끝번호)
  sNum--;
    if(sNum<0) sNum = sCnt-1;
    console.log('슬라이드 순번:',sNum);
  }
  // 제자리로 ////
  else {
    sldBox.animate({ left: "-100%" }, 300, "easeOutQuint", () => {
      // 커버제거
      cover.hide();
    });
  }

  bindic.eq(sNum).addClass('on')
  .siblings().removeClass('on');

}); /////////// dragstop /////////

} ////////// dragSlide함수 ////////////
} /////////////
