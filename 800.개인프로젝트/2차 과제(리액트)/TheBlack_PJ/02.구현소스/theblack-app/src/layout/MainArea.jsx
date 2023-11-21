// theblack PJ 메인영역 공통 컴포넌트 

import { AlbumSub } from "../page/AlbumSub";
import { ArtistSub } from "../page/ArtistsSub";
import { AuditionSub } from "../page/AuditionSub";
import { IntroSub } from "../page/IntroSub";
import { Main } from "../page/Main";



export function MainArea(){
  return(
    <>
        <Main />
        <IntroSub />
        <ArtistSub />
        <AlbumSub />
        <AuditionSub />
    </>
  );
} /////////////// MainArea 컴포넌트 ///////////////