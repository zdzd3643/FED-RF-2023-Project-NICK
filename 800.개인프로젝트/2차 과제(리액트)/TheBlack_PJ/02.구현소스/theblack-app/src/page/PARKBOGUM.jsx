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

export function PARKBOGUM(){
  const { t } = useTranslation();

  const selData = detailData;

  const makeList = (data) => {
    // console.log(data);
    return data.map((v, i) => (
            <div className='detail-container' key={i}>
                <div className="detail-title">
                  <h3>{t(v.ats5)}</h3>
                </div>
                <div className="ats-flex">
                <div className="detail-profile">
                  <img src={v.isrc5} alt="프로필 이미지" />  
                </div>
                <div className="detail-cont">
                  <div className="detail-name">
                    <h2>{t(v.alt5)}</h2>
                  </div>
                  <div className="detail-sns1">
                    <a href={v.insta5}
                      target='_blank'
                      title="인스타그램으로 이동">
                        <img src="./images/insta_img_white-remove.png" alt="인스타그램 이미지" />
                    </a>
                    <a href={v.youtube5}
                      target='_blank'
                      title="유튜브로 이동">
                        <img src="./images/youtube_img_white-remove.png" alt="유튜브 이미지" />
                    </a>
                    <a href={v.twitter5}
                      target='_blank'
                      title="트위터로 이동">
                      <img src="./images/twitter_img_white-remove.png" 
                      alt="트위터 이미지" />
                    </a>
                  </div>
                  <div className="detail-career">
                    <h2>{t("DRAMA")}</h2>
                    <p>{t("2024 | Nexflix 폭싹 속았수다")}</p>
                    <p>{t("2020 | tvN 청춘기록")}</p>
                    <p>{t("2018 | tvN 남자친구")}</p>
                    <br />
                    <h2>{t("MOVIE")}</h2>
                    <p>{t("2021 | 서복")}</p>
                    <p>{t("2020 | 원더랜드")}</p>
                    <br />
                    <h2>{t("ADVERTISING")}</h2>
                    <p>{t("2023 | 로레알")}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("에이스침대")}</p> 
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("아이더")}</p> 
                  </div>
                  </div>
                  </div>
                  <div className="detail-gubun">
                    <hr />
                  </div>
                  <div className="detail-gallery">
                  <h2>GALLERY</h2>
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
                        <img src={v.timg51} alt="이미지1" />
                      </SwiperSlide >
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg52} alt="이미지2" />
                      </SwiperSlide>
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg53} alt="이미지3" />
                      </SwiperSlide>
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg54} alt="이미지4" />
                      </SwiperSlide>
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg55} alt="이미지5" />
                      </SwiperSlide>
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg56} alt="이미지6" />
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
                      <a href={v.mlink21}
                        target='_blank'
                        title="유튜브로 이동"
                        className="video-youtube">
                        <img src={v.mv21} alt="비디오 이미지" />
                      </a>
                        <aside>
                        <h3>{t(v.mtit21).split("^")[0]}</h3>
                        <h3>{t(v.mtit21).split("^")[1]}</h3>
                        </aside>
                      </div>
                          <div>
                      <a href={v.mlink22}
                        target='_blank'
                        title="유튜브로 이동"
                        className="video-youtube">
                        <img src={v.mv22} alt="비디오 이미지" />
                      </a>
                        <aside>
                        <h3>{t(v.mtit22)}</h3>
                        </aside>
                      </div>
                      <div>
                      <a href={v.mlink23}
                        target='_blank'
                        title="유튜브로 이동"
                        className="video-youtube">
                        <img src={v.mv23} alt="비디오 이미지" />
                      </a>
                        <aside>
                        <h3>{t(v.mtit23).split("^")[0]}</h3>
                        <h3>{t(v.mtit23).split("^")[1]}</h3>
                        </aside>
                      </div>
                      <div>
                      <a href={v.mlink24}
                        target='_blank'
                        title="유튜브로 이동"
                        className="video-youtube">
                        <img src={v.mv24} alt="비디오 이미지" />
                      </a>
                        <aside>
                        <h3>{t(v.mtit24).split("^")[0]}</h3>
                        <h3>{t(v.mtit24).split("^")[1]}</h3>
                        <h3>{t(v.mtit24).split("^")[2]}</h3>
                        </aside>
                      </div>
                    </div>      
                </div>   
    ))
    } /////////// makeList 함수 ///////////

  // 리턴코드 ////////////////  
  return(
      <section id="ats-Detail-area5">
        {makeList(selData)}
      </section>
  );
} //////////// PARKBOGUM 컴포넌트 //////////////

export default PARKBOGUM;