// TheBlack 오디션 컴포넌트

import "../css/aud.css";

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import { Link } from "react-router-dom";

// 언어번역 

import '../func/i18n';
import { useTranslation } from "react-i18next";

// 아티스트 컴포넌트
export function Audition(){
  const { t } = useTranslation();

  /////////////////////////////////
  // 코드리턴 /////////////////////
  return(
    <>
    <div className="aud-title">
        <h3>{t("AUDTION")}</h3>
    </div>
    <div className="aud-audTitle">
        <h3>{t("THE")}</h3> 
        <h3>{t("BLACKLABLE")}</h3> 
        <h3>{t("THAILAND")}</h3>
        <h3>{t("AUDITION")}</h3> 
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
    <Link to="/AuditionSub">VIEW MORE</Link>
    </div>  
    </>
  ) //////// 리턴함수 ///////////
} ////////// artists 컴포넌트 ///////