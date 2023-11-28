// 메인 페이지 컨텐츠 컴포넌트

import React, { useEffect } from "react";
import ReactDOM from "react-dom";

// 자동스크롤 JS 불러오기
import { wheelFn, initSet } from "../func/smoothScroll23";

// 폰트어썸 불러오기
import { Banner } from "../modules/Banner";

// 제이쿼리
import $ from 'jquery';
import { Intro } from "../modules/Intro";
import { Artists } from "../modules/Artists";

export function Main(){
 useEffect(() => {

  // 스크롤바 없애기
  $('html,body').css({overflow:'hidden'});

  // 자동스크롤 호출
  window.addEventListener('wheel',wheelFn);

  // 초기화 함수 호출
  initSet();

 }, []); ////////// useEffect ////////////

return (
    <main id="main-area" className="site-body">
        {/* 2-1. 뮤비 파트 */}
        <section className="movie-area">
        <Banner />
        </section>
        {/* 2-2. 소개 파트 */}
        <section className="intro-area">
        <Intro />
        </section>
        {/* 2-3. 아티스트 파트 */}
        <section className="ats-area">
        <Artists />
        </section>
        {/* 2-4. 앨범 파트 */}
        <section className="album-area"></section>
        {/* 2-5. 오디션 파트 */}
        <section className="aud-area"></section>
    </main>
);
} ///////// Main 컴포넌트 /////////////