// GS25_PJ 메인 컴포넌트

// 아티스트 컴포넌트
export function MainArea(){

  /////////////////////////////////
  // 코드리턴 /////////////////////
  return(
    <>
    <div id="main">
            <main class="main inbox">
                {/* <!-- 파트그룹박스 6개 --> */}
                {/* <!-- 2-1. 로고 배너영역 --> */}
                <div class="group-part group-part-01">
                    {/* <!-- 파트박스 1개 --> */}
                    <div class="partbox col-3">
                        <div class="samgime">
                            <img
                            src="../01.자료수집/삼김이_이미지.png"
                            alt="삼김이"
                            />
                        </div>
                    </div>
                    <div class="partbox col-9">
                        <div class="logo-banner">
                            <img
                            src="../01.자료수집/GS25소개.png"
                            alt="로고 배너"
                            />
                        </div>
                    </div>
                </div>
                {/* <!-- 2-2. 이벤트 배너영역 --> */}
                <div class="group-part group-part-02">
                    {/* <!-- 파트박스 3개 --> */}
                    <div class="partbox col-2">
                        <div class="event-list">
                            <ol>
                                <li>
                                    <a href="#">9월 이벤트 모아보기</a>
                                </li>
                                <li>
                                    <a href="#">GS Pay로 결제하고 <br />
                                    간식메이커 득템!!</a>
                                </li>
                                <li>
                                    <a href="#">아침/저녁 갓생타임</a>
                                </li>
                                <li>
                                    <a href="#">주말엔 잔비어 할인</a>
                                </li>
                                <li>
                                    <a href="#">갤럭시 S5 당첨기회!</a>
                                </li>
                                <li>
                                    <a href="#">쓰다보면 완성되는 <br />
                                    GS BINGO!!</a>
                                </li>
                            </ol>
                        </div> 
                    </div>
                    <div class="partbox col-7 container slide-wrap-box">
                        <div class="event-banner">
                            <div class="slide-box">
                                {/* <!-- 슬라이드 --> */}
                                <ul class="slide">
                                    <li>
                                        <img
                                        src="../01.자료수집/이벤트배너.jpg"
                                        alt="이벤트 배너"/>
                                    </li>
                                    <li>
                                        <img
                                        src="../01.자료수집/이벤트배너2.jpg"
                                        alt="이벤트 배너2"/>
                                    </li>
                                    <li>
                                        <img
                                        src="../01.자료수집/이벤트배너3.png"
                                        alt="이벤트 배너3"/>
                                    </li>
                                    <li>
                                        <img
                                        src="../01.자료수집/이벤트배너4.png"
                                        alt="이벤트 배너4"/>
                                    </li>
                                    <li>
                                        <img
                                        src="../01.자료수집/이벤트배너5.png"
                                        alt="이벤트 배너5"/>
                                    </li>
                                    <li>
                                        <img
                                        src="../01.자료수집/이벤트배너6.png"
                                        alt="이벤트 배너6"/>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- 이동버튼 --> */}
                            <a href="#" class="abtn ab1"><img src="../01.자료수집/화살표_왼쪽_아이콘.png" alt="왼쪽이동버튼" />
                            </a>
                            <a href="#" class="abtn ab2"><img src="../01.자료수집/화살표_오른쪽_아이콘.png" alt="오른쪽이동버튼" />
                            </a>

                            {/* <!-- 블릿버튼 --> */}
                            <ol class="indicate">
                                <li class="on">
                                    <img src="../01.자료수집/dot1.png" alt="dot1" />
                                    <img src="../01.자료수집/dot2.png" alt="dot2" />
                                </li>
                                <li>
                                    <img src="../01.자료수집/dot1.png" alt="dot1" />
                                    <img src="../01.자료수집/dot2.png" alt="dot2" />
                                </li>
                                <li>
                                    <img src="../01.자료수집/dot1.png" alt="dot1" />
                                    <img src="../01.자료수집/dot2.png" alt="dot2" />
                                </li>
                                <li>
                                    <img src="../01.자료수집/dot1.png" alt="dot1" />
                                    <img src="../01.자료수집/dot2.png" alt="dot2" />
                                </li>
                                <li>
                                    <img src="../01.자료수집/dot1.png" alt="dot1" />
                                    <img src="../01.자료수집/dot2.png" alt="dot2" />
                                </li>
                                <li>
                                    <img src="../01.자료수집/dot1.png" alt="dot1" />
                                    <img src="../01.자료수집/dot2.png" alt="dot2" />
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div class="partbox col-3">
                        <div class="ud">
                            <img
                            src="../01.자료수집/우딜 2.png"
                            alt="우딜 이미지"
                            />
                        </div>
                    </div>
                </div>
                {/* <!-- 2-3. 행사 배너영역 --> */}
                <div class="group-part group-part-03">
                    {/* <!-- 파트박스 2개 --> */}
                    <div class="partbox col-2">
                        <div class="product-list">
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
                                    <a href="#">인기상품</a>
                                </li>
                                <li>
                                    <a href="#">PB상품</a>
                                </li>
                            </ol>
                        </div> 
                    </div>
                        <div class="partbox col-10">
                            <section class="mGrid on">
                            <div>
                                <img
                                    src="../01.자료수집/1+1상품_1.jpg"
                                    alt="연세)감귤요거트300ML"
                                />
                                <aside>
                                <h2>연세)감귤요거트300ML</h2>
                                <h3>2,300원</h3>
                                </aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/1+1상품_2.jpg"
                                    alt="롯데)핫식스제로250ML"
                                />
                                <aside>
                                <h2>롯데)핫식스제로250ML</h2>
                                <h3>1,500원</h3>
                                </aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/1+1상품_3.jpg"
                                    alt="동아)나랑드화이트콤부차400ML"
                                />
                                <aside>
                                <h2>동아)나랑드화이트콤부차400ML</h2>
                                <h3>2,500원</h3>
                                </aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/1+1상품_4.jpg"
                                    alt="에이스)모구키위젤리50G"
                                />
                                <aside>
                                <h2>에이스)모구키위젤리50G</h2>
                                <h3>1,800원</h3>
                                </aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/1+1상품_5.jpg"
                                    alt="온)히말라야핑크솔트바디워시"
                                />
                                <aside>
                                <h2>온)히말라야핑크솔트바디워시</h2>
                                <h3>12,900원</h3>
                                </aside>
                            </div>
                            </section>
                            <section class="mGrid">
                            <div>
                                <img
                                    src="../01.자료수집/2+1상품_1.jpg"
                                    alt="마포갈매기)불타는꼬리구이250G"
                                />
                                <aside>
                                <h2>마포갈매기)불타는꼬리구이250G</h2>
                                <h3>7,900원</h3>
                                </aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/2+1상품_2.jpg"
                                    alt="한성)비바크비센65G"
                                />
                                <aside>
                                <h2>한성)비바크비센65G</h2>
                                <h3>2,200원</h3>
                                </aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/2+1상품_3.jpg"
                                    alt="순수고구마(130G/진공포장)"
                                />
                                <aside>
                                <h2>순수고구마(130G/진공포장)</h2>
                                <h3>3,000원</h3>
                                </aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/2+1상품_4.jpg"
                                    alt="할리스)카페라떼300ML"
                                />
                                <aside>
                                <h2>할리스)카페라떼300ML</h2>
                                <h3>2,900원</h3>
                                </aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/2+1상품_5.jpg"
                                    alt="할리스)바닐라딜라이트300ML"
                                />
                                <aside>
                                <h2>할리스)바닐라딜라이트300ML</h2>
                                <h3>2,900원</h3>
                                </aside>
                            </div>
                            </section>
                            <section class="mGrid">
                            <div>
                                <img
                                    src="../01.자료수집/신상품_1.jpg"
                                    alt="브레디크)우유생크림빵"
                                />
                                <aside>
                                <h2>브레디크)우유생크림빵</h2>
                                <h3>2,800원</h3>
                                </aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/신상품_2.jpg"
                                    alt="브레디크)제주말차생크림빵"
                                />
                                <aside>
                                <h2>브레디크)제주말차생크림빵</h2>
                                <h3>3,200원</h3>
                                </aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/신상품_3.jpg"
                                    alt="브레디크)초코생크림빵"
                                />
                                <aside>
                                <h2>브레디크)초코생크림빵</h2>
                                <h3>2,800원</h3>
                                </aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/신상품_4.jpg"
                                    alt="브레디크)호두단팥생크림빵"
                                />
                                <aside>
                                <h2>브레디크)호두단팥생크림빵</h2>
                                <h3>3,000원</h3>
                                </aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/신상품_5.jpg"
                                    alt="머)크리스피아몬드50G(볶음양념)"
                                />
                                <aside>
                                <h2>머)크리스피아몬드50G(볶음양념)</h2>
                                <h3>3,000원</h3>
                                </aside>
                            </div>
                            </section>
                            <section class="mGrid">
                            <div>
                                <img
                                    src="../01.자료수집/인기상품_1.jpg"
                                    alt="롯데)스크류바"
                                />
                                <aside>
                                <h2>롯데)스크류바</h2>
                                <h3>1,200원</h3>
                                </aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/인기상품_2.jpg"
                                    alt="롯데)옥동자70ML"
                                />
                                <aside>
                                <h2>롯데)옥동자70ML</h2>
                                <h3>1,200원</h3>
                                </aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/인기상품_3.jpg"
                                    alt="롯데)왕수박바"
                                />
                                <aside>
                                <h2>롯데)왕수박바</h2>
                                <h3>1,200원</h3>
                                </aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/인기상품_4.jpg"
                                    alt="롯데)죠스바80ML"
                                />
                                <aside>
                                <h2>롯데)죠스바80ML</h2>
                                <h3>1,200원</h3>
                                </aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/인기상품_5.jpg"
                                    alt="롯데푸드)돼지바70ML"
                                />
                                <aside>
                                <h2>롯데푸드)돼지바70ML</h2>
                                <h3>1,200원</h3>
                                </aside>
                            </div>
                            </section>
                            <section class="mGrid">
                            <div>
                                <img
                                    src="../01.자료수집/차별화_1.jpg"
                                    alt="유어스)NEW비닐장우산블랙60CM"
                                />
                                <aside>
                                <h2>유어스)NEW비닐장우산블랙60CM</h2>
                                <h3>7,000원</h3>
                                </aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/차별화_2.jpg"
                                    alt="유어스)행운약과꿀바85ML"
                                />
                                <aside>
                                <h2>유어스)행운약과꿀바85ML</h2>
                                <h3>2,000원</h3>
                                </aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/차별화_3.jpg"
                                    alt="Y)팔도점보도시락(특대컵)"
                                />
                                <aside>
                                <h2>Y)팔도점보도시락(특대컵)</h2>
                                <h3>8,500원</h3>
                                </aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/차별화_4.jpg"
                                    alt="유어스)하늘가득한라봉330ML"
                                />
                                <aside>
                                <h2>유어스)하늘가득한라봉330ML</h2>
                                <h3>2,100원</h3>
                                </aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/차별화_5.jpg"
                                    alt="유어스(P)두끼치즈떡볶이(봉지)"
                                />
                                <aside>
                                <h2>유어스(P)두끼치즈떡볶이(봉지)</h2>
                                <h3>2,000원</h3>
                                </aside>
                            </div>
                            </section>
                        </div>
                    </div>
                {/* <!-- 2-4. 상품 검색영역 --> */}
                <div class="group-part group-part-04">
                    {/* <!-- 파트박스 2개 --> */}
                    <div class="partbox col-4">
                        <div class="psearchBarWrap">
                            <input
                                type="text"
                                id="psearchBar"
                                placeholder="원하는 상품을 검색해보세요."
                                maxlength="3"
                                onkeypress="if(event.keyCode==13) 
                                jsearchBar"
                                />
                            <div class="psearchIcon">
                                <img
                                    src="../01.자료수집/써치아이콘.png"
                                    alt="써치아이콘"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="partbox col-8">
                        <section class="grid">
                            <div>
                                <img
                                    src="../01.자료수집/도시락 아이콘.png"
                                    alt="도시락"
                                />
                                <aside>
                                    <h2>도시락</h2>
                                </aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/김밥.png"
                                    alt="김밥"
                                />
                                <aside><h2>김밥</h2></aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/샌드위치_아이콘2.png"
                                    alt="샌드위치"
                                />
                                <aside><h2>샌드위치</h2></aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/치킨_아이콘.png"
                                    alt="치킨"
                                />
                                <aside><h2>치킨</h2></aside>
                            </div>
                            <div>
                                <img src="../01.자료수집/라면.png" alt="라면" />
                                <aside><h2>라면</h2></aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/빵떡디저트.png"
                                    alt="디저트"
                                />
                                <aside><h2>빵·떡·디저트</h2></aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/스낵비스켓.png"
                                    alt="스낵"
                                />
                                <aside><h2>스낵·비스켓</h2></aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/젤리캔디껌.png"
                                    alt="젤리"
                                />
                                <aside><h2>젤리·캔디·껌</h2></aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/탄산음료.png"
                                    alt="탄산음료"
                                />
                                <aside><h2>탄산음료</h2></aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/과즙이온음료.png"
                                    alt="과즙이온음료"
                                />
                                <aside><h2>과즙이온음료</h2></aside>
                            </div>
                            <div>
                                <img src="../01.자료수집/커피.png" alt="커피" />
                                <aside><h2>커피</h2></aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/유제품.png"
                                    alt="유제품"
                                />
                                <aside><h2>유제품</h2></aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/아이스크림.png"
                                    alt="아이스크림"
                                />
                                <aside><h2>아이스크림</h2></aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/생활용품.png"
                                    alt="생활용품"
                                />
                                <aside><h2>생활용품</h2></aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/뷰티용품.png"
                                    alt="뷰티용품"
                                />
                                <aside><h2>뷰티용품</h2></aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/건강의료용품.png"
                                    alt="건강의료용품"
                                />
                                <aside><h2>건강의료용품</h2></aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/일회용품.png"
                                    alt="일회용품"
                                />
                                <aside><h2>일회용품</h2></aside>
                            </div>
                            <div>
                                <img
                                    src="../01.자료수집/반려용품.png"
                                    alt="반려용품"
                                />
                                <aside><h2>반려용품</h2></aside>
                            </div>
                        </section>
                    </div>
                </div>
                {/* <!-- 2-5. 소셜영역 --> */}
                <div class="group-part group-part-05">
                    {/* <!-- 파트박스 2개 --> */}
                    <div class="partbox col-6">
                        <div class="ytit">
                            <img src="../01.자료수집/이리오너라 누끼.png" alt="이리오너라 로고" />
                            <h3>2리5너라 Youtube</h3>
                        </div>
                        <div class="tv">
                            <div class="screen">
                                <iframe
                                    src="https://www.youtube.com/embed/cjH6sAgIb_k"
                                    id="mv"
                                    allow="autoplay"
                                ></iframe>
                            </div>
                            <div class="box-btn">
                                {/* <!-- 축소확대버튼 --> */}
                                <button onclick="바꿔('b892amUPu9Y')">
                                    <img src="https://i1.ytimg.com/vi/b892amUPu9Y/mqdefault.jpg" alt="디자이너 시청주의" />
                                </button>
                                <button onclick="바꿔('-TF847yT7Ps')">
                                    <img src="https://i1.ytimg.com/vi/-TF847yT7Ps/mqdefault.jpg" alt="신개념 소개팅" />
                                </button>
                                <button onclick="바꿔('uJhcE2JdFP4')">
                                    <img src="https://i1.ytimg.com/vi/uJhcE2JdFP4/mqdefault.jpg" alt="문돼의 피자" />
                                </button>
                                <button onclick="바꿔('xUX3sGsfTO8')">
                                    <img src="https://i1.ytimg.com/vi/xUX3sGsfTO8/mqdefault.jpg" alt="마츠다 부장이 알려주는 하이볼ㅎ" />
                                </button>
                            </div>
                            <div class="more">
                                <img src="../01.자료수집/gs25_youtube_logo.jpg" alt="gs25 유튜브 더보기" /> 
                                <h3>유튜브 더보기</h3>
                            </div>
                        </div>
                    </div>
                    <div class="partbox col-6">
                        <div class="instit">
                            <img src="../01.자료수집/인스타로고.png" alt="gs25 인스타로고" />
                            <h3>GS25 instagram</h3>
                        </div>
                        <div class="ins-banner">
                            <div class="slide-box">
                                {/* <!-- 슬라이드 --> */}
                                <ul class="slide">
                                    <li class="slide2">
                                        <ol>
                                            <li>
                                                <img
                                                src="../01.자료수집/인스타배너1.jpg"
                                                alt="인스타 배너1"/>
                                            </li>
                                        </ol>
                                        <ol>
                                            <li>
                                                <img
                                                src="../01.자료수집/인스타배너2.jpg"
                                                alt="인스타 배너2"/>
                                            </li>
                                        </ol>
                                    </li>
                                    <li class="slide2">
                                        <ol>
                                            <li>
                                                <img
                                                src="../01.자료수집/인스타배너3.jpg"
                                                alt="인스타 배너3"/>
                                            </li>
                                        </ol>
                                        <ol>
                                            <li>
                                                <img
                                                src="../01.자료수집/인스타배너4.jpg"
                                                alt="인스타 배너4"/>
                                            </li>
                                        </ol>
                                    </li>
                                    <li class="slide2">
                                        <ol>
                                            <li>
                                                <img
                                                src="../01.자료수집/인스타배너5.jpg"
                                                alt="인스타 배너5"/>
                                            </li>
                                        </ol>
                                        <ol>
                                            <li>
                                                <img
                                                src="../01.자료수집/인스타배너6.jpg"
                                                alt="인스타 배너6"/>
                                            </li>
                                        </ol>
                                    </li>
                                </ul>
                            </div>
                             {/* <!-- 이동버튼 --> */}
                             <a href="#" class="abtn ab1"><img src="../01.자료수집/화살표_왼쪽_아이콘.png" alt="왼쪽이동버튼" />
                             </a>
                             <a href="#" class="abtn ab2"><img src="../01.자료수집/화살표_오른쪽_아이콘.png" alt="오른쪽이동버튼" />
                             </a>
 
                             {/* <!-- 블릿버튼 --> */}
                             <ol class="indicate">
                                <li class="on">
                                    <img src="../01.자료수집/dot1.png" alt="dot1" />
                                    <img src="../01.자료수집/dot2.png" alt="dot2" />
                                </li>
                                <li>
                                    <img src="../01.자료수집/dot1.png" alt="dot1" />
                                    <img src="../01.자료수집/dot2.png" alt="dot2" />
                                </li>
                                <li>
                                    <img src="../01.자료수집/dot1.png" alt="dot1" />
                                    <img src="../01.자료수집/dot2.png" alt="dot2" />
                                </li>
                             </ol>
                        </div>
                        <div class="more2">
                            <img src="../01.자료수집/인스타아이콘.png" alt="gs25 인스타 더보기" /> 
                            <h3>인스타 더보기</h3>
                        </div>
                    </div>
                </div>
                {/* <!-- 2-6. 고객센터영역 --> */}
                <div class="group-part group-part-06">
                    {/* <!-- 파트박스 2개 --> */}
                    <div class="partbox col-6">
                        <div class="jsearchBarWrap">
                            <input
                                type="text"
                                id="jsearchBar"
                                placeholder="점포명 또는 00동을 입력해보세요."
                                maxlength="3"
                                onkeypress="if(event.keyCode==13) 
                                jsearchBar"
                                />
                            <div class="jsearchIcon">
                                <img
                                    src="../01.자료수집/써치아이콘.png"
                                    alt="써치아이콘"
                                />
                            </div>
                            <div class="jumpo">
                                <img
                                src="../01.자료수집/GS25점포이미지.png"
                                alt="점포 이미지"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="partbox col-6">
                        <div class="sct">
                            <h2>고객 상담센터</h2>
                            <div class="tellicon">
                                <img
                                    src="../01.자료수집/전화기_아이콘.png"
                                    alt="써치아이콘"
                                />
                            </div>
                            <h3>1644-5454</h3>
                            <h4>상담시간:평일(09:00~18:00)<br />
                                ※ 토,일요일 및 공휴일 휴무
                            </h4>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </>
  ) //////// 리턴함수 ///////////
} ////////// MainArea 컴포넌트 ///////