// 스와이퍼 플러그인 컴포넌트

import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../plugin/css/swiper.css";

// 아티스트 데이터 불러오기
import { atsData } from "../data/ats_data";

// 스와이퍼 모듈 불러오기
import { Pagination, Navigation } from "swiper/modules";

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

export function SwiperApp(){

const selData = atsData;

// 리스트만들기 함수 ///////////
const makeList = (data) => {
  // console.log(data);
  return data.map((v, i) => (
    <SwiperSlide key={i}>
      {/* 프로필 이미지 */}
      <img 
      src={v.isrc} 
      alt={v.ats} 
      id="profile"/>
      {/* 프로필 정보 */}
      <div className="ptit">
        <h2>{v.itit}</h2>
      </div>
    </SwiperSlide>
  ));
}; ////////// makeList 함수 //////
// 리턴코드 /////////////
  return(
    <>
      <Swiper 
      slidesPerView={3}
      spaceBetween={700}
      pagination={{
        clickable: true,
      }}
      loop={true}
      navigation={true}
      // 사용 모듈 
      modules={[Pagination, Navigation]} 
      className="mySwiper">
      {makeList(selData)}
      </Swiper>
    </>
  );
} ////////// SwiperVid 컴포넌트 /////////////