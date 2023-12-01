// 오디션 페이지 컨텐츠 컴포넌트

import "../css/aud.css";

import { useEffect } from "react";

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

export function AuditionSub(){

  // 리턴코드 ////////////////
  
  return(
    <>
    <div className="aud-title">
        <h3>AUDTION</h3>
    </div>
    <div className="aud-poster">
      <img src="./images/오디션 이미지2.jpg" alt="오디션 포스터" />
    </div>
    </>
  );
} //////////// AuditionSub 컴포넌트 //////////////