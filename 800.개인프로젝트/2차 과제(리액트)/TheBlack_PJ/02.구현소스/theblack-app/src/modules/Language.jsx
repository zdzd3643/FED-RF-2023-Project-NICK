// TheBlck 햄버거 GNB 컴포넌트

import React, {useEffect, } from 'react'

// 언어번역 
import '../func/i18n';
import i18next from "../func/i18n"

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

import "../css/common.css";

export function Language(){
    const clickHandler = (e)=> {
    i18next.changeLanguage(e.target.value)}

    // 랜더링 후 실행구역 //////////
    useEffect(() => {
    // 햄버거 버튼 클릭시 전체 메뉴 보이기/숨기기
    $(".langicon").click((e) => {
        $(".lang_container").slideDown(300);
        $(e.currentTarget).fadeOut(300);

    }); ////////// click ///////////

    // Close 버튼 클릭시 아티스트 내용창 닫기
    $(".lang_cbtn").click((e) => {
        $('.langicon').fadeIn(300);
        $(".lang_container").slideUp(300);
    
  }); /////////// click ////////////

    }, []); //////////// useEffect ///////////

    // 코드 리턴 /////////////
    return (
        <div className="lang_container">
            <select 
            className="langbox"
            onChange={(e)=> clickHandler(e)}>
            <option value='ko'>KOR</option>
            <option value='en'>ENG</option>
            <option value='ja'>JPN</option>
            <option value='ch'>CHI</option>
            </select>
            <div className="lang_cbtn">
                <img src="./images/xmark-solid.png" alt="클로즈 버튼" />
            </div>
        </div>
    );
} //////////// Language 컴포넌트 ////////////
