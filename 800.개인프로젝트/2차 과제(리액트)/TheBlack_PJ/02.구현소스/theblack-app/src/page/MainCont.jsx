
import { AlbumSub } from "../page/AlbumSub";
import { ArtistSub } from "../page/ArtistsSub";
import { AuditionSub } from "../page/AuditionSub";
import { IntroSub } from "../page/IntroSub";


export function MainCont(){
    return(
        <>
        <ArtistSub />
        <AlbumSub />
        <AuditionSub />
        </>
    )
}