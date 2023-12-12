// GS25_PJ 상단 컴포넌트

// 상단 컴포넌트
export function TopArea() {
    /////////////////////////////////
    // 코드리턴 /////////////////////
    return (
        <>
            <div id="header">
                <header className="header inbox">
                    {/* <!-- 파트박스 3개 --> */}
                    <div className="partbox col-2">
                        {/* <!-- 1-1-1. 메인로고 --> */}
                        <h1 className="header__logo">
                            <img
                                src="./images/gs25_누끼파일.png"
                                alt="GS25로고"
                            />
                        </h1>
                    </div>
                    <div className="partbox col-8">
                        {/* <!-- 1-1-2. GNB메뉴 --> */}
                        <nav className="gnb">
                            <ul>
                                <li>
                                    <a href="#">GS25소개</a>
                                </li>
                                <li>
                                    <a href="#">상품</a>
                                    {/* <!-- 서브메뉴 --> */}
                                    <div className="sub-menu">
                                        <ol>
                                            <li>
                                                <a href="#">간편식</a>
                                            </li>
                                            <li>
                                                <a href="#">가공식품</a>
                                            </li>
                                            <li>
                                                <a href="#">F&B</a>
                                            </li>
                                            <li>
                                                <a href="#">생활용품</a>
                                            </li>
                                            <li>
                                                <a href="#">기타</a>
                                            </li>
                                        </ol>
                                    </div>
                                </li>
                                <li>
                                    <a href="#">행사</a>
                                    <div className="sub-menu">
                                        <ol>
                                            <li>
                                                <a href="#">1+1</a>
                                            </li>
                                            <li>
                                                <a href="#">2+1</a>
                                            </li>
                                            <li>
                                                <a href="#">신상품</a>
                                            </li>
                                            <li>
                                                <a href="#">POP카드 할인</a>
                                            </li>
                                        </ol>
                                    </div>
                                </li>
                                <li>
                                    <a href="#">이벤트</a>
                                    <div className="sub-menu">
                                        <ol>
                                            <li>
                                                <a href="#">진행중 이벤트</a>
                                            </li>
                                            <li>
                                                <a href="#">당첨자 발표</a>
                                            </li>
                                            <li>
                                                <a href="#">고객만족평가</a>
                                            </li>
                                            <li>
                                                <a href="#">지난 이벤트</a>
                                            </li>
                                        </ol>
                                    </div>
                                </li>
                                <li>
                                    <a href="#">서비스</a>
                                    <div className="sub-menu">
                                        <ol>
                                            <li>
                                                <a href="#">멤버십</a>
                                            </li>
                                            <li>
                                                <a href="#">GS Pay</a>
                                            </li>
                                            <li>
                                                <a href="#">우리동네 GS</a>
                                            </li>
                                            <li>
                                                <a href="#">매장 검색</a>
                                            </li>
                                            <li>
                                                <a href="#">생활서비스</a>
                                            </li>
                                        </ol>
                                    </div>
                                </li>
                                <li>
                                    <a href="#">고객센터</a>
                                </li>
                                <li>
                                    <a href="#">창업안내</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="partbox col-2">
                        {/* <!-- 1-1-3. 탑메뉴 --> */}
                        <nav className="top-menu">
                            <ul>
                                <li>
                                    <a href="#">로그인</a>
                                </li>
                                <li>
                                    <a href="#">회원가입</a>
                                </li>
                                <li>
                                    <a href="#">고객센터</a>
                                </li>
                                <li>
                                    <a href="#">LANGUAGE</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        </>
    ); //////// 리턴함수 ///////////
} ////////// TopArea 컴포넌트 ///////
