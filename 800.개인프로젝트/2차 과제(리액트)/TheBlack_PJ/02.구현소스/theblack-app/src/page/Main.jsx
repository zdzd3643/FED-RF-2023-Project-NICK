// 메인 페이지 컨텐츠 컴포넌트

import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import "../css/common.css";

// 자동스크롤 JS 불러오기
import { wheelFn, initSet, zeroPno, evtFn } from "../func/smoothScroll23";

// 모듈 불러오기
import { Banner } from "../modules/Banner";
import { Artists } from "../modules/Artists";
import { Intro } from "../modules/Intro";

// 제이쿼리
import $ from 'jquery';
import { SwiperApp } from "../plugin/SwiperApp";

export function Main(){
 useEffect(() => {

  // 스크롤바 없애기
  $('html,body').css({overflow:'hidden'});

  // 자동스크롤 호출
  window.addEventListener('wheel',wheelFn);

  // 메뉴+인디케이터 이벤트 기능설정함수 호출 ///
  evtFn();

  // 초기화 함수 호출
  initSet();

  // 페이지번호 초기화 호출
  zeroPno();

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
        <SwiperApp />
        </section>
        {/* 2-4. 앨범 파트 */}
        <section id="album-area" className="main"></section>
        {/* 2-5. 오디션 파트 */}
        <section id="aud-area" className="main"></section>
    </main>
);
} ///////// Main 컴포넌트 /////////////