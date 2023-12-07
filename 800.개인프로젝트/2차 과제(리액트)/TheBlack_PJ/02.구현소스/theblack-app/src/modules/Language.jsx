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
        $(".langbox").slideDown(300);
        $(e.currentTarget).fadeOut(300);

    }); ////////// click ///////////

    // Close 버튼 클릭시 아티스트 내용창 닫기
    $('.lang_cbtn').click((e)=>{
        $(".langbox").slideUp(300);
        $('.langicon').fadeIn(300);
    
  }); /////////// click ////////////

    }, []); //////////// useEffect ///////////

    // 코드 리턴 /////////////
    return (
        <>
            <select className="langbox">
                {/* <nav className="langlist">
                    <dl>
                        <dt>
                            <option value='ko'>KOR</option>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                        <option value='en'>ENG</option>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                        <option value='ja'>JPN</option>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                        <option value='ch'>CHI</option>
                        </dt>
                    </dl>
                </nav> */}
                    <option value='ko'>KOR</option>
                    <option value='en'>ENG</option>
                    <option value='ja'>JPN</option>
                    <option value='ch'>CHI</option>
                <div className="lang_cbtn">
                    <img src="./images/xmark-solid.png" alt="닫기버튼" />
                </div>
            </select>
        </>
    );
} //////////// Language 컴포넌트 ////////////
