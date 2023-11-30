// TheBlck 햄버거 GNB 컴포넌트

import { useContext } from "react";
import { bCon } from "./TbContext";

export function GnbHam(){

    //  컨텍스트 사용
    const myCon = useContext(bCon);

    // 메뉴 이동 처리함수 ///
    const goPage = (txt) => {
        myCon.chgPgName(txt);
        // GNB 박스 숨기기
        document.querySelector(".ham").click();
    }; ///////////// goPage ////////////

    // 코드 리턴 /////////////
    return (
        <>
            <div className="gbox">
                <nav className="glist">
                    <dl>
                        <dt>
                            <a href="#"
                            onClick={()=>goPage('Banner')}>Home</a>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <a href="#"
                            onClick={()=>goPage('IntroSub')}>Introduce</a>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <a href="#"
                            onClick={()=>goPage('ArtistsSub')}>Artist</a>
                        </dt>
                        <dd>
                            <a href="#">TaeYang</a>
                        </dd>
                        <dd>
                            <a href="#">Jeon Somi</a>
                        </dd>
                        <dd>
                            <a href="#">Zion.T</a>
                        </dd>
                        <dd>
                            <a href="#">Bryan Chase</a>
                        </dd>
                        <dd>
                            <a href="#">Park Bo Gum</a>
                        </dd>
                        <dd>
                            <a href="#">Lee Jong Won</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <a href="#"
                            onClick={()=>goPage('AlbumSub')}>Album</a>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <a href="#"
                            onClick={()=>goPage('Audition')}>Audition</a>
                        </dt>
                    </dl>
                </nav>
            </div>
        </>
    );
} //////////// GnbHam 컴포넌트 ////////////
