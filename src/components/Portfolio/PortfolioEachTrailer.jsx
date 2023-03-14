import React from "react";
import { useParams, useNavigate, NavLink, Link } from "react-router-dom";
import next from "/next.svg";
export default function PortfolioEachTrailer(props) {
  let { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div key={id} className="--portfolio-each-trailer-container">
        <div className="--portfolio-each-trailer-header">
          <h2 className="--portfolio-title">Portfolio</h2>
        </div>
<button
          className="--portfolio-go-back-btn"
          onClick={() => navigate(`/`)}
        >X</button>
        
          
        
        <iframe
          className="--portfolio-each-trailer-video"
          src={props.portfolio[id].trailerUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>


        <div
          className="--portfolio-each-video-sliders-and-text"
        >
        
          <button  className="--each-portfolio-btn-navigation" onClick={() => navigate(`/portfolio/${ id < 1 ? "8" : id-1}`)}><img src={next} width="50" className="arrow-other-side" /></button>
          <div className="--portfolio-eachvideo-text-container">
            <h4>{props.portfolio[id].title}</h4>
            <p className="--portfolio-subtitle">
              {props.portfolio[id].subtitle}
            </p>
            <p className="--portfolio-description">
              {props.portfolio[id].description}
            </p>
          </div><button className="--each-portfolio-btn-navigation" onClick={() => navigate(`/portfolio/${ id > 7 ? "0" : Number(id)+1 }`)}><img src={next} width="50"  /></button>
        </div>
        
      </div>
    </>
  );
}
