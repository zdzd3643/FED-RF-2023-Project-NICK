// theblack PJ 상단영역 공통 컴포넌트 

import '../css/common.css'
import { GnbHam } from '../modules/HamGnb'


export function TopArea(){
  return(
    <>
    <header id="top-area" className="site-header">
            {/* 1-1. 언어 아이콘 */}
            <div className="gicon">
                <img src="https://theblacklabel.com/wp-content/themes/TBL_theme/assets/images/global.png" alt="아이콘"/>
            </div>
            {/* 1-2. 더블랙 메인로고 */}
            <div className="TBlogo">
                <a href="#">
                <img src="./images/더블랙로고.png" alt="더블랙 로고"/>
                </a>
            </div>
            {/* 1-3. 더블랙 햄버거 */}
            <div className="TBham">
                <span></span> <span></span> <span></span>
            </div>
            {/* GNB 컴포넌트 */}
            <GnbHam />
    </header>
    </>
  )
} /////////////// TopArea 컴포넌트 ///////////////