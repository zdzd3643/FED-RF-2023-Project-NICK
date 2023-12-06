// theblack PJ 상단영역 공통 컴포넌트 
// GNB 데이터
import { useNavigate } from "react-router-dom";
import { GnbHam } from "../modules/HamGnb";

// 공통 CSS 불러오기
import '../css/common.css'

// 컨텍스트 API
import { bCon } from "../modules/TbContext";
import { useCallback } from "react";

/******************************************************* 
  [ 리액트 라우터와 연결하여 사용되는 라우터 컴포넌트 ]
  1. <Link to="/경로명"></Link>
  -> to속성의 경로는 <Route path="/경로명"> 과 일치함!

  2. <Outlet />
  -> 라우터 연결 컴포넌트 출력자리 컴포넌트
  -> 여기서는 MainArea 컴포넌트에 출력!
*******************************************************/

// 메모이제이션 적용하기! /////
// -> 그.러.나... 단순히 적용하면 효과가 없음!
// 이유는? 컨텍스트 API가 전역적인 함수/변수를 전달하고 있어서
// 매번 새롭게 리랜더린 됨으므로 인해 메모이제이션 갱신을
// 하게끔 하기에 효가가 없는것!!!
// ->>> 방법은? 컨텍스트API를 사용하지 말고
// props로 전달하는 방식으로 전환하면 효과를 볼 수 있다!
// -> React.memo는 전달속성이 변경됨을 기준하여
// 메모이제이션 기능를 제공하기 때문이다!
// -> 전달되는 함수가 반드시 useCallback() 처리가 되어야 한다!!!



export function TopArea(){

  // 라우터 이동객체설정
  const goNav = useNavigate();
  
  // 라우터 이동함수 : pgName - 페이지이름 / param - 전달값
  const chgPage = useCallback((pgName,param) => goNav(pgName,param),[]);
  // 메모이제이션 되는 TopArea 컴포넌트에 제공하는 함수가
  // useCallback을 사용한 메모이제이션 처리되어야 변경없는 것을
  // 체크하여 함수를 업데이트 하지 않는다!
  // useCallback(기존익명함수,[의존성])
  // -> 의존성 변수가 없을때 비워놓아도 효과 있음!(단,형식은 맞출것!)

  // 리턴코드 ///////////////////////////

  return(
    <bCon.Provider value={{ chgPage }}>
    {/* 1.  상단영역 */}
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
            <GnbHam chgPageFn={chgPage} />
    </header>
    </bCon.Provider>
  )
} /////////////// TopArea 컴포넌트 ///////////////


