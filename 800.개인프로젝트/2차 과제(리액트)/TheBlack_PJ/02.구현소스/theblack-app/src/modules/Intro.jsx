// TheBlack 인트로 컴포넌트

// 인트로 모듈 CSS
import "../css/intro.css";

import "../css/common.css"

// 언어번역 
import '../language/i18n';

import i18n from "../language/i18n";
import { useTranslation, Trans } from "react-i18next";

const lngs = {
  ko: { nativeName: 'KOREA'},
  en: { nativeName: 'ENGLISH'},
  ja: { nativeName: 'JAPAN'},
  ch: { nativeName: 'CHINA'}
}


// 인트로 컴포넌트 /////
const { t, i18n } = useTranslation();

export function Intro(){

  /////////////////////////////////
  // 코드리턴 /////////////////////
  return(
    <section id="intro-area">
      {Object.keys(lngs).map((lng) => (
      <button 
      key={lng} 
      style={{ 
        fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} 
      type="submit" 
      onClick={() => i18n.changeLanguage(lng)}
      > {lngs[lng].nativeName}
      </button>
      ))}
      <div className="intTit">
        <h3><Trans i18nKey="description.tit1" /></h3>
        <h3>{t('description.tit2')}</h3>
      </div>
      <div className="intCont">
        <p>모든 것은 어둠에서 시작됩니다.</p>
        <br/>
        <p>그 어떠한 색과 빛도 존재하지 않는 상태에서</p>
        <p>우리의 크리에이티브에 대한 여정은 시작됩니다.</p>
        <br />
        <p>이상과 상상에 생기를 불어넣는 작업,</p> 
        <p>재능의 원석을 발견하여 영감을 불어넣는 과정,</p>
        <p>예술적 통념의 한계를 뛰어넘어 대중 예술을 재정의하고</p> <p>혁신을 가져오는 과감한 시도야 말로 우리가 추구하는 가치의 핵심입니다.</p>
        <br/>
        <p>더블랙레이블에 오신 것을 환영합니다.</p>
      </div>
    </section>
  ); //////// 리턴함수 ///////////
} ////////// Intro 컴포넌트 ///////