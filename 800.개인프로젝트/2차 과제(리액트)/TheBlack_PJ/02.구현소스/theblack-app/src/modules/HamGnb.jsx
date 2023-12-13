// TheBlck 햄버거 GNB 컴포넌트

// Context API 불러오기
import { bCon } from "../modules/TbContext";
import { useEffect, useCallback, useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../css/common.css";

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

export function GnbHam() {
    // 랜더링 후 실행구역 //////////
    useEffect(() => {
        // 햄버거 버튼 클릭시 전체 메뉴 보이기/숨기기
        $(".TBham").click((e) => {
            // 1. 전체메뉴 박스 : .mbox -> 보이기/숨기기
            $(".gbox").fadeToggle(300);       

            // 2. 햄버거버튼에 클래스 'on' 넣기/빼기
            $(e.currentTarget).toggleClass("on");
            // e.target과 e.currentTarget은 다르다!
            // 후자가 햄버거 버튼 자신임!
            // console.log(e.currentTarget)
        }); ////////// click ///////////

    }, []); //////////// useEffect ///////////
    

    useLayoutEffect(() => {

        $(".glist a").click((e) => {
            $(".gbox").hide();
            $(".TBham").removeClass("on");
            });

    }); ///// useLayoutEffect //////////

    // 코드 리턴 /////////////
    return (
        <>
            <div className="gbox">
                <nav className="glist">
                    <dl>
                        <dt>
                            <div className="hbtn">
                            <Link to="/">HOME</Link>
                            </div>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <Link to="/IntroSub">INTRODUCE</Link>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <div className="ats_word">ARTIST</div>
                        </dt>
                        <dd>
                            <Link to="/TAEYANG">TAEYANG</Link>
                        </dd>
                        <dd>
                            <Link to="/JEONSOMI">JEON SOMI</Link>
                        </dd>
                        <dd>
                            <Link to="/ZionT">Zion.T</Link>
                        </dd>
                        <dd>
                            <Link to="/BryanChase">Bryan Chase</Link>
                        </dd>
                        <dd>
                            <Link to="/PARKBOGUM">PARK BOGUM</Link>
                        </dd>
                        <dd>
                            <Link to="/LEEJONGWON">LEE JONGWON</Link>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <Link to="/AlbumSub">VIDEOS</Link>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <Link to="/AuditionSub">AUDITION</Link>
                        </dt>
                    </dl>
                </nav>
            </div>
        </>
    );
} //////////// GnbHam 컴포넌트 ////////////
