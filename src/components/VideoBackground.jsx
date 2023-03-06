import videoUrl from '../assets/videoback5.mp4'
import posterVideoThumbnail from '/posterVideoBack5.png'
import './video.css'


export default function VideoBackground(){
    
    return(
        <>
        <div className='myvideo' id="video">
        <video src={videoUrl} autoPlay loop poster={posterVideoThumbnail}/></div>
        </>
    )
}