// GS25 PJ 메인 JS - main.js

// 요소 선택함수//////////////
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt = (ele, evt, fn) => ele.addEventListener(evt, fn);

// HTML태그 로딩후 loadFn함수 호출! ///
window.addEventListener("DOMContentLoaded", loadFn);

let clickSts = 0;
const TIME_SLIDE = 400;

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {
  // 로딩확인
  console.log("로딩완료!");

  // 부드러운 스크롤 적용 /////////////////
  startSS();

  slideFn(qs('.slide-wrap-box'));
  slideFn(qs('.ins-banner'));


  ////// 슬라이드 공용 함수 ////////////
  function slideFn(tgEle) {
    // tgEle - 타겟요소

    const abtn = tgEle.querySelectorAll(".abtn");
    const slide = tgEle.querySelector('.slide');
    const indicate = tgEle.querySelectorAll(".indicate li");

    slide
      .querySelectorAll("li")
      .forEach((ele, idx) => ele.setAttribute("data-seq", idx));

    abtn.forEach((ele) => addEvt(ele, "click", goSlide));

    function goSlide(e) {
        e.preventDefault();
      if (clickSts) return;
      clickSts = 1;
      setTimeout(() => (clickSts = 0), TIME_SLIDE);

      stsI = 0;

      if (stsI) clearAuto();

      console.log("나야나!", this, this.classList.contains("ab2"));

      let isRight = this.classList.contains("ab2");

      let eachOne = slide.querySelectorAll("li");

      if (isRight) {
        rigthSlide();
      } else {
        slide.insertBefore(eachOne[eachOne.length - 1], eachOne[0]);
        slide.style.left = "-100%";
        slide.style.transition = "none";

        setTimeout(() => {
          slide.style.left = "0";

          slide.style.transition = TIME_SLIDE + "ms ease-in-out";
        }, 0);
      } ////////// else //////////

      chgIndicate(isRight);

      clearAuto();
    } ////////////// goSlide 함수 //////////////

    function chgIndicate(isRight) {
      let nowSeq = slide
        .querySelectorAll("li")
        [isRight ? 1 : 0].getAttribute("data-seq");

      console.log("현재슬라이드 순번:", nowSeq);

      indicate.forEach((ele, idx) => {
        if (idx == nowSeq) ele.classList.add("on");
        else ele.classList.remove("on");
      }); ////////// forEach //////////
    } //////// chgIndicat 함수 ///////////////

    function rigthSlide() {
      slide.style.left = "-100%";
      slide.style.transition = TIME_SLIDE + "ms ease-in-out";

      setTimeout(() => {
        slide.appendChild(slide.querySelectorAll("li")[0]);
        slide.style.left = "0";
        slide.style.transition = "none";
      }, TIME_SLIDE);
    } ////////// rightSlide 함수 ///////////

    let autoI;

    let autoT;

    function slideAuto() {
      autoI = setInterval(() => {
        rigthSlide();
        chgIndicate(1);
      }, 3000);
    } //////////// slideAuto 함수 ///////////

    slideAuto();

    function clearAuto() {
      console.log("멈춤!");

      clearInterval(autoI);
      clearTimeout(autoT);

      autoT = setTimeout(slideAuto, 3000);
    } ///////// clearAuto 함수 //////////////
  } ///////////// slideFn 함수 ////////////////
} ///////////////// loadFn ///////////////////
///////////////////////////////////////////////

var 나야나 = document.getElementById("mv").src;

console.log("내꺼얌:", 나야나);

document.getElementById("mv").src = "https://www.youtube.com/embed/cjH6sAgIb_k";

function 바꿔(먹이) {
  console.log("영상바꿔", 먹이);

  document.getElementById("mv").src =
    "https://www.youtube.com/embed/" + 먹이 + "?autoplay=1";
}
//////////////////////// 바꿔 함수 /////////////////////////

function 커짐() {
  console.log("커지냐");

  document.getElementsByClassName("tv").item(0).classList.toggle("on");
}
//////////////////// 커짐 함수 //////////////////////////////