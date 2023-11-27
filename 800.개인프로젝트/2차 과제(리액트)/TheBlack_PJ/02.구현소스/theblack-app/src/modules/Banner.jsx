// TheBlck 뮤비 배너 컴포넌트

// 배너데이터
import { mvData } from "../data/mv_data";

import "../css/common.css";

import { useEffect } from "react";
// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

// 배너 컴포넌트 //
export function Banner(){


    // 1. 변수설정
    // (1) 애니이징
    const A_ES = "easeInOutQuint";
    // (2) 광클상태변수(1-불허용,0-허용)
    let cSts = 0;
    // (3) 슬라이드순번
    let sNum = 0;

    const goSlide = (e) => {
      const tg = e.target;
      console.log(tg);

    // 2. 대상선정
    // (1) 슬라이드
    const sldBox = $(tg).parent().siblings(".ats-area");
    // console.log("현재슬라이드:",sldBox);
    // (2) 슬라이드 블릿
    const indic = $(tg).parent().siblings('.indic').find('li');
    // console.log('블릿:',indic);
    // (3) 슬라이드 개수
    const sCnt = sldBox.find('li').length;
    console.log('슬라이드개수:',sCnt);

    // 3. 이벤트 설정 및 기능구현
    // 3-1. 이동버튼 클릭시

      // 0. 광클금지 //////////
      if(cSts) return;
      cSts=1; // 잠금
      setTimeout(()=>cSts=0);
      ///////////////////////////

      // 1. 오른쪽버튼 여부
      let isR = $(tg).is('.rar');
      console.log('버튼클릭!', isR);

      // 2. 버튼별분기
      // 2-1. 오른쪽버튼
      if(isR){
          // 슬라이드가 왼쪽으로 이동함
          // left값이 -100%
          sldBox.animate({ left: "-100%" }, A_ES,
          () => { // 콜백함수(애니후)
              // 맨앞li 맨뒤로 이동
              sldBox.append(sldBox.find('li').first())
              // 동시에 left값은 0으로 초기화함!
              .css({left:'0'});
          });
          // 슬라이드 순번 증가(끝번호보다 크면 0)
          sNum++;
          if(sNum>=sCnt) sNum=0;
      } ////////// if ///////////

      // 2-2. 왼쪽버튼
      else{
          // 맨뒤li 맨앞으로 이동
          sldBox.prepend(sldBox.find('li').last())
          // left값 -100%
          .css({left:'-100%'})
          // left값을 0으로 애니메이션
          .animate({left:'0'},A_ES);

          // 슬라이드순번 감소(0보다 작으면 끝번호)
          sNum--;
          if(sNum<0) sNum = sCnt-1;
      } ////////// else ///////////

      console.log('슬순번:',sNum);

      // 블릿해당순번 클래스'on'넣기(다른li는 제거)
      indic.eq(sNum).addClass('on')
      .siblings().removeClass('on');

    } ////////// goSlide함수 ////////////

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
            <div className="tit">
              <h2>{v.tit}</h2>
            </div>
          </li>
        ));
      }; ////////// makeList 함수 //////

      ///////////////////////////////////
      // 코드리턴 ///////////////////////
      return(


        <section className="ats-movie">
          {/* 이동슬라이드 */}
          <ul className="ats-area">{makeList(selData)}</ul>
          <div className="Pbtn">
              <a href="#">NowPlaying</a>
          </div>
          {
            selData.length > 1 && (
              <>
              {/* 동영상 넘기기 버튼 */}
              {/* 폰트어썸 아이콘 */}
                <div className="arrow lar">
                  <FontAwesomeIcon icon={faChevronLeft}
                onClick={goSlide} /> 
                </div>
                <div className="arrow rar">
                  <FontAwesomeIcon icon={faChevronRight}
                onClick={goSlide}/>
                </div>
                <ol className="indic">
                  {selData.map((v, i) => (
                <li className={i == 0 ? "on" : ""} key={i}></li>
                    ))}
                  </ol>
              </>
              )
              }
      </section>
      ); ///////// return //////////
} /////////// Banner 컴포넌트 //////////