// GS25_PJ 메인 컴포넌트


// 아티스트 컴포넌트
export function FooterArea(){

/////////////////////////////////
// 코드리턴 /////////////////////
return(
<>
<div id="footer">
<footer className="footer inbox">
{/* <!-- 파트박스 5개 --> */}
<div className="partbox col-8">
<div className="link-site">
<h2>GS25소개 | 개인정보처리방침 | GS리테일 멤버십 회원약관 | 입점상담 | 제휴 문의 | 사이트맵 | 오시는길</h2>
</div>
</div>
<div className="partbox col-4">
{/* <!-- 3-3.SNS --> */}
<div className="sns-full">
<div className="sns-logo">
<img
src="./images/gs25_누끼파일.png"
alt="GS25로고"
/>
</div>
<h2>소통하기</h2>
<div className="sns-arrow">
<img
src="./images/소통하기_화살표.png"
alt="화살표"
/>
</div>
<div className="sns-box">
<ol>
<li>
<a href="#" className="fa-brands fa-square-facebook"></a>
<span className="ir">
페이스북 바로가기
</span>
</li>
<li>
<a href="#" className="fa-brands fa-square-twitter"></a>
<span className="ir">
트위터 바로가기
</span>
</li>
<li>
<a href="#" className="fa-brands fa-square-instagram"></a>
<span className="ir">
인스타그램 바로가기
</span>
</li>
<li>
<a href="#" className="fa-brands fa-square-youtube"></a>
<span className="ir">
유튜브 바로가기
</span>
</li>
</ol>
</div>
</div>
</div>
<div className="partbox col-4">
{/* <!-- 3-2.회사정보 --> */}
<div className="co-info">
<address>
(04377)서울특별시 강남구 논현로508(역삼동 679번지 GS타워) <br />
대표이사 : 허연수, 김호성<br />
사업자등록번호 : 116-81-18745
</address>
</div>
</div>
<div className="partbox col-4"></div>
<div className="partbox col-4">
<div className="site-btn">
<ul>
<li className="sbtn">
<a href="#">계열사 보기</a>
{/* <!-- 서브메뉴 --> */}
<div className="smenu">
<ol>
    <li>
        <a href="#">(주)GS</a>
    </li>
    <li>
        <a href="#">GS네트웍스</a>
    </li>
    <li>
        <a href="#">GS&Point.com</a>
    </li>
    <li>
        <a href="#">GS칼텍스(Kixx)</a>
    </li>
    <li>
        <a href="#">GS엠비즈</a>
    </li>
    <li>
        <a href="#">GS스포츠</a>
    </li>
    <li>
        <a href="#">GS EPS</a>
    </li>
    <li>
        <a href="#">GS건설</a>
    </li>
    <li>
        <a href="#">엘리시안강촌</a>
    </li>
</ol>
</div> 
</li>
<li className="sbtn2">
<a href="#">GS리테일 브랜드</a>
{/* <!-- 서브메뉴 --> */}
<div className="smenu2">
<ol>
    <li>
        <a href="#">GS리테일</a>
    </li>
    <li>
        <a href="#">GS25</a>
    </li>
    <li>
        <a href="#">GS SHOP</a>
    </li>
    <li>
        <a href="#">GS THE FRESH</a>
    </li>
    <li>
        <a href="#">GS Fresh Mall</a>
    </li>
    <li>
        <a href="#">팝카드</a>
    </li>
    <li>
        <a href="#">그랜드 인터컨티넨탈 <br />
        서울 파르나스</a>
    </li>
    <li>
        <a href="#">인터컨티넨탈
        <br /> 
        서울 코엑스</a>
    </li>
    <li>
        <a href="#">나인트리호텔 지점</a>
    </li>
    <li>
        <a href="#">파르나스몰</a>
    </li>
    <li>
        <a href="#">우리동네 딜리버리</a>
    </li>
</ol>
</div> 
</li>
</ul>
</div>
</div>
</footer>
</div>
    </>
  ) //////// 리턴함수 ///////////
} ////////// FooterArea 컴포넌트 ///////