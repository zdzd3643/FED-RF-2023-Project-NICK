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

// 언어번역 

import '../func/i18n';
import i18next from "../func/i18n"
import { useTranslation } from "react-i18next";

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

export function TAEYANG(){
  const { t } = useTranslation();

  const selData = detailData;

  const makeList = (data) => {
    // console.log(data);
    return data.map((v, i) => (
      <div className='detail-container' key={i}> 
        <div className="detail-title">
          <h3>{t(v.ats1)}</h3>
        </div>
              <div className="ats-flex">
                  <div className="detail-profile">
                    <img src={v.isrc1} alt="프로필 이미지" />
                  </div>
                  <div className="detail-cont">
                    <div className="detail-name">
                      <h2>{t(v.alt1)}</h2>
                    </div>
                    <div className="detail-sns1">
                      <a href={v.insta1}
                        target='_blank'
                        title="인스타그램으로 이동">
                          <img src="./images/insta_img_white-remove.png" alt="인스타그램 이미지" />
                      </a>
                      <a href={v.youtube1}
                        target='_blank'
                        title="유튜브로 이동">
                          <img src="./images/youtube_img_white-remove.png" alt="유튜브 이미지" />
                      </a>
                      <a href={v.twitter1}
                        target='_blank'
                        title="트위터로 이동">
                        <img src="./images/twitter_img_white-remove.png"
                        alt="트위터 이미지" />
                      </a>
                    </div>
                    <div className="detail-career">
                      <h2>{t("ALBUM")}</h2>
                      <p>{t("2023 | Down to Earth")}</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("VIBE(feat.Jimin of BTS)")}</p>
                      <p>{t("2022 | 봄여름가을겨울")}</p>
                      <br />
                      <h2>{t("PERFORMANCE")}</h2>
                      <p>{t("2023 | Rapbeat Festival")}</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("SUMMER SONIC (도쿄&오사카, 일본)").split("^")[0]}</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("SUMMER SONIC (도쿄&오사카, 일본)").split("^")[1]}</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("Seen Festival(베트남)")}</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("SO WONDERFUL FESTIVAL")}</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("서울 재즈페스티벌")}</p>
                      <br />
                      <h2>{t("ADVERTISING")}</h2>
                      <p>{t("2023 | 지방시")}</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("버드와이저")}</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("룰루레몬")}</p>
                    </div>
                </div>
              </div>
                  <div className="detail-gubun">
                    <hr />
                  </div>
                  <div className="detail-gallery">
                  <h2>{t("GALLERY")}</h2>
                  </div>
                    <Swiper
                      loop={true}
                      breakpoints={{
                        530:{
                          slidesPerView:3,
                          spaceBetween:30
                        },
                        300:{
                          slidesPerView:2,
                          spaceBetween:50
                        },
                      }}
                      navigation={true}
                      modules={[Navigation]}
                      spaceBetween={50}
                      className='detail-swiper'>
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg11} alt="이미지1" />
                      </SwiperSlide >
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg12} alt="이미지2" />
                      </SwiperSlide>
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg13} alt="이미지3" />
                      </SwiperSlide>
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg14} alt="이미지4" />
                      </SwiperSlide>
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg15} alt="이미지5" />
                      </SwiperSlide>
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg16} alt="이미지6" />
                      </SwiperSlide>
                    </Swiper>
                    <div className="detail-gubun2">
                      <hr />  
                    </div>
                    <div className="detail-video">
                      <h2>{t("VIDEOS")}</h2>
                    </div>
                    <div className="detail-video-cont">
                    <div className="detail-video-grid-first">
                      <a href={v.mlink9}
                        target='_blank'
                        title="유튜브로 이동"
                        className="video-youtube">
                        <img src={v.mv9} alt="비디오 이미지" />
                      </a>
                        <aside>
                        <h3>{t(v.mtit9).split("^")[0]}</h3>
                        <h3>{t(v.mtit9).split("^")[1]}</h3>
                        <h3>{t(v.mtit9).split("^")[2]}</h3>
                        </aside>
                      </div>
                          <div>
                      <a href={v.mlink10}
                        target='_blank'
                        title="유튜브로 이동"
                        className="video-youtube">
                        <img src={v.mv10} alt="비디오 이미지" />
                      </a>
                        <aside>
                        <h3>{t(v.mtit10)}</h3>
                        </aside>
                      </div>
                      <div>
                      <a href={v.mlink11}
                        target='_blank'
                        title="유튜브로 이동"
                        className="video-youtube">
                        <img src={v.mv11} alt="비디오 이미지" />
                      </a>
                        <aside>
                        <h3>{t(v.mtit11)}</h3>
                        </aside>
                      </div>
                    </div>      
              </div> 
    ))
    } /////////// makeList 함수 ///////////

  // 리턴코드 ////////////////  
  return(
      <section id="ats-Detail-area1">
        {makeList(selData)}
      </section>
  );
} //////////// TAEYANG 컴포넌트 //////////////

export default TAEYANG;