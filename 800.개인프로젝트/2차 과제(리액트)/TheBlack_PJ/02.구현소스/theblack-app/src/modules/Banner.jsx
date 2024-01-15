// TheBlack 뮤비 배너 컴포넌트

// 배너데이터
import { mvData } from "../data/mv_data";

import "../css/banner.css";

// 제이쿼리 + 제이쿼리UI
import $, { event } from "jquery";
import "jquery-ui-dist/jquery-ui";


// 언어번역 

import '../func/i18n';
import { useTranslation } from "react-i18next";

// 배너 컴포넌트 //
export function Banner(){
  const { t } = useTranslation();
  
  // 1. 변수설정
  // (0) 애니시간
  const A_TM = 300;
  // (1) 애니이징
  const A_ES = "easeInOutQuint";
  // (2) 광클상태변수(1-불허용,0-허용)
  let cSts = 0;
  // (3) 슬라이드순번
  let sNum = 0;
  
  // const goSlide = (e) => {
  //     const tg = e.target;

  //     // 2. 대상선정
  //     // (1) 슬라이드
  //     const sldBox = $(".ats-movie-area");
  //     // console.log("현재슬라이드:",sldBox);
  //     // (2) 슬라이드 블릿
  //     const bindic = $('.bindic').find('li');
  //     // console.log('블릿:',bindic);
  //     // (3) 슬라이드 개수
  //     const sCnt = sldBox.find('li').length;
  //     // console.log('슬라이드개수:', sCnt);

  //     // 0. 광클금지 //////////
  //     if(cSts) return;
  //     cSts=1; // 잠금
  //     setTimeout(()=>cSts=0,A_TM);
  //     ///////////////////////////

  //     // 1. 오른쪽버튼 여부
  //     let isR = $(tg).is('.rar');
  //     // console.log('버튼클릭!', isR);

  //     // 2. 버튼별분기
  //     // 2-1. 오른쪽버튼
  //     if(isR){
  //         // 슬라이드가 왼쪽으로 이동함
  //         // left값이 -100%
  //         sldBox.animate({ left: "-200%" }, A_TM, A_ES,
  //         () => { // 콜백함수(애니후)
  //             // 맨앞li 맨뒤로 이동
  //             sldBox.append(sldBox.find('li').first())
  //             // 동시에 left값은 0으로 초기화함!
  //             .css({left:'-100%'});
  //         });
  //         // 슬라이드 순번 증가(끝번호보다 크면 0)
  //         sNum++;
  //         if(sNum>=sCnt) sNum=0;
  //       } ////////// if ///////////
        
  //       // 2-2. 왼쪽버튼
  //       else {
  //         // 맨뒤li 맨앞으로 이동
  //         sldBox.animate({ left: "0%" }, A_TM, A_ES,
  //         () => { // 콜백함수(애니후)
  //             // 맨앞li 맨뒤로 이동
  //             sldBox.prepend(sldBox.find('li').last())
  //             // 동시에 left값은 0으로 초기화함!
  //             .css({left:'-100%'});
  //         });
          
  //         // 슬라이드순번 감소(0보다 작으면 끝번호)
  //         sNum--;
  //         if(sNum<0) sNum=sCnt-1;
  //       } /////// else /////////
    
  //       console.log('슬라이드 순번:',sNum);

  //     // 블릿해당순번 클래스'on'넣기(다른li는 제거)
  //     bindic.eq(sNum).addClass('on')
  //     .siblings().removeClass('on');

  //   } ////////// goSlide함수 ////////////

    $(()=>{
      const sldBox = $(".ats-movie-area");
      // console.log("현재슬라이드:",sldBox);
      // (1) 드래그 기능넣기
      sldBox.draggable({ axis: "x" });
      
      // (2) 슬라이드 블릿
      const bindic = $('.bindic').find('li');
      // console.log('블릿:',bindic);
      // (3) 슬라이드 개수
      const sCnt = sldBox.find('li').length;
      // console.log('슬라이드개수:', sCnt);
  
      // 커버
      const cover = $(".cover");
      
      
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
          // console.log('슬라이드 순번:',sNum);
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
          // console.log('슬라이드 순번:',sNum);
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
  
      })

    }); /////////// dragstop /////////



      // 선택데이터
      const selData = mvData;

      // 리스트만들기 함수 ///////////
      const makeList = (data) => {
        // console.log(data);
        return data.map((v, i) => (
          <li key={i}>
            {/* 배너동영상 */}
            <video src={v.vsrc} alt="영상주소" 
            id="mv"
            loop="loop"
            muted="muted"
            autoPlay="autoplay"
            />
            {/* 배너 정보 */}
            <div className="mtit">
              <h2>{t(v.vtit)}</h2>
            </div>
          </li>
        ));
      }; ////////// makeList 함수 //////

      ///////////////////////////////////
      // 코드리턴 ///////////////////////
      return(

        <section className="ats-movie">
          <ul className="ats-movie-area">
          {makeList(selData)}</ul>
        {/* 이동버튼 + 슬라이드 블릿 : 
        슬라이드 2개 이상일때 보임 */}
          {
            selData.length > 1 && (
              <>
              {/* 동영상 넘기기 버튼 */}
                {/* 인디케이트 버튼 */}
                <ol className="bindic">
                  {selData.map((v,i) => (
                <li className={v.ats == "SOMI" ? "on" : ""} key={i}></li>
                ))}
                </ol>
                <div className="cover"></div>
              </>
              )
              }
      </section>
      
      ); ///////// return //////////


} /////////// Banner 컴포넌트 //////////