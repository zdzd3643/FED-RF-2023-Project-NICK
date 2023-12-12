// GS25_PJ 레이아웃 컴포넌트

import { FooterArea } from "./FooterArea";
import { MainArea } from "./MainArea";
import { TopArea } from "./TopArea";

// 부드러운 스크롤 불러오기
import "../func/smoothScroll.js"

// 메인 js 불러오기
import "../func/main.js"

// 서브 js 불러오기
import "../func/sub.js"

// 링크 아이콘 불러오기
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />

// 파비콘 불러오기
import "./images/favicon-96x96.png"

// 메인 CSS 불러오기
import "../css/common.css"

// 메인 CSS 불러오기
import "../css/main.css"

// 서브 CSS 불러오기
import "../css/sub.css"

// 미디어쿼리 CSS 불러오기
import "../css/media.css"

// 아티스트 컴포넌트
export function Layout(){

  /////////////////////////////////
  // 코드리턴 /////////////////////
  return(
    <>
      <TopArea />
      <MainArea />
      <FooterArea />
    </>

  ) //////// 리턴함수 ///////////
} ////////// Layout 컴포넌트 ///////