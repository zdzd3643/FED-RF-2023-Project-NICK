// TBLlack.com 레이아웃 컴포넌트

import { FooterArea } from "./FooterArea";
import { MainArea } from "./MainArea";
import { TopArea } from "./TopArea";

// Context API 불러오기
import { bCon } from "../modules/TbContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useCallback, useLayoutEffect } from "react";

// 공통 미디어쿼리 불러오기
import "../css/media.css";

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

export function Layout() {

    // 처음 로딩시 스크롤 상단이동 //////
    useLayoutEffect(()=>{
      window.scrollTo(0,0);

      $('.glist a').click(e=>{
        // 햄버거버튼 닫기
        $('.gbox').removeClass('on');
      }); ///////// click //////////

    }); ///// useLayoutEffect //////////

  /********************************** 
   [컨텍스트 API 공유값 설정]
   1. chgPage 함수 : 라우터 이동기능   
   **********************************/
  // 리턴코드 ////////////////////////
  return (
    <>      
      <TopArea />
      <MainArea />
      <FooterArea />
    </>
  );
} /////////// Layout 컴포넌트 ///////////