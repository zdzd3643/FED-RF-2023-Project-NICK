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

export function ZionT(){
  const { t } = useTranslation();

  const selData = detailData;

  const makeList = (data) => {
    // console.log(data);
    return data.map((v, i) => (
            <div className='detail-container' key={i}>
                <div className="detail-title">
                  <h3>{t(v.ats3)}</h3>
                </div>
                <div className="ats-flex">
                <div className="detail-profile">
                  <img src={v.isrc3} alt="프로필 이미지" />  
                </div>
                <div className="detail-cont">
                  <div className="detail-name">
                    <h2>{t(v.alt3)}</h2>
                  </div>
                  <div className="detail-sns1">
                    <a href={v.insta3}
                      target='_blank'
                      title="인스타그램으로 이동">
                        <img src="./images/insta_img_white-remove.png" alt="인스타그램 이미지" />
                    </a>
                    <a href={v.youtube3}
                      target='_blank'
                      title="유튜브로 이동">
                        <img src="./images/youtube_img_white-remove.png" alt="유튜브 이미지" />
                    </a>
                    <a href={v.twitter3}
                      target='_blank'
                      title="트위터로 이동">
                      <img src="./images/twitter_img_white-remove.png" 
                      alt="트위터 이미지" />
                    </a>
                  </div>
                  <div className="detail-career">
                    <h2>{t("ALBUM")}</h2>
                    <p>{t("2023 | Zip")}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("WORLD STOP TURNING (Feat. Warren Hue)").split("^")[0]}</p> 
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("WORLD STOP TURNING (Feat. Warren Hue)").split("^")[1]}</p> 
                    <p>{t("2021 | 선물을 고르며")}</p>
                    <br />
                    <h2>{t("PERFORMANCE")}</h2>
                    <p>{t("2024 | 2024 메모리즈 - 자이언티＆원슈타인 - 수원").split("^")[0]}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("2024 | 2024 메모리즈 - 자이언티＆원슈타인 - 수원").split("^")[1]}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("우리금융그룹 '우리 모모콘'").split("^")[0]}</p> 
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("우리금융그룹 '우리 모모콘'").split("^")[1]}</p> 
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("피크타임페스티벌 - 천안").split("^")[0]}</p> 
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("피크타임페스티벌 - 천안").split("^")[1]}</p> 
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("RAPBEAT 2023 - 과천")}</p> 
                    <p>2023 |   {t("한탄강 지오 페스티벌 - 포천").split("^")[0]}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("한탄강 지오 페스티벌 - 포천").split("^")[1]}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("여름잠 뮤직페스티벌 - 춘천").split("^")[0]}</p>  
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("여름잠 뮤직페스티벌 - 춘천").split("^")[1]}</p>  
                    <br />
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
                        <img src={v.timg31} alt="이미지1" />
                      </SwiperSlide >
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg32} alt="이미지2" />
                      </SwiperSlide>
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg33} alt="이미지3" />
                      </SwiperSlide>
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg34} alt="이미지4" />
                      </SwiperSlide>
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg35} alt="이미지5" />
                      </SwiperSlide>
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg36} alt="이미지6" />
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
                    <a href={v.mlink1}
                        target='_blank'
                        title="유튜브로 이동"
                        className="video-youtube">
                        <img src={v.mv1} alt="비디오 이미지" />
                      </a>
                        <aside>
                        <h3>{t(v.mtit1).split("^")[0]}</h3>
                        <h3>{t(v.mtit1).split("^")[1]}</h3>
                        </aside>
                      </div>
                          <div>
                      <a href={v.mlink8}
                        target='_blank'
                        title="유튜브로 이동"
                        className="video-youtube">
                        <img src={v.mv8} alt="비디오 이미지" />
                      </a>
                        <aside>
                        <h3>{t(v.mtit8)}</h3>
                        </aside>
                      </div>
                      <div>
                      <a href={v.mlink14}
                        target='_blank'
                        title="유튜브로 이동"
                        className="video-youtube">
                        <img src={v.mv14} alt="비디오 이미지" />
                      </a>
                        <aside>
                        <h3>{t(v.mtit14)}</h3>
                        </aside>
                      </div>
                      <div>
                      <a href={v.mlink19}
                          target='_blank'
                          title="유튜브로 이동" 
                          className="video-youtube">
                        <img src={v.mv19} alt="비디오 이미지" />
                      </a>
                        <aside>
                        <h3>{t(v.mtit19).split("^")[0]}</h3>
                        <h3>{t(v.mtit19).split("^")[1]}</h3>
                        </aside>
                      </div>
                      <div>
                      <a href={v.mlink20}
                          target='_blank'
                          title="유튜브로 이동" 
                          className="video-youtube">
                        <img src={v.mv20} alt="비디오 이미지" />
                      </a>
                        <aside>
                        <h3>{t(v.mtit20).split("^")[0]}</h3>
                        <h3>{t(v.mtit20).split("^")[1]}</h3>
                        </aside>
                      </div>
                    </div>      
                  </div>   
             
    ))
    } /////////// makeList 함수 ///////////

  // 리턴코드 ////////////////  
  return(
      <section id="ats-Detail-area3">
        {makeList(selData)}
      </section>
  );
} //////////// ZionT 컴포넌트 //////////////

export default ZionT;