// TheBlck 햄버거 GNB 컴포넌트

// Context API 불러오기
import { bCon } from "../modules/TbContext";
import { useEffect, useCallback, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

export function GnbHam(){

    // 랜더링 후 실행구역 //////////
    useEffect(()=>{
        // 햄버거 버튼 클릭시 전체 메뉴 보이기/숨기기
        $('.TBham').click(e=>{
          // 1. 전체메뉴 박스 : .mbox -> 보이기/숨기기
          $('.gbox').fadeToggle(300);
    
          // 2. 햄버거버튼에 클래스 'on' 넣기/빼기
          $(e.currentTarget).toggleClass('on');
          // e.target과 e.currentTarget은 다르다!
          // 후자가 햄버거 버튼 자신임!
          // console.log(e.currentTarget)
        }); ////////// click ///////////
    
        $('.glist a').click(e=>{
            // 햄버거버튼 닫기
            $(e.currentTarget).parent('.gbox').removeClass('on');
            }); ///////// click //////////
        
    },[]); //////////// useEffect ///////////

    // 처음 로딩시 스크롤 상단이동 //////
        useLayoutEffect(()=>{
        window.scrollTo(0,0);
  
      }); ///// useLayoutEffect //////////

    // 코드 리턴 /////////////
    return (
        <>
            <div className="gbox">
                <nav className="glist">
                    <dl>
                        <dt>
                            <Link to='/'>HOME</Link>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <Link to='/IntroSub'>INTRODUCE</Link>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <a href="#">ARTIST</a>
                        </dt>
                        <dd>
                            <Link to='/ArtistsDetail'>TaeYang</Link>
                        </dd>
                        <dd>
                            <Link to='/ArtistsDetail'>Jeon Somi</Link>
                        </dd>
                        <dd>
                            <Link to='/ArtistsDetail'>Zion.T</Link>
                        </dd>
                        <dd>
                            <Link to='/ArtistsDetail'>Bryan Chase</Link>
                        </dd>
                        <dd>
                            <Link to='/ArtistsDetail'>Park Bo Gum</Link>
                        </dd>
                        <dd>
                            <Link to='/ArtistsDetail'>Lee Jong Won</Link>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <Link to='/AlbumSub'>VIDEOS</Link>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <Link to='/AuditionSub'>AUDITION</Link>
                        </dt>
                    </dl>
                </nav>
            </div>
        </>
    );
}; //////////// GnbHam 컴포넌트 ////////////
