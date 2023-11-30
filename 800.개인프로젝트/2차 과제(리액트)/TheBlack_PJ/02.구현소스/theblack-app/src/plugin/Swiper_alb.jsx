// 스와이퍼 앨범 플러그인 컴포넌트

import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

// 스와이퍼 앨범 css 불러오기
import "../plugin/css/swiper_alb.css"

import { EffectCoverflow, Pagination, } from 'swiper/modules';

// 아티스트 데이터 불러오기
import { albData } from "../data/alb_data";

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

export function Swiper_alb(){

const selData = albData;

// 리스트만들기 함수 ///////////
const makeList = (data) => {
  // console.log(data);
  return data.map((v, i) => (
    <SwiperSlide key={i}>
      {/* 앨범 이미지 */}
      <img 
      src={v.asrc} 
      alt={v.album} 
      id="album"/>
      {/* 앨범 정보 */}
      <div className="atit">
        <h2>{v.atit}</h2>
      </div>
    </SwiperSlide>
  ));
}; ////////// makeList 함수 //////
// 리턴코드 /////////////
  return(
    <>
      <div className="alb-title">
        <h3>NEW</h3>
        <h3>RELEASE</h3>
      </div>
      <Swiper 
      effect={ 'coverflow' }
      grabCursor={ true }
      loop={true}
      centeredSlides={true}
      slidesPerView={ 'auto' }
      coverflowEffect={{
        rotate:15,
        stretch: 0,
        depth: 200,
        modifier: 2,
        slideShadows:true
      }}
      pagination={true}
      modules={[EffectCoverflow,Pagination]}
      className="alb_swiper">
      {makeList(selData)}
      </Swiper>
    </>
  );
} ////////// SwiperVid 컴포넌트 /////////////