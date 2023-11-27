// TheBlck 햄버거 GNB 컴포넌트

import { useContext } from "react";
import { pCon } from "./PilotContext";

export function GnbHam() {
    //  컨텍스트 사용
    const myCon = useContext(pCon);

    // 메뉴 이동 처리함수 ///
    const goGnb = (txt) => {
        myCon.chgPgName(txt);
        // GNB 박스 숨기기
        document.querySelector(".ham").click();
    }; ///////////// goGnb ////////////

    // 코드 리턴 /////////////
    return (
        <>
            <div className="GnbBox">
                <nav className="Glist">
                    <dl>
                        <dt>
                            <a href="#">Home</a>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <a href="#">Introduce</a>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <a href="#">Artist</a>
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
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <a href="#">Album</a>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <a href="#">Audition</a>
                        </dt>
                    </dl>
 
                </nav>
            </div>
        </>
    );
} //////////// GnbHam 컴포넌트 ////////////
