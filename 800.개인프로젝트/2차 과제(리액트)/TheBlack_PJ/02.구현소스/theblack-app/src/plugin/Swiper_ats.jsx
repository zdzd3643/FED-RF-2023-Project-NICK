// 스와이퍼 아티스트 플러그인 컴포넌트

import React, { useEffect, useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// 카드이펙트 불러오기
// import "../func/cardEffect.js";

// 아티스트 CSS 불러오기
import "../plugin/css/swiper_ats.css";

// 아티스트 데이터 불러오기
import { atsData } from "../data/ats_data";

// 스와이퍼 모듈 불러오기
import { EffectCards, Pagination, Navigation, EffectFlip } from "swiper/modules";

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import { Link } from 'react-router-dom';

// 언어번역 

import '../func/i18n';
import { useTranslation } from "react-i18next";

///// 컴포넌트 ////////////////
export function Swiper_ats(){
const { t } = useTranslation();
const [activeCard, setActiveCard] = useState(false);

const handleFilp = () => {
  setActiveCard(!activeCard)
}

const swRef = useRef(null);

const selData = atsData;

  // 랜더링 후 실행구역 ////////////
  useEffect(()=>{
    
      // Read More 버튼 클릭시 아티스트 내용창 열기
    $('.ats_Rbtn').click(e=>{
      $(e.currentTarget).parents('.cont-bx').addClass('on');
      
      // Read More 버튼 클릭시 클로즈 버튼 보이기
      $('.ats_Rbtn').fadeOut(400);
      $('.ats_Cbtn').fadeIn(400);
      
      swRef.current.swiper.disable();

  }); /////////// click ////////////

    // Close 버튼 클릭시 아티스트 내용창 닫기
    $('.ats_Cbtn').click(e=>{
      $(e.currentTarget).parents('.cont-bx').removeClass('on');
  
      // Close 버튼 클릭시 클로즈 버튼 숨기기
      $('.ats_Rbtn').fadeIn(400);
      $('.ats_Cbtn').fadeOut(400);
      
      swRef.current.swiper.enable();
      
    }); /////////// click ////////////

    // Close 버튼 클릭시 아티스트 내용창 닫기
    $('.xbtn').click(e=>{
      $(e.currentTarget).parents('.cont-bx').removeClass('on');
  
      // Close 버튼 클릭시 클로즈 버튼 숨기기
      $('.ats_Rbtn').fadeIn(400);
      $('.ats_Cbtn').fadeOut(400);
      
      swRef.current.swiper.enable();
      
    }); /////////// click ////////////

    // Close 버튼 클릭시 아티스트 내용창 닫기
    $('.ats_Fbtn').click(e=>{
  
      // Close 버튼 클릭시 클로즈 버튼 숨기기
      $('.ats_Rbtn').fadeOut(400);
      
      swRef.current.swiper.disable();
      
    }); /////////// click ////////////

    $('.xbtn1').click(e=>{
      
      swRef.current.swiper.enable();
      
    }); /////////// click ////////////
      
  },[]); ///////// useEffect /////////
   

// 리스트만들기 함수 ///////////
const makeList = (data) => {
  // console.log(data);

  return data.map((v,i) => (
    <SwiperSlide key={i}>
      {/* 프로필 이미지 */}
        <div 
        className={`cont-bx ${activeCard? 'cardFlip':''}`}>
          <div className="intro-bx">
            <img
            src={v.isrc}
            alt={v.ats}
            id="profile"/>
            {/* 프로필 정보 */}
            <div className="ptit">
              <h2>{t(v.itit)}</h2>
            </div>
              <button 
              onClick={handleFilp}
              className={"ats_Fbtn"}>
                Flip
              </button>
              <button className={"ats_Rbtn"}>
                Read More
              </button>
              <button className="ats_Cbtn">
                Close
              </button>
          </div>
          <div className="desc-bx">
            <h2>{t("ABOUT")}</h2>
            <h3>{t(v.dcont)}</h3>
            <div
            className="xbtn">
              <img src="./images/xmark-solid.png" alt="x버튼" />
            </div>
            <div
            onClick={handleFilp}  
            className="xbtn1">
              <img src="./images/xmark-solid.png" alt="x버튼" />
            </div>
            <div className="sns">
              <a href={v.insta}
              target='_blank'
              title="인스타그램으로 이동"
              className="instagram">
                <img src="./images/instagram.png" alt="인스타그램 이미지" />
              </a>
              <a href={v.youtube}
              target='_blank'
              title="유튜브로 이동"
              className="youtube">
                <img src="./images/youtube.png" alt="유튜브 이미지" />
              </a>
              <a href={v.twitter}
              target='_blank'
              title="트위터로 이동"
              className="twitter">
              <img src="./images/twitter.png"
              alt="트위터 이미지" />
              </a>
            </div>
            <button className="ats-more1">
              <Link to={v.link}>Detail More</Link>
            </button>
              <Swiper
              loop={true}
              pagination={{
                type:'fraction',
              }}
              breakpoints={{
                1380: {
                  slidesPerView:3,
                  spaceBetween:10
                },
                1379: {
                  spaceBetween:1,
                  slidesPerView:2
                }
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className='img_swiper'>
                <SwiperSlide>
                  <a href={v.cont1}
                  target='_blank'
                  title='페이지로 이동'
                  className='ats_cont'>
                    <img src={v.timg1} alt="이미지1" />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href={v.cont2}
                  target='_blank'
                  title='페이지로 이동'
                  className='ats_cont'>
                    <img src={v.timg2} alt="이미지1" />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href={v.cont3}
                  target='_blank'
                  title='페이지로 이동'
                  className='ats_cont'>
                    <img src={v.timg3} alt="이미지1" />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a href={v.cont4}
                  target='_blank'
                  title='페이지로 이동'
                  className='ats_cont'>
                    <img src={v.timg4} alt="이미지1" />
                  </a>
                </SwiperSlide>
              </Swiper>
            </div>
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
      ref={swRef}
      effect='cards'
      modules={[EffectCards, EffectFlip]}
      grabCursor={true}
      loop={true}
      cardsEffect={{
        rotate:0,
        depth: 100,
        modifier: 1,
        slideShadows:false,
        loopAdditionalSlides : 1,
      }}
      // onClick={(swiper) => {
      //   swiper.allowTouchMove = false;
      //   swiper.unsetGrabCursor();
      // }}
      // onSlideChange={(swiper) => {
      //   swiper.allowTouchMove = true;
      // }}
      // 사용 모듈 
      className="ats_swiper">
      {makeList(selData)}
      </Swiper>
    </>
  );
} ////////// SwiperVid 컴포넌트 /////////////