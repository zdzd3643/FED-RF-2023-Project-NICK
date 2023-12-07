// 인트로 페이지 컨텐츠 컴포넌트

// 제이쿼리
import $ from 'jquery';

import { useEffect, useLayoutEffect } from "react";

import "../css/intro.css"

// 자동스크롤 JS 불러오기
import { actPageSub, evtFnSub, initSetSub, zeroPnoSub } from '../func/SubScroll.js';

export function IntroSub(){

  useLayoutEffect(()=>{

    // 초기화 함수 호출
    initSetSub();


    // 전체 페이지 초기화함수
    zeroPnoSub();

    // 이벤트 호출 함수
    evtFnSub();

    // 이벤트 액션함수
    actPageSub();

  }); ///////// useEffect /////////
  
  return(
    <section id="introSub-area">
      <div className="intSub-Tit">
        <h3>THE ORGANIZATION</h3>
      </div>
      <div className="intSub-cont">
        <strong>INTRODUCTION</strong><br /><br />
        <p>모든 것은 어둠에서 시작됩니다.</p>
        <br/>
        <p>그 어떠한 색과 빛도 존재하지 않는 상태에서 우리의 크리에이티브에 대한 여정은 시작됩니다.</p>
        <br />
        <p>이상과 상상에 생기를 불어넣는 작업, 재능의 원석을 발견하여 영감을 불어넣는 과정,</p>
        <p>예술적 통념의 한계를 뛰어넘어 대중 예술을 재정의하고</p> <p>혁신을 가져오는 과감한 시도야 말로 우리가 추구하는 가치의 핵심입니다.</p>
        <br/>
        <p>더블랙레이블에 오신 것을 환영합니다.</p>
        <br />
        <hr className="gubun"/>
      </div>
      <div className="intSub-foundCont">
      <strong>FOUNDER</strong><br /><br />
        <p>TEDDY는 더블랙레이블의 총괄 디렉터로 비전을 제시하고 설계하며 운영하는 총책임자이다.</p>
        <br/>
        <p>그는 20년 이상의 커리어를 가진 작곡가이자 프로듀서로서</p>
        <p>빅뱅, 지드래곤, 2NE1을 맡아 예술적 방향성과 정체성을 수립하고 글로벌 스타로의 성장을 지원했다.</p>
        <br />
        <p>새롭고 혁신적인 음악을 창조하는 그는 끊임없이 메가 히트곡을 만들어내며 글로벌 팝 뮤직 팬들의 찬사를 이끌어내고있다.</p>
        <p>시대를 앞선 트렌디한 곡들을 프로듀싱한 TEDDY는 K-Pop의 위상이 세계적인 스타덤에 오를 수 있도록 크게 기여한 것은 물론,</p>
        <p> 뮤직비디오 제작에도 본인만의 세련된 감각이 투영된 화제작들을 연이어 선보이며 TEDDY가 곧 장르라는 트렌드를 만들어냈다.</p>
        <br />
        <hr className="gubun"/> 
      </div>
      <div className="services-cont">
        <div className="services-cont-title">
          <strong>SERVICES</strong>
        </div>
        <div className="intSub-services">
          <div className="intSub-services1">
            <img src="./images/introSub_img_0.jpg" alt="서비스 이미지0" />
            <img src="./images/introSub_img_1.jpg" alt="서비스 이미지1" />
          </div>
          <div className="intSub-services2">
            <img src="./images/introSub_img_2.jpg" alt="서비스 이미지2" />
            <img src="./images/introSub_img_3.jpg" alt="서비스 이미지3" />
          </div>
          <div className="intSub-services3">
            <img src="./images/introSub_img_4.jpg" alt="서비스 이미지4" />
            <img src="./images/introSub_img_5.jpg" alt="서비스 이미지5" />
          </div>
        </div>
        <br />
        <hr className="sgubun"/> 
      </div>
      <div className="intSub-creat">
      <strong>CREATIVES</strong><br /><br />
        <p>TEDDY(크리에이티브 총괄)</p>
        <p>KUSH(프로듀서 / 작사가)</p>
        <p>24(프로듀서 / 작사가)</p>
        <p>VINCE (프로듀서 / 작사가)</p>
        <p>R.TEE (프로듀서 / 작사가)</p>
        <p>LØREN (프로듀서 / 작사가)</p>
        <p>DANNY CHUNG (작사가 / A&R)</p>
        <p>GEE EUN (스타일링 디렉터 / 스타일리스트)</p>
        <p>SEAJUN (비주얼 디렉터)</p>
        <p>KHAN (포토그래퍼)</p>
        <p>SOONHO (사업 전략 & 개발 / 아티스트 매니지먼트)</p>
        <p>MJ (사업 전략 & 개발 / A&R)</p>
        <p>RYU (아티스트 전략)</p>
        <p>ENGINEER TEAM</p>
        
      </div>
    </section>
  );
} //////////// IntroSub 컴포넌트 //////////////

export default IntroSub;