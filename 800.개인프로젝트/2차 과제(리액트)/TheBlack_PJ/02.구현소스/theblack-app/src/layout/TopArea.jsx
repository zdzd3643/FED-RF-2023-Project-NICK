// theblack PJ 상단영역 공통 컴포넌트 

import '../css/common.css'


export function TopArea(){
  return(
    <>
    <div id="top-area">
        <header className="top-area site-header">
            {/* 1-1. 언어 아이콘 */}
            <div className="gicon">
                <img src="https://theblacklabel.com/wp-content/themes/TBL_theme/assets/images/global.png" alt="아이콘"/>
            </div>
            {/* 1-2. 더블랙 메인로고 */}
            <div className="TBlogo">
                <img src="./images/더블랙로고.png" alt="더블랙 로고"/>
            </div>
            {/* 1-3. 더블랙 햄버거 */}
            <div className="TBham">
                <img src="https://theblacklabel.com/wp-content/themes/TBL_theme/assets/images/menu.png" alt="햄버거버튼"/>
            </div>
        </header>
    </div>
    </>
  )
} /////////////// TopArea 컴포넌트 ///////////////