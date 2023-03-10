import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function PortfolioEachTrailer(props) {
  let { id } = useParams()
  const navigate = useNavigate();


    return (
    <>
    <div 
        key={id}
        className="--portfolio-each-trailer-container"
    >
    <button 
    className="--portfolio-go-back-btn"
    onClick={()=> navigate(`/`)}
    >X</button><br/>
    <iframe
    className='--portfolio-each-trailer-video'
      
      src={props.portfolio[id].trailerUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
    <div className='--portfolio-eachvideo-text-container'>
    <h4>{props.portfolio[id].title}</h4>
    <p className="--portfolio-subtitle">{props.portfolio[id].subtitle}</p>
    <p className="--portfolio-description">{props.portfolio[id].description}</p></div>
  </div>
   </>
  )
}
