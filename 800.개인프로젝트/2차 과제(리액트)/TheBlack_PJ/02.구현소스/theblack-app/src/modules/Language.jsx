// TheBlck 햄버거 GNB 컴포넌트

import { useEffect,} from "react";

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

import "../css/common.css";

export function Language() {
    // 랜더링 후 실행구역 //////////
    useEffect(() => {
        // 햄버거 버튼 클릭시 전체 메뉴 보이기/숨기기
        $(".langicon").click((e) => {
            // 1. 전체메뉴 박스 : .mbox -> 보이기/숨기기
            $(".langbox").fadeToggle(300);

            // 2. 햄버거버튼에 클래스 'on' 넣기/빼기
            $(e.currentTarget).toggleClass("on");
            // e.target과 e.currentTarget은 다르다!
            // 후자가 햄버거 버튼 자신임!
            // console.log(e.currentTarget)
        }); ////////// click ///////////
    }, []); //////////// useEffect ///////////

    // 코드 리턴 /////////////
    return (
        <>
            <div className="langbox">
                <nav className="langlist">
                    <dl>
                        <dt>
                            KOR
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            ENG
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            JPN
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            CHI
                        </dt>
                    </dl>
                </nav>
            </div>
        </>
    );
} //////////// Language 컴포넌트 ////////////
