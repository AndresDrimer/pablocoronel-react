
import { NavLink, useNavigate, useParams } from "react-router-dom"

export default function Works(props) {
  const navigate = useNavigate();
  const {id} = useParams();



  const allWorks = props.works.map((it) => {
    const trailerStyle = {
      display: "block",
    };
 
    return (
 
      <div key={it.id}>
       { 
        (it.id + 1) % 2 === 0 ? (
          //it[1]
          <div className="--works-whole-container" key={it.id}>
            <div className="--works-movie-info-container">
           
              <h2 className="--works-title-work">{it.title.toUpperCase()}</h2>
              <h5 className="--works-subtitle">{it.subtitle.toUpperCase()}</h5>
              <p className="--works-paragraph">{it.description}</p>
           
            <NavLink to={ `works/${it.id}/`} className="--portfolio-watch-trailer-btn works">watch movie</NavLink>
            
            </div>

            <div
              className="--works-movie-poster-container"
              id="--works-movie-poster-to-left"
            >
              <img src={it.poster} className="--works-poster" />
            </div>
          </div>
        ) : (
          //it[0]
          <div className="--works-whole-container" key={it.id}>
            <div className="--works-movie-poster-container" id="even-work-movie">
              <img src={it.poster} className="--works-poster" />
            </div>
            <div className="--works-movie-info-container">
              <h2 className="--works-title-work">{it.title.toUpperCase()}</h2>
              <h5 className="--works-subtitle">{it.subtitle.toUpperCase()}</h5>
              <p className="--works-paragraph">{it.description}</p>
              
              <br />
              <NavLink to={ `works/${it.id}/`} className="--portfolio-watch-trailer-btn">watch movie</NavLink>
                
<br />
            </div>
          </div>
        )
      }
      </div>
    );
  });


  
  return (
    <div id="works">
      <br />
      <h2 className="--works-title">WORKS</h2>
      
      <div> {allWorks} </div>

     
    </div>
  );
}


