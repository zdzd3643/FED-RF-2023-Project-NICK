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

// 앨범 데이터 불러오기
import { videoData } from "../data/video_data.js";

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// 앨범 페이지 컨텐츠 컴포넌트

const selData = videoData;

// makeList 함수 만들기 ///////
const makeList = (data) => {
  // console.log(data);

  return data.map((v,i) => (

    <section className="video-cont">
      <div className="video-cont-sub1">
        <img src={v.mv1} alt="비디오 이미지" />
        <img src={v.mv2} alt="비디오 이미지" />
      </div>
      <div className="video-cont-sub2">
        <img src={v.mv3} alt="비디오 이미지" />
        <img src={v.mv4} alt="비디오 이미지" />
      </div>
      <div className="video-cont-sub3">
        <img src={v.mv5} alt="비디오 이미지" />
        <img src={v.mv6} alt="비디오 이미지" />
      </div>
      <div className="video-cont-sub4">
        <img src={v.mv7} alt="비디오 이미지" />
        <img src={v.mv8} alt="비디오 이미지" />
      </div>
      <div className="video-cont-sub5">
        <img src={v.mv9} alt="비디오 이미지" />
        <img src={v.mv10} alt="비디오 이미지" />
      </div>
      <div className="video-cont-sub6">
        <img src={v.mv11} alt="비디오 이미지" />
        <img src={v.mv12} alt="비디오 이미지" />
      </div>
      <div className="video-cont-sub7">
        <img src={v.mv13} alt="비디오 이미지" />
        <img src={v.mv14} alt="비디오 이미지" />
      </div>
      <div className="video-cont-sub8">
        <img src={v.mv15} alt="비디오 이미지" />
        <img src={v.mv16} alt="비디오 이미지" />
      </div>
      <div className="video-cont-sub9">
        <img src={v.mv17} alt="비디오 이미지" />
        <img src={v.mv18} alt="비디오 이미지" />
      </div>
      <div className="video-cont-sub10">
        <img src={v.mv19} alt="비디오 이미지" />
        <img src={v.mv20} alt="비디오 이미지" />
      </div>
    </section>

  )); ////////// data ////////
} ///////// makeList /////////

export function AlbumSub(){

  // 리턴코드 ////////////////
  return(
    <section id="alb-Sub-area">
      <div className="aud-title">
        <h3>VIDEOS</h3>
      </div>
      <div className="video-body">
      {makeList(selData)}
      </div>
    </section>
  );
} //////////// AlbumSub 컴포넌트 //////////////