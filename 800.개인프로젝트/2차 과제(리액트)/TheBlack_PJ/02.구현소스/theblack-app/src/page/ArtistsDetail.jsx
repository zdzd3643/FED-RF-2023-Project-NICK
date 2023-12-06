// 아티스트 상세 페이지 컨텐츠 컴포넌트

// 스와이퍼 앨범 플러그인 컴포넌트

import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

// 스와이퍼 아티스트 CSS 불러오기
import "../plugin/css/swiper_ats.css"

// 앨범 데이터 불러오기
import { detailData } from "../data/detail_data.js";

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import { useLocation } from 'react-router-dom';

export function ArtistsDetail(){
  // 라우터 호출시 전달한 값을 받는다!
  // 라우터 전달값을 받기위해 useLocation 생성하기
  // const loc = useLocation();
  
  // 구체적으로 state속성 하위 전달된 객체속성명으로 받는다!
  // 1. 아티스트 이름
  // const ats = loc.state.ats;
  // 2. 아티스트 설명 = 



  // 앨범 페이지 컨텐츠 컴포넌트

  const selData = detailData;


  // 리턴코드 ////////////////  
  return(
    <>
    <section id="ats-Detail-area">
    {
      selData.map((v,i) => (
        <section className='detail-container' key={i}>
          <div className="detail-title">
            <h3>{v.ats}</h3>
          </div>
          <div className="detail-profile">
            
          </div>
          <div className="detail-cont">
            
          </div>   
        </section>
    ))
    }
    </section>
    </>
  );
} //////////// ArtistsDetail 컴포넌트 //////////////

export default ArtistsDetail;