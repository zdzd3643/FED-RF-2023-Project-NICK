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
  const zeroPnoSub = () => {pno=0};
  // 페이지 요소
  let pg;
  // 전체 페이지개수
  let pgcnt;
  // console.log("페이지개수:", pgcnt, pg, pno);
  // 광실행금지변수
  let prot = [];
  // 광스크롤금지
  prot[0] = 0;

  // 요소를 할당한 경우 로딩구역에서 할당
  $(()=>{
    // 페이지 요소
    pg = $(".sub");
    // 전체 페이지개수
    pgcnt = pg.length;

  }); //////////////// load /////////////


  /****************************************** 
    이벤트 등록하기
    ->>> 리액트에서 제이쿼리로 이벤트설정시
    리액트와 충돌되는 문제가 생길 수 있다
    예컨데 현재 휠이벤트는 설정되지만
    휠델타값이 안찍힘! -> 해결은?
    순수한 JS 로 이벤트를 설정한다!
    왜? 제이쿼리로 이벤트를 설정하면
    제이쿼리 나름의 객체가 생성되어 처리되므로
    이것을 단순화하여 이벤트를 걸면 휠델타값이
    처리된다! 
  ******************************************/
  // 윈도우 휠이벤트 발생시
  // $(window).on("wheel", wheelFn); -> 제이쿼리 이벤트X

  // 새로고침시 스크롤위치 캐싱 변경하기(맨위로!)
  $("html,body").animate({ scrollTop: "0px" });

    console.log('페이지번호:',pno);


  /*************************************** 
    함수명 : initSet
    기능 : 등장요소 처음상태 셋팅
  ***************************************/
 function initSetSub(){
  // 1. 초기화하기

  $('.intSub-cont').css({
    opacity: 0,
    top:'24vh',
    transition: 'all ease-out 1s',
    display: 'inline-block'
  }); /////////// css //////////

 } /////////// initSet 함수 ///////////////

  /***************************************** 
  함수명: actPage
  기능: 페이지 도착후 등장 애니메이션
 *****************************************/
function actPageSub(){
  console.log('액숀~!!!', pno);

  //////////////// 서브 페이지(act) //////////////
  // 대상: 해당순번 .sub 아래 .ats-title

  $('.sub').find('.intSub-cont').css({
    top:'50vh',
    opacity: 1,
  }); ///////// css /////////

  // 첫페이지일때 등장요소 초기화!
  if(pno==0) initSetSub();

} ///////// actPage 함수 //////////////////

// 이벤트 설정함수 /////////
function evtFnSub(){

  // 메인 페이지 상단로고 클릭시 맨위로 이동하기!
  $('.TBlogo a').click(e=>{
    e.preventDefault();
    pno = 0;
    movePg();
  }); ////////// click /////////

} ///////// evtFn 함수 ////////



//  사용할 함수 내보내기
export { initSetSub, evtFnSub, zeroPnoSub, actPageSub }