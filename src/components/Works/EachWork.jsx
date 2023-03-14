import { useParams, useNavigate } from "react-router-dom";

export default function EachWork(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div className="--works-trailer-container">
      
      <button
          className="--portfolio-go-back-btn"
          onClick={() => navigate(`/`)}
        >
          <a href="#works">X</a>
        </button>
        <br />

        <div className="--portfolio-eachposter-text-container">
        <h4>{props.works[id].title}</h4>
        <p className="--portfolio-subtitle">{props.works[id].subtitle}</p>
        
      </div>
        <iframe
          poster={props.works[id].poster}
          src={props.works[id].trailerUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <p className="--works-criticText fade">
        <em>{props.works[id].criticText}</em>
      </p>
    </>
  );
}
