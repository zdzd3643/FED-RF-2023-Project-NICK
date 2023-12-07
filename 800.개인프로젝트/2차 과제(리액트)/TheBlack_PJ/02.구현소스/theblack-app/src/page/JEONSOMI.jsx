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
import { Language } from '../modules/Language.jsx';

export function JEONSOMI(){
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
                  <h3>{v.ats2}</h3>
                </div>
                <div className="detail-profile">
                  <img src={v.isrc2} alt="프로필 이미지" />  
                </div>
                <div className="detail-cont">
                  <div className="detail-name">
                    <h2>{v.alt2}</h2>
                    <h3>{v.itit2}</h3>
                  </div>
                  <div className="detail-sns">
                    <a href={v.insta2}
                      target='_blank'
                      title="인스타그램으로 이동">
                        <img src="./images/insta_img_white-remove.png" alt="인스타그램 이미지" />
                    </a>
                    <a href={v.youtube2}
                      target='_blank'
                      title="유튜브로 이동">
                        <img src="./images/youtube_img_white-remove.png" alt="유튜브 이미지" />
                    </a>
                    <a href={v.twitter2}
                      target='_blank'
                      title="트위터로 이동">
                      <img src="./images/twitter_img_white-remove.png" 
                      alt="트위터 이미지" />
                    </a>
                  </div>
                  <div className="detail-career">
                    <h2>ALBUM</h2>
                    <p>{t("2023 | GAME PLAN")}</p>
                    <p>{t("2021 | XOXO")}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("DUMB DUMB")}</p>
                    <br />
                    <h2>PERFORMANCE</h2>
                    <p>{t("2023 | Kpop Overpass 뮤직 콘서트")}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("SO WONDERFUL FESTIVAL")}</p> 
                    <p>{t("2022 | MAMA AWARDS")}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("MOKKOJI 콘서트")}</p> 
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("KAMP 콘서트")}</p> 
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("LALAPA K 콘서트")}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("36회 골든디스크 어워즈")}</p>  
                    <br />
                    <h2>ADVERTISING</h2>
                    <p>{t("2023 | 노스페이스")}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("PRADA")}</p> 
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("라코스테")}</p> 
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("컨버스")}</p> 
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("삼성 갤럭시")}</p> 
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
                        <img src={v.timg21} alt="이미지1" />
                      </SwiperSlide >
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg22} alt="이미지2" />
                      </SwiperSlide>
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg23} alt="이미지3" />
                      </SwiperSlide>
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg24} alt="이미지4" />
                      </SwiperSlide>
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg25} alt="이미지5" />
                      </SwiperSlide>
                      <SwiperSlide className='detail-slide'>
                        <img src={v.timg26} alt="이미지6" />
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
                    <a href={v.mlink3}
                      target='_blank'
                      title="유튜브로 이동" 
                      className="video-youtube">
                      <img src={v.mv3} alt="비디오 이미지" />
                    </a>
                    <aside>
                    <h3>{v.mtit3}</h3>
                    </aside>
                    </div>
                    <div>
                <a href={v.mlink4}
                    target='_blank'
                    title="유튜브로 이동" 
                    className="video-youtube">
                  <img src={v.mv4} alt="비디오 이미지" />
                </a>
                  <aside>
                  <h3>{v.mtit4}</h3>
                  </aside>
                </div>
                <div>
                <a href={v.mlink5}
                    target='_blank'
                    title="유튜브로 이동" 
                    className="video-youtube">
                  <img src={v.mv5} alt="비디오 이미지" />
                </a>
                  <aside>
                  <h3>{v.mtit5}</h3>
                  </aside>
                </div>
                <div>
        <a href={v.mlink12}
            target='_blank'
            title="유튜브로 이동" 
            className="video-youtube">
          <img src={v.mv12} alt="비디오 이미지" />
        </a>
          <aside>
          <h3>{v.mtit12}</h3>
          </aside>
        </div>
        <div>
        <a href={v.mlink13}
            target='_blank'
            title="유튜브로 이동" 
            className="video-youtube">
          <img src={v.mv13} alt="비디오 이미지" />
        </a>
          <aside>
          <h3>{v.mtit13}</h3>
          </aside>
        </div>
        <div>
        <a href={v.mlink15}
            target='_blank'
            title="유튜브로 이동" 
            className="video-youtube">
          <img src={v.mv15} alt="비디오 이미지" />
        </a>
          <aside>
          <h3>{v.mtit15}</h3>
          </aside>
        </div>
        <div>
        <a href={v.mlink16}
            target='_blank'
            title="유튜브로 이동" 
            className="video-youtube">
          <img src={v.mv16} alt="비디오 이미지" />
        </a>
          <aside>
          <h3>{v.mtit16}</h3>
          </aside>
        </div>
        <div>
        <a href={v.mlink17}
            target='_blank'
            title="유튜브로 이동" 
            className="video-youtube">
          <img src={v.mv17} alt="비디오 이미지" />
        </a>
          <aside>
          <h3>{v.mtit17}</h3>
          </aside>
        </div>
        <div>
        <a href={v.mlink18}
            target='_blank'
            title="유튜브로 이동" 
            className="video-youtube">
          <img src={v.mv18} alt="비디오 이미지" />
        </a>
          <aside>
          <h3>{v.mtit18}</h3>
          </aside>
        </div>
                    </div>      
                </div>   
          </div>
    ))
    } /////////// makeList 함수 ///////////

  // 리턴코드 ////////////////  
  return(
      <section id="ats-Detail-area2">
        <Language onChange={(e)=> clickHandler(e)} />
        {makeList(selData)}
      </section>
  );
} //////////// JEONSOMI 컴포넌트 //////////////

export default JEONSOMI;