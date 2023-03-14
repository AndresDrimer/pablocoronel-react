import { NavLink, useNavigate, useParams } from "react-router-dom"


export default function WorkAllWorks(props) {
    const navigate = useNavigate();
  const {id} = useParams();
  const allWorks = props.works.map((it) => {
    const trailerStyle = {
      display: "block",
    };


    return (
      //this is a way to order odd items with image to to left, and evens to right; it´s quite verbose but couldn´t find a better way yet
      <>
        
        {(it.id + 1) % 2 === 0 ? (
          <div className="--works-whole-container" key={it.id}>
            <div className="--works-movie-info-container">
              <h2 className="--works-title-work">{it.title.toUpperCase()}</h2>
              <h5 className="--works-subtitle">{it.subtitle.toUpperCase()}</h5>
              <p className="--works-paragraph">{it.description}</p>
            <NavLink to="works/:id">watch movie</NavLink>
              

            </div>

            <div
              className="--works-movie-poster-container"
              id="--works-movie-poster-to-right"
            >
              <img src={it.poster} className="--works-poster" />
            </div>
          </div>
        ) : (
          <div className="--works-whole-container" key={it.id}>
            <div className="--works-movie-poster-container" id="odd-work-movie">
              <img src={it.poster} className="--works-poster" />
            </div>
            <div className="--works-movie-info-container">
              <h2 className="--works-title-work">{it.title.toUpperCase()}</h2>
              <h5 className="--works-subtitle">{it.subtitle.toUpperCase()}</h5>
              <p className="--works-paragraph">{it.description}</p>
              
              <br />
              <button 
            className="--portfolio-watch-trailer-btn"
            onClick={()=> navigate(`/works/${it.id}`)}
            ><a href="#works">watch movie</a></button>
            </div>
          </div>
        )}
      </>
    );
  });
  return (
    <div> {allWorks} </div>
  )
}

