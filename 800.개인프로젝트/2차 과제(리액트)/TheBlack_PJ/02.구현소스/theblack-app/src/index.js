// 메인 페이지 JS - index.js
import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

// 제이쿼리
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// 페이지 공통 CSS
import "./css/common.css";
import { Layout } from "./layout/Layout";
import { MainCont } from "./page/MainCont";
import { AlbumSub } from "./page/AlbumSub";
import { AuditionSub } from "./page/AuditionSub";
import { IntroSub } from "./page/IntroSub";
import { TAEYANG } from "./page/TAEYANG";
import JEONSOMI from "./page/JEONSOMI";
import ZionT from "./page/ZionT";
import BryanChase from "./page/BryanChase";
import PARKBOGUM from "./page/PARKBOGUM";
import LEEJONGWON from "./page/LEEJONGWON";

// 최상위 Root 컴포넌트 ///////
function App() {
    // 리턴코드 ////////////////////
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* <BrowserRouter>  */}
            <Routes>
                {/* 중요!!! 레이아웃 컴포넌트를 루트로 설정! */}
                <Route path="/" element={<Layout />}>
                    {/* 하위 라우트 셋팅 
          - path대신 index만 쓰면 첫페이지로 로딩함! 
          -> path는 Layout의 Link to="/" 에 해당하는 셋팅*/}
                    <Route index element={<MainCont />} />
                    <Route path="AlbumSub" element={<AlbumSub />} />
                    <Route path="AuditionSub" element={<AuditionSub />} />
                    <Route path="IntroSub" element={<IntroSub />} />
                    <Route path="TAEYANG" element={<TAEYANG />} />
                    <Route path="JEONSOMI" element={<JEONSOMI />} />
                    <Route path="ZionT" element={<ZionT />} />
                    <Route path="BryanChase" element={<BryanChase />} />
                    <Route path="PARKBOGUM" element={<PARKBOGUM />} />
                    <Route path="LEEJONGWON" element={<LEEJONGWON />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
} //////////////// App 컴포넌트 ///////////////

// 출력하기 ///////
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
