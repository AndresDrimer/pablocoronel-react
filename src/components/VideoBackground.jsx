import videoUrl from '../assets/videobackground-baja.mp4'
import './video.css'


export default function VideoBackground(){
    
    return(
        <>
        <div className='myvideo'>
        <video src={videoUrl} autoPlay loop muted /></div>
        </>
    )
}