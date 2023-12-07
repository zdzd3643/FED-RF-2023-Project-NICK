// 제이쿼리로 구현한 자동페이지 휠 JS : jquery-autoScroll.js

// 로딩구역없이 함수로 구현함! /////

// 제이쿼리 호출
import $ from 'jquery';
window.jQuery = $;
require('jquery-ui-dist/jquery-ui');
require('jquery-ui-touch-punch/jquery.ui.touch-punch');

  /****************************************** 
    대상 변수할당하기
  ******************************************/
  // 전체 페이지번호
  let pno = 0;
  // 전체 페이지번호 초기화함수
  const zeroPnoe = () => {pno=0};
  // 페이지 요소
  let pg;
  // 전체 페이지개수
  let pgcnt;
  // console.log("페이지개수:", pgcnt, pg);
  // 광실행금지변수
  let prot = [];
  // 광스크롤금지
  prot[0] = 0;

  // 요소를 할당한 경우 로딩구역에서 할당
  $(()=>{
    // 페이지 요소
    pg = $("#introSub-area");
    // 전체 페이지개수
    pgcnt = pg.length;

  }); //////////////// load /////////////


  /******************************************** 
    함수명: movePg
    기능: 페이지이동 애니메이션
    ********************************************/
  function movePge() {
    // 대상: html,body -> 두개를 모두 잡아야 공통적으로 적용됨!
    $("html,body")
      .stop()
      .animate({
          scrollTop: 
          $(window).height() * pno + "px",
        }, 700,"easeInOutQuint",actPagee
        // 애니메이션 후 actPage함수를 호출!
      ); ///// animate //////

  } ///////////////// movePg ////////////////

  /*************************************** 
    함수명 : initSet
    기능 : 등장요소 처음상태 셋팅
  ***************************************/
 function initSete(){
  // 1. 초기화하기

  $('.intSub-cont').css({
    opacity: 0,
    top:'10vh',
    transition: 'all ease-out 1s',
    display: 'inline-block'
  }); /////////// css //////////

 } /////////// initSete 함수 ///////////////

 if(pno==0) initSete();

  /***************************************** 
  함수명: actPage
  기능: 페이지 도착후 등장 애니메이션
 *****************************************/
function actPagee(){
  console.log('액숀~!!!', pno);

    // 대상: 해당순번 .main 아래 .ats-title
    $('.intSub-cont').css({
      top:'25vh',
      opacity: 1
    }); ///////// css /////////
} ///////// actPage 함수 //////////////////

// 이벤트 설정함수 /////////
function evtFne(){
  // 메인 페이지 상단로고 클릭시 맨위로 이동하기!
  $('.TBlogo a').click(e=>{
    e.preventDefault();
    pno = 0;
    movePge();
  }); ////////// click /////////
} ///////////// evtFn /////////////

//  사용할 함수 내보내기
export { initSete, actPagee, movePge, zeroPnoe, evtFne }