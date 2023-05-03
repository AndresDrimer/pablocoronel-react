import videoUrl from '../assets/videoback5.mp4'
import posterVideoThumbnail from '/posterVideoBack5.png'



export default function VideoBackground(){
    let videoItself  = document.getElementById("videoo");
  

    return(
        <>
        <div className='myvideo' id="video">
        <video src={videoUrl} autoPlay="autoplay" playsInline="playsinline" muted poster={posterVideoThumbnail}/></div>
        </>
    )
}