// 메인 페이지 JS - index.js
import React, { useEffect, useState } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { TopArea } from './layout/TopArea';
import { MainArea } from './layout/MainArea';
import { FooterArea } from './layout/FooterArea';

// 페이지 공통 CSS
import './css/common.css';

// 최상위 Root 컴포넌트 ///////
export default function App(){
  
  // 리턴코드 ////////////////////
  return(
    <>
      <TopArea />
      <MainArea />
      <FooterArea />
    </>
  )

} //////////////// App 컴포넌트 ///////////////

// 출력하기 ///////
const root = createRoot(document.querySelector('#root'));
root.render(<App />)
