// 오디션 페이지 컨텐츠 컴포넌트

import "../css/aud.css";

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// 언어번역 

import '../func/i18n';
import i18next from "../func/i18n"
import { useTranslation } from "react-i18next";

export function AuditionSub(){
  const { t } = useTranslation();

  // 리턴코드 ////////////////
  
  return(
    <section id="aud-Sub-area">
    <div className="aud-title">
        <h3>{t("AUDITION")}</h3>
    </div>
    <div className="aud-container">
      <div className="aud-Cont">
      <big><b>{t("THEBLACKLABEL X CP Group (THEBLACKSEA)")}</b></big><br />
      <big><b>{t("Thailand Audition")}</b></big>
      <br /><br />
          <p><small>■</small> {t("Category")}</p>
          <p>- {t("Vocal / Rap / Dance")}</p>
          <br/>
          <p><small>■</small> {t("Eligibility")}</p>
          <p>{t("Female & Male / Minimum 13 years old")}</p>
          <br />
          <p><small>■</small> {t("Reward")}</p>
          <p>{t("2month trainee experience at THEBLACKLABEL")}</p><p>{t("with post-evaluation to become a trainee at the label.")}</p>
          <br />
          <p><small>■</small> {t("How to Apply")}</p>
          <p>{t("- 1st. Submit Personal Information")}</p>
          <p>{t("(Name / Date of Birth / Height / Weight, etc)")}</p>
          <p>{t("- 2nd. Attach photo(s) and video(s)")}</p>
          <p>{t("- 3rd. Submit to audition@theblackseaofficial.com")}</p>
          <br />
          <p><small>■</small> {t("Submission Period")}</p>
          <p>{t("April 18th 2023 - June 7th 2023")}</p>
      </div>
      <div className="aud-poster">
        <img src="./images/오디션 이미지2.jpg"
        alt="오디션 포스터 이미지" />
      </div>
    </div>
    </section>
  );
} //////////// AuditionSub 컴포넌트 //////////////

export default AuditionSub;