import { useParams, useNavigate, NavLink, Link } from "react-router-dom";
import next from "/next.svg";
import mask from '/mask.svg'
import ScrollToTop from "../components/ScrollToTop";
export default function PortfolioWorkEach(props) {
  let { id } = useParams();
  const navigate = useNavigate();
  const numOfWorks = [];

  return (
    <><ScrollToTop>
      <div key={id} className="--portfolio-each-trailer-container">
        <div className="--portfolio-each-trailer-header">
          <h2 className="--portfolio-title">Works</h2>
        </div>
        <button
          className="--portfolio-go-back-btn"
          onClick={() => navigate(`/`)}
        >
          X
        </button>

        <h2 className="--eachworks-title">
          {props.works[id].title.toUpperCase()}
        </h2>

        <iframe
          className="--portfolio-each-trailer-video"
          src={props.works[id].trailerUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className="--eachwork-each-video-sliders-and-text">
          <div className="--eachwork-header-article">
           {/* <button
              className="--each-portfolio-btn-navigation"
              onClick={() => navigate(`/works/${id === "0" ? "1" : "0"}`)}
            >
              <img src={next} width="50" className="arrow-other-side" />
  </button> */}
            <div className="--eachwork-eachvideo-text-container">
              <h4>{props.works[id].title}</h4>
              <p className="--portfolio-subtitle">{props.works[id].subtitle}</p>
             
            </div>
            {/*<button
              className="--each-portfolio-btn-navigation"
              onClick={() => navigate(`/works/${id === "0" ? "1" : "0"}`)}
            >
              <img src={next} width="50" />
</button>*/}
          </div>
        </div>
        <div className="--eachwork-description">
     
     
        <p className="--eachworks-criticText">
          {props.works[id].criticText}
        </p>   <img src={mask} alt="" width="25" className="--eachwork-mask-icon" /></div>
      </div></ScrollToTop>
    </>
  );
}
