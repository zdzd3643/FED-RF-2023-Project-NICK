// GS25 index 페이지

// 메인 페이지 JS - index.js
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

// 제이쿼리
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import { Layout } from "./components/layout/Layout";


// 최상위 Root 컴포넌트 ///////
function App() {
    // 리턴코드 ////////////////////
    return (
        <>
          <Layout />
        </>
    );
} //////////////// App 컴포넌트 ///////////////

// 출력하기 ///////
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
