// 메인 페이지 컨텐츠 컴포넌트

import React from "react";
import ReactDOM from "react-dom";

// 폰트어썸 불러오기
import { SwiperVid } from "../plugin/SwiperVid";
import { Banner } from "../modules/Banner";

export function Main(){

return (
  <>
<div id="main-area">
  <main className="site-body">
    {/* 2-1. 뮤비 파트 */}
    <section className="movie-area">
    <Banner />
    </section>
    {/* 2-2. 소개 파트 */}
    <section className="intro-area"></section>
    {/* 2-3. 아티스트 파트 */}
    <section className="ats-area"></section>
    {/* 2-4. 앨범 파트 */}
    <section className="album-area"></section>
    {/* 2-5. 오디션 파트 */}
    <section className="aud-area"></section>
  </main>
</div>
</>
);
} ///////// Main 컴포넌트 /////////////