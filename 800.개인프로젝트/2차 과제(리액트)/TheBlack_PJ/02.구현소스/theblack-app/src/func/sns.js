
// 제이쿼리 호출
import $ from 'jquery';
window.jQuery = $;
require('jquery-ui-dist/jquery-ui');
require('jquery-ui-touch-punch/jquery.ui.touch-punch');


export function snsLink(){
  $('.desc-bx').each((idx,ele)=>{
    // ele - 각a요소
    $(ele).attr('title',$(ele).text().trim())
}) ////////// each ////////////
.click(function(){
  // 1. 클릭시 해당요소 텍스트읽기
  let atxt = $(this).text().trim();
  console.log('sns파트메뉴:',atxt);
 // 2. 이동할 페이지 주소 할당
 let url;
 switch(atxt){
     // 외부시스템 페이지
     case '인스타그램':
         url="https://www.instagram.com/VOGUEKOREA/";
         break;
     case '페이스북':
         url="https://www.facebook.com/VOGUEkr";
         break;
     case '트위터':
         url="https://twitter.com/VogueKorea";
         break;
     case '유튜브':
         url="https://www.youtube.com/user/VogueKorea";
         break;
     case '카카오스토리':
         url="https://story.kakao.com/ch/voguekr";
         break;

        } ////////////// switch case ////////
        window.open(url);
      }); /////////// click ///////////
} /////////// snsLink 함수 ////////////