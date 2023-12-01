// 메인 페이지 JS - index.js
import React, { useEffect, useLayoutEffect, useState } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

// 컨텍스트 API 불러오기
import { bCon } from './modules/TbContext';

import { TopArea } from './layout/TopArea';
import { MainArea } from './layout/MainArea';
import { FooterArea } from './layout/FooterArea';

// 제이쿼리 
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

// 페이지 공통 CSS
import './css/common.css';

// 최상위 Root 컴포넌트 ///////
function App(){

    // 후크상태변수 설정 : 페이지변경
    const [pgName,setPgName] = useState('main');

    // 페이지변경 상태변수 업데이트 함수
    const chgPgName = (txt) => {
      setPgName(txt);
    }; ///////// chgPgName 함수 //////

  // 랜더링 후 실행구역 //////////
  useEffect(()=>{
    // 햄버거 버튼 클릭시 전체 메뉴 보이기/숨기기
    $('.TBham').click(e=>{
      // 1. 전체메뉴 박스 : .mbox -> 보이기/숨기기
      $('.gbox').fadeToggle(300);

      // 2. 햄버거버튼에 클래스 'on' 넣기/빼기
      $(e.currentTarget).toggleClass('on');
      // e.target과 e.currentTarget은 다르다!
      // 후자가 햄버거 버튼 자신임!
      // console.log(e.currentTarget)
    }); ////////// click ///////////

    // 랜더링구역 한번만 실행 : 욥션 []
  },[]); //////////// useEffect ///////////

  // 처음 로딩시 스크롤 상단이동 //////
  useLayoutEffect(()=>{
    window.scrollTo(0,0);
  }); ///// useLayoutEffect //////////

  // 리턴코드 ////////////////////
  return(
    <bCon.Provider value={{pgName, chgPgName}}>
      <TopArea />
      <MainArea page={pgName}/>
      <FooterArea />
    </bCon.Provider>
  )

} //////////////// App 컴포넌트 ///////////////

// 출력하기 ///////
const root = createRoot(document.querySelector('#root'));
root.render(<App />)
