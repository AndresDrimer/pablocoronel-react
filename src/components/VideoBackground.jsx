import videoUrl from '../assets/videoback5.mp4'
import posterVideoThumbnail from '/posterVideoBack5.png'



export default function VideoBackground(){
    
    return(
        <>
        <div className='myvideo' id="video">
        <video src={videoUrl} autoPlay loop playsinline muted poster={posterVideoThumbnail}/></div>
        </>
    )
}