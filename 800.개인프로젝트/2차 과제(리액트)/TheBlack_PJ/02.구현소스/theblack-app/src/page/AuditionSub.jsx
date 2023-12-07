// 오디션 페이지 컨텐츠 컴포넌트

import "../css/aud.css";

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

export function AuditionSub(){

  // 리턴코드 ////////////////
  
  return(
    <section id="aud-Sub-area">
    <div className="aud-title">
        <h3>AUDTION</h3>
    </div>
    <div className="aud-container">
      <div className="aud-Cont">
      <big><b>THEBLACKLABEL X CP Group (THEBLACKSEA)</b></big><br />
      <big><b>Thailand Audition</b></big>
      <br /><br />
          <p><small>■</small> Category</p>
          <p>- Vocal / Rap / Dance</p>
          <br/>
          <p><small>■</small> Eligibility</p>
          <p>Female & Male / Minimum 13 years old</p>
          <br />
          <p><small>■</small> Reward</p>
          <p>2month trainee experience at THEBLACKLABEL </p><p>with post-evaluation to become a trainee at the label.</p>
          <br />
          <p><small>■</small> How to Apply</p>
          <p>- 1st. Submit Personal Information</p>
          <p>(Name / Date of Birth / Height / Weight, etc)</p>
          <p>- 2nd. Attach photo(s) and video(s)</p>
          <p>- 3rd. Submit to audition@theblackseaofficial.com</p>
          <br />
          <p><small>■</small> Submission Period</p>
          <p>April 18th 2023 -  June 7th 2023</p>
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