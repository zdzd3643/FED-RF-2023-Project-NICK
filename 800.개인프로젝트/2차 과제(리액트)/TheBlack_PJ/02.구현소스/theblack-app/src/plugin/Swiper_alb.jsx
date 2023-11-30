// 스와이퍼 앨범 플러그인 컴포넌트

import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

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
      {/* 프로필 이미지 */}
      <img 
      src={v.asrc} 
      alt={v.album} 
      id="profile"/>
      {/* 프로필 정보 */}
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
      centeredSlides={ true }
      loop={true}
      slidesPerView={ 'auto' }
      coverflowEffect={{
        rotate:0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{el:'.swiper-pagination',clickable:true}}
      navigation={{
        nextEl:'swiper-button-next',
        prevEl:'swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow,Pagination,Navigation]}
      className="swiper_container">
      {makeList(selData)}
      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>
      </Swiper>
    </>
  );
} ////////// SwiperVid 컴포넌트 /////////////