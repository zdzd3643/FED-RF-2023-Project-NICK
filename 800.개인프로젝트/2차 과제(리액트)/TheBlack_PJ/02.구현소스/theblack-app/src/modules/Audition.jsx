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
    <div className="aud-audTitle">
        <h3>THE</h3> 
        <h3>BLACKLABLE</h3> 
        <h3>THAILAND</h3>
        <h3>AUDITION</h3> 
    </div>
    <div className="aud-video">
      <video 
        src="./images/AUDITION_mv.mp4"
        width="1250" height="703" 
        muted="muted"
        controls="1">
      </video>
    </div>
    <div className="aud-viewBtn">
      VIEW MORE
    </div>  
    </>
  ) //////// 리턴함수 ///////////
} ////////// artists 컴포넌트 ///////