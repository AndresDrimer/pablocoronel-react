import { NavLink, useNavigate, useParams } from "react-router-dom";

export default function Works(props) {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div id="works">
      <br />
      <h2 className="--works-title">WORKS</h2>

     

      <div className="--work-cont">
        <div className="--work-movie1">
          <div className="--work-text">
            <h2 className="--works-title-work">
              {props.works[0].title.toUpperCase()}
            </h2>
            <h5 className="--works-subtitle">
              {props.works[0].subtitle.toUpperCase()}
            </h5>
            <p className="--works-paragraph">{props.works[0].description}</p>
            <br />
            <NavLink
              to={`works/${props.works[0].id}/`}
              className="--portfolio-watch-trailer-btn"
            >
              watch trailer
            </NavLink>
            <br />
            <br />
          </div>

          <div className="--work-poster">
            
            <img src={props.works[0].poster} className="--works-poster" />
          </div>
        </div>
      

      <div className="--work-movie2">
        <div className="--work-text">
          <h2 className="--works-title-work" id="--work-2nd-title">
            {props.works[1].title.toUpperCase()}
          </h2>
          <h5 className="--works-subtitle">
            {props.works[1].subtitle.toUpperCase()}
          </h5>
          <p className="--works-paragraph">{props.works[1].description}</p>
          <br />
          <NavLink
            to={`works/${props.works[1].id}/`}
            className="--portfolio-watch-trailer-btn"
          >
            watch movie
          </NavLink>
          <br />
          <br />
        </div>

        <div className="--work-poster" id="work-poster-left">
         
          <img src={props.works[1].poster} className="--works-poster" />
        </div>
      </div>

    </div></div>
  );
}
