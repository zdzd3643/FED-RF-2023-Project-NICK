// 인트로 페이지 컨텐츠 컴포넌트
import "../css/intro.css"

// 언어번역 

import '../func/i18n';
import { useTranslation } from "react-i18next";

export function IntroSub(){
  const { t } = useTranslation();

  return(
    <section id="introSub-area">
      <div className="intSub-Tit">
        <h3>THE ORGANIZATION</h3>
      </div>
      <div className="intSub-cont">
        <strong>INTRODUCTION</strong><br /><br />
        <p>{t('모든 것은 어둠에서 시작됩니다.')}</p>
        <br/>
        <p>{t('그 어떠한 색과 빛도 존재하지 않는 상태에서')}</p>
        <p>{t('우리의 크리에이티브에 대한 여정은 시작됩니다.')}</p>
        <br />
        <p>{t('이상과 상상에 생기를 불어넣는 작업,')}</p> 
        <p>{t('재능의 원석을 발견하여 영감을 불어넣는 과정,')}</p>
        <p>{t('예술적 통념의 한계를 뛰어넘어 대중 예술을 재정의하고').split("^")[0]}</p> 
        <p>{t('예술적 통념의 한계를 뛰어넘어 대중 예술을 재정의하고').split("^")[1]}</p> 
        <p>{t('혁신을 가져오는 과감한 시도야 말로 우리가 추구하는 가치의 핵심입니다.').split("^")[0]}</p>
        <p>{t('혁신을 가져오는 과감한 시도야 말로 우리가 추구하는 가치의 핵심입니다.').split("^")[1]}</p>
        <br/>
        <p>{t('더블랙레이블에 오신 것을 환영합니다.')}</p>
        <br />
        <hr className="gubun"/>
      </div>
      <div className="intSub-foundCont">
      <strong>FOUNDER</strong><br /><br />
        <p>{t("TEDDY는 더블랙레이블의 총괄 디렉터로")}</p>
        <p>{t("비전을 제시하고 설계하며 운영하는 총책임자이다.")}</p>
        <br/>
        <p>{t("그는 20년 이상의 커리어를 가진 작곡가이자 프로듀서로서")}</p>
        <p>{t("빅뱅, 지드래곤, 2NE1을 맡아 예술적 방향성과 정체성을 수립하고").split("^")[0]}</p>
        <p>{t("빅뱅, 지드래곤, 2NE1을 맡아 예술적 방향성과 정체성을 수립하고").split("^")[1]}</p>
        <p>{t("글로벌 스타로의 성장을 지원했다.")}</p>
        <br />
        <p>{t("새롭고 혁신적인 음악을 창조하는 그는 끊임없이 메가 히트곡을 만들어내며").split("^")[0]}</p>
        <p>{t("새롭고 혁신적인 음악을 창조하는 그는 끊임없이 메가 히트곡을 만들어내며").split("^")[1]}</p>
        <p>{t("글로벌 팝 뮤직 팬들의 찬사를 이끌어내고있다.")}</p>
        <br />
        <p>{t("시대를 앞선 트렌디한 곡들을 프로듀싱한 TEDDY는")}</p>
        <p>{t("K-Pop의 위상이 세계적인 스타덤에 오를 수 있도록 크게 기여한 것은 물론,")}</p>
        <p>{t("뮤직비디오 제작에도 본인만의 세련된 감각이 투영된 화제작들을 연이어 선보이며").split("^")[0]}</p>
        <p>{t("뮤직비디오 제작에도 본인만의 세련된 감각이 투영된 화제작들을 연이어 선보이며").split("^")[1]}</p>
        <p>{t("TEDDY가 곧 장르라는 트렌드를 만들어냈다.")}</p>
        <br />
        <hr className="gubun"/> 
      </div>
      <div className="services-cont">
          <strong>SERVICES</strong>
          <div className="intSub-services-cont">
            <div>
              <h3>{t("아티스트 트레이닝")}</h3>
              <br />
              <h4>{t("연습생 오디션 진행 및 선발")}</h4>
            </div>
            <div>
              <h3>{t("크리에이티브 디렉션")}</h3>
              <br />
              <h4>{t("아티스트 데뷔부터 앨범 기획까지 아트컨셉 및").split("^")[0]}</h4>
              <h4>{t("아티스트 데뷔부터 앨범 기획까지 아트컨셉 및").split("^")[1]}</h4>
              <h4>{t("크리에이티브 디렉션 제시")}</h4>
            </div>
            <div>
              <h3>{t("아티스트 매니지먼트")}</h3>
              <br />
              <h4>{t("미디어 및 언론홍보")}</h4>
              <h4>{t("마케팅 / 투어 / 브랜드 계약")}</h4>
            </div>
            <div>
                <h3>{t("음악 프로듀싱")}</h3>
                <br />
                <h4>{t("작사 / 작곡 / 편곡")}</h4>
            </div>
            <div>
              <h3>{t("음반 제작")}</h3>
              <br />
              <h4>{t("앨범 / 프로모션 / 굿즈 기획 및 제작").split("^")[0]}</h4>
              <h4>{t("앨범 / 프로모션 / 굿즈 기획 및 제작").split("^")[1]}</h4>
            </div>
            <div>
              <h3>{t("에이전시")}</h3>
              <br />
              <h4>{t("파트너 및 제 3자를 위한 컨텐츠 제작").split("^")[0]}</h4>
              <h4>{t("파트너 및 제 3자를 위한 컨텐츠 제작").split("^")[1]}</h4>
            </div>
        </div>
        </div>
      <div className="intSub-creat">
      <hr className="gubun"/> 
      <br />
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