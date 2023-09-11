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

const jsearch = qs('#jsearchBar');

    console.log("요소확인:",jsearch);

const Data = qs('.jsearch.value');

    console.log("입력된값:",Data)

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