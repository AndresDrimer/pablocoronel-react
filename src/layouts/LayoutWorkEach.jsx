
import { useParams, useNavigate, NavLink, Link } from "react-router-dom";
import next from "/next.svg";
export default function PortfolioWorkEach(props) {
  let { id } = useParams();
  const navigate = useNavigate();
  const numOfWorks= []

  return (
    <>
      <div key={id} className="--portfolio-each-trailer-container">
        <div className="--portfolio-each-trailer-header">
          <h2 className="--portfolio-title">Works</h2>
        </div>
<button
          className="--portfolio-go-back-btn"
          onClick={() => navigate(`/`)}
        >X</button>
        
        <h2 className="--eachworks-title">{props.works[id].title.toUpperCase()}</h2>
        
        <iframe
          className="--portfolio-each-trailer-video"
          src={props.works[id].trailerUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>


        <div
          className="--portfolio-each-video-sliders-and-text"
        >
        
          <button  className="--each-portfolio-btn-navigation" onClick={() => navigate(`/works/${ id === "0" ? "1" : "0"}`)}><img src={next} width="50" className="arrow-other-side" /></button>
          <div className="--portfolio-eachvideo-text-container">
            <h4>{props.works[id].title}</h4>
            <p className="--portfolio-subtitle">
              {props.works[id].subtitle}
            </p><p className="--works-paragraph">{props.works[id].description}</p>
            <p className="--eachworks-criticText">
              {props.works[id].criticText}
            </p>
            
          </div><button className="--each-portfolio-btn-navigation" onClick={() => navigate(`/works/${ id === "0" ? "1" : "0"}`)}><img src={next} width="50"  /></button>
        </div>
        
      </div>
    </>
  );
}
