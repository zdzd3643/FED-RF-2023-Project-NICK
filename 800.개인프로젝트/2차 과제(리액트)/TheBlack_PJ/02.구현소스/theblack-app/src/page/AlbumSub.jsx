// 스와이퍼 앨범 플러그인 컴포넌트

import React, { useEffect, useRef, useState } from 'react';

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

// 언어번역 

import '../func/i18n';
import i18next from "../func/i18n"
import { useTranslation } from "react-i18next";

const selData = videoData;

// makeList 함수 만들기 ///////
const makeList = (data) => {
  // console.log(data);
  const { t , i18n } = useTranslation();

  return data.map((v,i) => (

    <section id="video-cont" key={i}>
      <div className="video-grid-first">
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
      <a href={v.mlink2}
            target='_blank'
            title="유튜브로 이동" 
            className="video-youtube">
            <img src={v.mv2} alt="비디오 이미지" />
        </a>
        <aside>
        <h3>{t(v.mtit2).split("^")[0]}</h3>
        <h3>{t(v.mtit2).split("^")[1]}</h3>
        </aside>
      </div>
        <div>
        <a href={v.mlink3}
            target='_blank'
            title="유튜브로 이동" 
            className="video-youtube">
          <img src={v.mv3} alt="비디오 이미지" />
        </a>
          <aside>
          <h3>{t(v.mtit3)}</h3>
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
          <h3>{t(v.mtit4)}</h3>
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
          <h3>{t(v.mtit5)}</h3>
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
          <h3>{t(v.mtit6)}</h3>
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
          <h3>{t(v.mtit7).split("^")[0]}</h3>
          <h3>{t(v.mtit7).split("^")[1]}</h3>
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
        <a href={v.mlink9}
            target='_blank'
            title="유튜브로 이동" 
            className="video-youtube">
          <img src={v.mv9} alt="비디오 이미지" />
        </a>
          <aside>
          <h3>{t(v.mtit9).split("^")[0]}</h3>
          <h3>{t(v.mtit9).split("^")[1]}</h3>
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
        <div>
        <a href={v.mlink12}
            target='_blank'
            title="유튜브로 이동" 
            className="video-youtube">
          <img src={v.mv12} alt="비디오 이미지" />
        </a>
          <aside>
          <h3>{t(v.mtit12)}</h3>
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
          <h3>{t(v.mtit13)}</h3>
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
        <a href={v.mlink15}
            target='_blank'
            title="유튜브로 이동" 
            className="video-youtube">
          <img src={v.mv15} alt="비디오 이미지" />
        </a>
          <aside>
          <h3>{t(v.mtit15)}</h3>
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
          <h3>{t(v.mtit16)}</h3>
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
          <h3>{t(v.mtit17)}</h3>
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
          <h3>{t(v.mtit18)}</h3>
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
          <h3>{t(v.mtit19)}</h3>
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
        <div>
        <a href={v.mlink21}
            target='_blank'
            title="유튜브로 이동" 
            className="video-youtube">
          <img src={v.mv21} alt="비디오 이미지" />
        </a>
          <aside>
          <h3>{t(v.mtit21)}</h3>
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
          </aside>
        </div>
        <div>
        <a href={v.mlink25}
            target='_blank'
            title="유튜브로 이동" 
            className="video-youtube">
          <img src={v.mv25} alt="비디오 이미지" />
        </a>
          <aside>
          <h3>{t(v.mtit25).split("^")[0]}</h3>
          <h3>{t(v.mtit25).split("^")[1]}</h3>
          </aside>
        </div>
        <div>
        <a href={v.mlink26}
            target='_blank'
            title="유튜브로 이동" 
            className="video-youtube">
          <img src={v.mv26} alt="비디오 이미지" />
        </a>
          <aside>
          <h3>{t(v.mtit26).split("^")[0]}</h3>
          <h3>{t(v.mtit26).split("^")[1]}</h3>
          <h3>{t(v.mtit26).split("^")[2]}</h3>
          </aside>
        </div>
        <div>
        <a href={v.mlink27}
            target='_blank'
            title="유튜브로 이동" 
            className="video-youtube">
          <img src={v.mv27} alt="비디오 이미지" />
        </a>
          <aside>
          <h3>{t(v.mtit27).split("^")[0]}</h3>
          <h3>{t(v.mtit27).split("^")[1]}</h3>
          </aside>
        </div>
        <div>
        <a href={v.mlink28}
            target='_blank'
            title="유튜브로 이동" 
            className="video-youtube">
          <img src={v.mv28} alt="비디오 이미지" />
        </a>
          <aside>
          <h3>{t(v.mtit28).split("^")[0]}</h3>
          <h3>{t(v.mtit28).split("^")[1]}</h3>
          </aside>
        </div>
    </section>

  )); ////////// data ////////
} ///////// makeList /////////

export function AlbumSub(){
  let vh = 0;
  
  useEffect(() => {
      // 모바일 네비게이션바 없애기
      vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, [])
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

export default AlbumSub;