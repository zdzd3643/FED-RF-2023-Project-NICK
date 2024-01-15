// 메인 페이지 컨텐츠 컴포넌트

import React, { useEffect,} from "react";

import "../css/common.css";

// 자동스크롤 JS 불러오기
import { wheelFn,initSet, evtFn, dragFn } from "../func/smoothScroll23";
import { dragBanner } from "../func/drag_banner";

// 모듈 불러오기
import { Banner } from "../modules/Banner";
import { Artists } from "../modules/Artists";
import { Intro } from "../modules/Intro";
import { Album } from "../modules/Album";
import { Audition } from "../modules/Audition";

// 제이쿼리
import $ from 'jquery';

export function MainCont(){
// 메인 페이지일때만 자동스크롤 기능 적용함!
 useEffect(() => {

  // 스크롤바 없애기
  $('html,body').css({overflow:'hidden'});

  // 자동스크롤 호출
  window.addEventListener('wheel',wheelFn);

  // 메뉴+인디케이터 이벤트 기능설정함수 호출 ///
  evtFn();

  // 초기화 함수 호출
  initSet();
  
// 드래그배너 호출
    // dragFn();


  // 컴포넌트 소멸자
  return(()=>{
    console.log('난 소멸했어~!');

    // 이 페이지에서만 필요했던 자동스크롤 이벤트 해제!
    window.removeEventListener('wheel',wheelFn);
    $('html,body').css({overflow:'visible'});

    // 메인 페이지에만 사용되는 로고클릭시 상단이동 이벤트 해제
    // 제이쿼리로 특정요소에 걸어준경우 해제는 off(이벤트명)
    $('.gnb li').off('click');
    $(document).off('keydown');

  }); //////////// 소멸자 return //////////

 }, []); ////////// useEffect ////////////


return (
    <main id="main-area" className="site-body">
        {/* 2-1. 뮤비 파트 */}
        <section id="movie-area" className="main">
        <Banner />
        </section>
        {/* 2-2. 소개 파트 */}
        <section id="intro-area" className="main">
        <Intro />
        </section>
        {/* 2-3. 아티스트 파트 */}
        <section id="ats-area" className="main">
        <Artists />
        </section>
        {/* 2-4. 앨범 파트 */}
        <section id="album-area" className="main">
        <Album />
        </section>
        {/* 2-5. 오디션 파트 */}
        <section id="aud-area" className="main">
        <Audition />
        </section>

        {/* 메인 사이드 인디케이터 */}
        <nav className="indic">
            <ul>
                <li className="on">
                    <a href="Banner">
                        <span>배너</span>
                    </a>
                </li>
                <li>
                    <a href="Intro">
                        <span>인트로</span>
                    </a>
                </li>
                <li>
                    <a href="Artists">
                        <span>아티스트</span>
                    </a>
                </li>
                <li>
                    <a href="Album">
                        <span>앨범</span>
                    </a>
                </li>
                <li>
                    <a href="Audition">
                        <span>오디션</span>
                    </a>
                </li>
            </ul>
        </nav>
    </main>
);
} ///////// MainCont 컴포넌트 /////////////

export default MainCont;