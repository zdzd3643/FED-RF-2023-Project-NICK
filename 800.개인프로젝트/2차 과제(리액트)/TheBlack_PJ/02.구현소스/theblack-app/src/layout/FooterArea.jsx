// theblack PJ 하단영역 공통 컴포넌트 

import '../css/common.css'

export function FooterArea(){
  return(
    <footer id="footer-area" className="main">
      <div className="footer-sns">
        <a href="https://www.instagram.com/theblacklabel"
        target='_blank'
        title="인스타그램으로 이동"
        className="TBins">
          <img src="./images/insta_img_white-remove.png" alt="인스타그램 이미지" />
        </a>
        <a href='https://www.youtube.com/THEBLACKLABEL'
        target='_blank'
        title="유튜브로 이동" 
        className="TBytube">
        <img src="./images/youtube_img_white-remove.png" alt="유튜브이미지" />
        </a>
        <a href="https://twitter.com/THEBLACKLABEL"
        target='_blank'
        title="트위터로 이동"  
        className="TBtwit">
        <img src="./images/twitter_img_white-remove.png" 
        alt="트위터 이미지" />
        </a>
      </div>
        <address>
            Copyright ⓒ THEBLACKLABEL All Rights Reserved.<br/>
            일반문의 info@theblacklabel.com | 오디션문의 audition@theblacklabel.com <br/>
            대표 : 박홍준(Teddy)<br/>
        </address>
    </footer>
  )
} /////////////// FooterArea 컴포넌트 ///////////////