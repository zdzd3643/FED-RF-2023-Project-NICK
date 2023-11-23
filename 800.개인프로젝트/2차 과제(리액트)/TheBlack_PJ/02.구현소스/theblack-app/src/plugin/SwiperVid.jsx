// // TheBlack 뮤비 스와이퍼 플러그인 컴포넌트

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

// mv 데이터 가져오기
import { mvData } from "../data/mv_data";

// MV CSS 가져오기
import "../css/common.css";

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export function SwiperVid(){

const selData = mvData

  return(
    <>
      <Swiper 
      navigation={true} 
      modules={[Navigation]} 
      className="mySwiper">
        {
          selData.map((v,i)=>
          <SwiperSlide >
            <section className="ats-area">
              <div className="ats-mv">
                <video 
                src={v.vsrc}
                id="mv"
                loop="loop"
                muted="muted"
                autoPlay="autoplay"
                />
              <div className="Pbtn">
                  <a href="#">NowPlaying</a>
              </div>
              <div className="Pbtn2">{v.tit}</div>
              {/* 동영상 넘기기 버튼 */}
              {/* 폰트어썸 아이콘 */}
              {/* <div className="arrow">
                <div className="lar">
                  <FontAwesomeIcon 
                    icon={faChevronLeft} />
                </div>
                <div className="rar">
                  <FontAwesomeIcon 
                    icon={faChevronRight} />
                </div>
              </div> */}
            </div>     
        </section>

        </SwiperSlide>)
        }
      </Swiper>
    </>
  );
} ////////// SwiperVid 컴포넌트 /////////////