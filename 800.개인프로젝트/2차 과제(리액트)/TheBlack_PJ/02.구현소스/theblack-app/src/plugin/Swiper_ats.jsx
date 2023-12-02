// 스와이퍼 아티스트 플러그인 컴포넌트

import React, { useEffect, useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-cards';

// 카드이펙트 불러오기
// import "../func/cardEffect.js";

// 아티스트 CSS 불러오기
import "../plugin/css/swiper_ats.css";

// 아티스트 데이터 불러오기
import { atsData } from "../data/ats_data";

// 스와이퍼 모듈 불러오기
import { EffectCards } from "swiper/modules";

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";




///// 컴포넌트 ////////////////
export function Swiper_ats(){

const selData = atsData;

  // 랜더링 후 실행구역 ////////////
  useEffect(()=>{

  // Read More 버튼 클릭시 아티스트 내용창 뜨기
  $('.ats_Rbtn').click(e=>{
    $(e.currentTarget).parents('.cont-bx').addClass('on');
    
    // Read More 버튼 클릭시 클로즈 버튼 보이기
    $('.ats_Rbtn').fadeToggle(400);
    $('.ats_Cbtn').fadeToggle(400);
    
  }); /////////// click ////////////
  
  // Read More 버튼 클릭시 아티스트 내용창 뜨기
  $('.ats_Cbtn').click(e=>{
    $(e.currentTarget).parents().removeClass('on');
    
    // Close 버튼 클릭시 클로즈 버튼 숨기기
    $('.ats_Rbtn').fadeToggle(400);
    $('.ats_Cbtn').fadeToggle(400);
    
  }); /////////// click ////////////

},[]); ///////// useEffect ///////// 



// 리스트만들기 함수 ///////////
const makeList = (data) => {
  // console.log(data);
  return data.map((v, i) => (
    <SwiperSlide key={i}>
      {/* 프로필 이미지 */}
      <div className="cont-bx">
        <div className="intro-bx">
          <img
          src={v.isrc}
          alt={v.ats}
          id="profile"/>
          {/* 프로필 정보 */}
          <div className="ptit">
            <h2>{v.itit}</h2>
          </div>
            <button className="ats_Rbtn">
              Read More
            </button>
            <button className="ats_Cbtn">
              Close
            </button>
        </div>
        <div className="desc-bx"></div>
      </div>
    </SwiperSlide>
  ));
}; ////////// makeList 함수 //////
// 리턴코드 /////////////
  return(
    <>
      <div className="ats-title">
        <h3>ARTISTS</h3>
      </div>
      <Swiper 
      effect={'cards'}
      grabCursor={true}
      loop={true}
      cardsEffect={{
        rotate:0,
        depth: 100,
        modifier: 1,
        slideShadows:true
      }}
      // 사용 모듈 
      modules={[ EffectCards ]} 
      className="ats_swiper">
      {makeList(selData)}
      </Swiper>
    </>
  );
} ////////// SwiperVid 컴포넌트 /////////////