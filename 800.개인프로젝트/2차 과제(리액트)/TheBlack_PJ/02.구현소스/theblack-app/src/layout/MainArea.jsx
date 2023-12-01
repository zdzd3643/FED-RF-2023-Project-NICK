// theblack PJ 메인영역 공통 컴포넌트 

// 제이쿼리
import $ from 'jquery';
import { IntroSub } from '../page/IntroSub';
import { MainCont } from '../page/MainCont';
import { AuditionSub } from '../page/AuditionSub';
import { ArtistsSub } from '../page/ArtistsSub';
import { AlbumSub } from '../page/AlbumSub';
export function MainArea(props){
  return(
    <>
        {
        // main이 아니면 서브 Fashion이동
        props.page=='IntroSub'?<IntroSub />:
        <MainCont /> &&
        props.page=='ArtistsSub'?<ArtistsSub />:
        <MainCont /> &&
        props.page=='AlbumSub'?<AlbumSub />:
        <MainCont /> &&
        props.page=='Audition'?<AuditionSub />:
        <MainCont /> 
        };
    </>
  );
} /////////////// MainArea 컴포넌트 ///////////////