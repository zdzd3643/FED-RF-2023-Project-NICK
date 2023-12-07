// 인트로 페이지 컨텐츠 컴포넌트
import { Language } from "../modules/Language"
import "../css/intro.css"

// 언어번역 

import '../func/i18n';
import i18next from "../func/i18n"
import { useTranslation } from "react-i18next";

export function IntroSub(){
  const { t } = useTranslation();

  const clickHandler = (e)=> {
    i18next.changeLanguage(e.target.value);
    e.preventDefault();
  }

  return(
    <section id="introSub-area">
      <Language onChange={(e)=> clickHandler(e)} />
      <div className="intSub-Tit">
        <h3>THE ORGANIZATION</h3>
      </div>
      <div className="intSub-cont">
        <strong>INTRODUCTION</strong><br /><br />
        <p>{t('모든 것은 어둠에서 시작됩니다.')}</p>
        <br/>
        <p>{t('그 어떠한 색과 빛도 존재하지 않는 상태에서')} {t('우리의 크리에이티브에 대한 여정은 시작됩니다.')}</p>
        <br />
        <p>{t('이상과 상상에 생기를 불어넣는 작업,')} {t('재능의 원석을 발견하여 영감을 불어넣는 과정,')}</p>
        <p>{t('예술적 통념의 한계를 뛰어넘어 대중 예술을 재정의하고')}</p> <p>{t('혁신을 가져오는 과감한 시도야 말로 우리가 추구하는 가치의 핵심입니다.')}</p>
        <br/>
        <p>{t('더블랙레이블에 오신 것을 환영합니다.')}</p>
        <br />
        <hr className="gubun"/>
      </div>
      <div className="intSub-foundCont">
      <strong>FOUNDER</strong><br /><br />
        <p>{t("TEDDY는 더블랙레이블의 총괄 디렉터로 비전을 제시하고 설계하며 운영하는 총책임자이다.")}</p>
        <br/>
        <p>{t("그는 20년 이상의 커리어를 가진 작곡가이자 프로듀서로서")}</p>
        <p>{t("빅뱅, 지드래곤, 2NE1을 맡아 예술적 방향성과 정체성을 수립하고 글로벌 스타로의 성장을 지원했다.")}</p>
        <br />
        <p>{t("새롭고 혁신적인 음악을 창조하는 그는 끊임없이 메가 히트곡을 만들어내며 글로벌 팝 뮤직 팬들의 찬사를 이끌어내고있다.")}</p>
        <p>{t("시대를 앞선 트렌디한 곡들을 프로듀싱한 TEDDY는 K-Pop의 위상이 세계적인 스타덤에 오를 수 있도록 크게 기여한 것은 물론,")}</p>
        <p>{t("뮤직비디오 제작에도 본인만의 세련된 감각이 투영된 화제작들을 연이어 선보이며 TEDDY가 곧 장르라는 트렌드를 만들어냈다.")}</p>
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
        <p>{t("TEDDY(크리에이티브 총괄)")}</p>
        <p>{t("KUSH(프로듀서 / 작사가)")}</p>
        <p>{t("24(프로듀서 / 작사가)")}</p>
        <p>{t("VINCE (프로듀서 / 작사가)")}</p>
        <p>{t("R.TEE (프로듀서 / 작사가)")}</p>
        <p>{t("LØREN (프로듀서 / 작사가)")}</p>
        <p>{t("DANNY CHUNG (작사가 / A&R)")}</p>
        <p>{t("GEE EUN (스타일링 디렉터 / 스타일리스트)")}</p>
        <p>{t("SEAJUN (비주얼 디렉터)")}</p>
        <p>{t("KHAN (포토그래퍼)")}</p>
        <p>{t("SOONHO (사업 전략 & 개발 / 아티스트 매니지먼트)")}</p>
        <p>{t("MJ (사업 전략 & 개발 / A&R)")}</p>
        <p>{t("RYU (아티스트 전략)")}</p>
        <p>{t("ENGINEER TEAM")}</p>
        
      </div>
    </section>
  );
} //////////// IntroSub 컴포넌트 //////////////

export default IntroSub;