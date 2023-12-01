// theblack PJ 메인영역 공통 컴포넌트 

import { IntroSub } from "../page/IntroSub";
import { Main } from "../page/Main";
import { MainCont } from "../page/MainCont";

import { useContext } from "react";
import { bCon } from "../modules/TbContext";



export function MainArea(){
  const myCon = useContext(bCon);
  console.log('메인영역',myCon.pgName);
  return(
    <>
        <Main />
        {myCon.pgName=='main'?<MainCont />:
        myCon.pgName=='IntroSub'?<IntroSub />:
        <MainCont/>}
    </>
  );
} /////////////// MainArea 컴포넌트 ///////////////