// GS25 PJ 메인 JS - main.js

// 요소 선택함수//////////////
const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);

// 로딩구역 호출설정
window.addEventListener('DOMContentLoaded',loadFn);
////////////// 로딩구역 함수 ///////////////////
///////////////////////////////////////////////
function loadFn(){
    // 로딩확인
    console.log('로딩완료!');

    // 부드러운 스크롤 적용 /////////////////
    startSS();

     
}; ///////////////// loadFn ///////////////////
///////////////////////////////////////////////

