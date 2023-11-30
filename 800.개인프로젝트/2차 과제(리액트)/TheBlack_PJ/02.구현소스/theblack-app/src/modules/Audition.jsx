// TheBlack 오디션 컴포넌트

import "../css/aud.css";

import { useEffect } from "react";

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// 아티스트 컴포넌트
export function Audition(){

  /////////////////////////////////
  // 코드리턴 /////////////////////
  return(
    <>
    <div className="aud-title">
        <h3>AUDTION</h3>
    </div>
    <div className="aud-poster">
      <img src="./images/오디션 이미지2.jpg" alt="오디션 포스터" />
    </div>
    </>
  ) //////// 리턴함수 ///////////
} ////////// artists 컴포넌트 ///////