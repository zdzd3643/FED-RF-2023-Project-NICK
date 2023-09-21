// GS25 PJ 메인 JS - main.js

// 요소 선택함수//////////////
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt = (ele, evt, fn) => ele.addEventListener(evt, fn);

// HTML태그 로딩후 loadFn함수 호출! ///
window.addEventListener("DOMContentLoaded", loadFn);

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {
  // 로딩확인
  console.log("로딩완료!");

  // 부드러운 스크롤 적용 /////////////////
  startSS();

  // grid 교체 함수 ///////////////////

  const slist = qsa(".sList ol li")
  const sgrid = qsa(".grid");

  console.log("대상:",slist,sgrid);

  slist.forEach((ele) => {
    console.log("ele,너는누구?", ele);

    ele.onclick = () => {
    
    };
  }); /////////////// grid 교체 함수 //////////

  // [추가기능: 링크 클릭시 페이지새창이동]
  // 대상: .gnb ul li a
  const link = qsa('.gnb ul li a');

  link.forEach(ele=>{
    addEvt(ele,'click',linkFn);
  }); /////////////// forEach //////////////

  // 실행함수 만들기
  function linkFn(e){
    let atxt = this.innerText;

    e.preventDefault();

    let url;

    switch(atxt){
      case "행사페이지":
        url
    }
  }
} ///////////////// loadFn 함수 ////////////////////