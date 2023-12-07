// TAEYANG 상세 페이지 컨텐츠 컴포넌트

// 스와이퍼 앨범 플러그인 컴포넌트

import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"

import { Navigation } from 'swiper/modules';

// 스와이퍼 아티스트 CSS 불러오기
import "../plugin/css/swiper_ats.css"

// 상세 데이터 불러오기
import { detailData } from "../data/detail_data.js";

// 스와이퍼 앨범 css 불러오기
import "../plugin/css/swiper_alb.css"

// TAEYANG 상세 페이지 컨텐츠 컴포넌트
// 언어번역 

import '../func/i18n';
import i18next from "../func/i18n"
import { useTranslation } from "react-i18next";

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import { Language } from '../modules/Language.jsx';

export function BryanChase(){
  const { t } = useTranslation();

  const clickHandler = (e)=> {
    i18next.changeLanguage(e.target.value);
    e.preventDefault();
  }

  const selData = detailData;

  const makeList = (data) => {
    // console.log(data);
    return data.map((v, i) => (
            <div className='detail-container' key={i}>
                <div className="detail-title">
                  <h3>{v.ats4}</h3>
                </div>
                <div className="detail-profile">
                  <img src={v.isrc4} alt="프로필 이미지" />  
                </div>
                <div className="detail-cont">
                  <div className="detail-name">
                    <h2>{v.alt4}</h2>
                    <h3>{v.itit4}</h3>
                  </div>
                  <div className="detail-sns1">
                    <a href={v.insta4}
                      target='_blank'
                      title="인스타그램으로 이동">
                        <img src="./images/insta_img_white-remove.png" alt="인스타그램 이미지" />
                    </a>
                    <a href={v.youtube4}
                      target='_blank'
                      title="유튜브로 이동">
                        <img src="./images/youtube_img_white-remove.png" alt="유튜브 이미지" />
                    </a>
                    <a href={v.twitter4}
                      target='_blank'
                      title="트위터로 이동">
                      <img src="./images/twitter_img_white-remove.png" 
                      alt="트위터 이미지" />
                    </a>
                  </div>
                  <div className="detail-career">
                    <h2>ALBUM</h2>
                    <p>{t("2023 | Restart It(feat. Okasian)(Extended Ver.)")}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("2U")}</p> 
                    <br />
                    <h2>PERFORMANCE</h2>
                    <p>{t("2023 | 2023 제7회 대한민국 청년의 날 콘서트")}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("RAPBEAT 2023 - 과천")}</p>  
                    <br />
                  </div>
                  <div className="detail-gubun">
                    <hr />
                  </div>
                  <div className="detail-gallery">
                  <h2>GALLERY</h2>
                  </div>
                    <Swiper
                      loop={true}
                      slidesPerView={ 3 }
                      navigation={true}
                      modules={[Navigation]}
                      spaceBetween={50}
                      className='detail-swiper'>
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg41} alt="이미지1" />
                      </SwiperSlide >
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg42} alt="이미지2" />
                      </SwiperSlide>
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg43} alt="이미지3" />
                      </SwiperSlide>
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg44} alt="이미지4" />
                      </SwiperSlide>
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg45} alt="이미지5" />
                      </SwiperSlide>
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg46} alt="이미지6" />
                      </SwiperSlide>
                    </Swiper>
                    <div className="detail-gubun2">
                      <hr />  
                    </div>
                    <div className="detail-video">
                      <h2>VIDEOS</h2>
                    </div>
                    <div className="detail-video-cont">
                    <div className="detail-video-grid-first">
                    <a href={v.mlink2}
                        target='_blank'
                        title="유튜브로 이동"
                        className="video-youtube">
                        <img src={v.mv2} alt="비디오 이미지" />
                      </a>
                        <aside>
                        <h3>{v.mtit2}</h3>
                        </aside>
                      </div>
                          <div>
                      <a href={v.mlink6}
                        target='_blank'
                        title="유튜브로 이동"
                        className="video-youtube">
                        <img src={v.mv6} alt="비디오 이미지" />
                      </a>
                        <aside>
                        <h3>{v.mtit6}</h3>
                        </aside>
                      </div>
                      <div>
                      <a href={v.mlink7}
                        target='_blank'
                        title="유튜브로 이동"
                        className="video-youtube">
                        <img src={v.mv7} alt="비디오 이미지" />
                      </a>
                        <aside>
                        <h3>{v.mtit7}</h3>
                        </aside>
                      </div>
                    </div>      
                  </div>   
              </div>   
    ))
    } /////////// makeList 함수 ///////////

  // 리턴코드 ////////////////  
  return(
      <section id="ats-Detail-area4">
        <Language onChange={(e)=> clickHandler(e)} />
        {makeList(selData)}
      </section>
  );
} //////////// BryanChase 컴포넌트 //////////////

export default BryanChase;