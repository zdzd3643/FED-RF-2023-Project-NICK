// GS25 PJ 메인 JS - main.js

// 요소 선택함수//////////////
const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);

// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt = 
(ele, evt, fn) => ele.addEventListener(evt, fn);

// HTML태그 로딩후 loadFn함수 호출! ///
window.addEventListener('DOMContentLoaded',loadFn);

let clickSts = 0;
const TIME_SLIDE = 400;

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn(){
    // 로딩확인
    console.log('로딩완료!');

    // 부드러운 스크롤 적용 /////////////////
    startSS();

    const abtn = qsa('.abtn');
    const slide = qs('#slide');
    const indicate = qsa('.indicate li');
    


}; ///////////////// loadFn ///////////////////
///////////////////////////////////////////////

var 나야나 = document.getElementById('mv').src;

console.log("내꺼얌:",나야나);

document.getElementById('mv').src = "https://www.youtube.com/embed/cjH6sAgIb_k";

function 바꿔(먹이){

    console.log('영상바꿔',먹이);
    
    document.getElementById('mv').src = "https://www.youtube.com/embed/"+먹이+"?autoplay=1";
}
//////////////////////// 바꿔 함수 /////////////////////////    


function 커짐(){
    
    console.log('커지냐');

    document.getElementsByClassName('tv').item(0).classList.toggle('on');
}
//////////////////// 커짐 함수 //////////////////////////////