// 메인 페이지 컨텐츠 컴포넌트

// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export function Main(){

return (
  <>
<div id="main-area">
  <main className="site-body">
    {/* 2-1. 뮤비 파트 */}
    <section className="mv-area">
        <div className="somi-mv">
            <video 
            src="./images/SOMI_MV.mp4"
            id="mv"
            loop="loop"
            muted="muted"
            autoPlay="autoplay"
            ></video>
        </div>
        <div className="Pbtn">
            <a href="#">NowPlaying</a>
        </div>
        <div className="Pbtn2"></div>
        {/* 동영상 넘기기 버튼 */}
        {/* 폰트어썸 아이콘 */}
        <div className="arrow">
          <div className="lar">
            <FontAwesomeIcon 
              icon={faChevronLeft} />
          </div>
          <div className="rar">
            <FontAwesomeIcon 
              icon={faChevronRight} />
          </div>
        </div>     
    </section>
    {/* 2-2. 소개 파트 */}
    <section className="intro-area"></section>
    {/* 2-3. 아티스트 파트 */}
    <section className="ats-area"></section>
    {/* 2-4. 앨범 파트 */}
    <section className="album-area"></section>
    {/* 2-5. 오디션 파트 */}
    <section className="aud-area"></section>
  </main>
</div>
</>
);
} ///////// Main 컴포넌트 /////////////