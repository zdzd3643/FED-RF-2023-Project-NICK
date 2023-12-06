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

export function ArtistsDetail(){

  // 앨범 페이지 컨텐츠 컴포넌트

  const selData = detailData;

  // makeList 함수 만들기 ///////
  const makeList = (data) => {
    // console.log(data);
  
    return data.map((v,i) => (
      <li key={i}>
        <div className="detail-container">
          <div className="detail-title">
          </div>
          <div className="detail-profile">
          </div>
          <div className="detail-cont">
            
          </div>   
        </div>
      </li>
    )) //////// map ////////////
  } /////////// makeList ///////////



  // 리턴코드 ////////////////  
  return(
    <section id="ats-Detail-area">
      <div className="detail-body">
      {makeList(selData)}
      </div>
    </section>
  );
} //////////// ArtistsDetail 컴포넌트 //////////////

export default ArtistsDetail;