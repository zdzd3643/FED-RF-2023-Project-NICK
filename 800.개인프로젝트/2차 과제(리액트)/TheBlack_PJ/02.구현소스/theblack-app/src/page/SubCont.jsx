// 메인 페이지 컨텐츠 컴포넌트

import React, { useEffect } from "react";

import "../css/common.css";

// 자동스크롤 JS 불러오기
import { initSete, zeroPnoe, evtFne} from "../func/SubScroll.js";

// 모듈 불러오기
import IntroSub from "./IntroSub";
import TAEYANG from "./TAEYANG";
import JEONSOMI from "./JEONSOMI";
import ZionT from "./ZionT";
import BryanChase from "./BryanChase";
import PARKBOGUM from "./PARKBOGUM";
import LEEJONGWON from "./LEEJONGWON";
import AuditionSub from "./AuditionSub";
import AlbumSub from "./AlbumSub";

// 제이쿼리
import $ from 'jquery';

export function SubCont(){
// 메인 페이지일때만 자동스크롤 기능 적용함!
 useEffect(() => {

  // 메뉴+인디케이터 이벤트 기능설정함수 호출 ///
  evtFne();

  // 초기화 함수 호출
  initSete();

  // 페이지번호 초기화 호출
  zeroPnoe();

 }, []); ////////// useEffect ////////////

return (
    <sub id="sub-area" className="site-sub-body">
        {/* 2-1. 서브 소개 파트 */}
        <section id="sub-Intro-area" className="sub">
        <IntroSub />
        </section>
        {/* 2-3. 아티스트 파트 */}
        <section id="ty-area" className="sub">
        <TAEYANG />
        {/* 2-3. 아티스트 파트 */}
        <section id="sm-area" className="sub">
        <JEONSOMI />
        {/* 2-3. 아티스트 파트 */}
        <section id="zt-area" className="sub">
        <ZionT />
        {/* 2-3. 아티스트 파트 */}
        <section id="bc-area" className="sub">
        <BryanChase />
        {/* 2-3. 아티스트 파트 */}
        <section id="bg-area" className="sub">
        <PARKBOGUM />
        {/* 2-3. 아티스트 파트 */}
        <section id="jw-area" className="sub">
        <LEEJONGWON />
        </section>
        {/* 2-4. 서브 앨범 파트 */}
        <section id="sub-album-area" className="sub">
        <AlbumSub />
        </section>
        {/* 2-5. 서브 오디션 파트 */}
        <section id="sub-aud-area" className="sub">
        <AuditionSub />
        </section>
    </sub>
);
} ///////// SubCont 컴포넌트 /////////////

export default SubCont;