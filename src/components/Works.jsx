import { useState } from "react";
import recortePoster from "/poster-cqtvdr-recorte.jpg";
export default function Works(props) {

  

   const eachWork = props.works.map((it) => {
   
     const trailerStyle={
      display:"block"
    }  

    return (
    //this is a way to order one to left, one to right; it´s quite verbose but couldn´t find a way to make it dryer this time because of all sort of changing classes involved
      <>  { (it.id+1)%2===0 ? 
        <div className="--works-whole-container" key={it.id}>
          <div className="--works-movie-info-container">
            <h2 className="--works-title-work">{it.title.toUpperCase()}</h2>
            <h5 className="--works-subtitle">{it.subtitle.toUpperCase()}</h5>
            <p className="--works-paragraph">{it.description}</p>
            
            <div className="--works-trailer-container">
           <iframe 
          
          src={it.trailerUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
           </div>
        
          </div>

          <div className="--works-movie-poster-container" id="--works-movie-poster-to-right" >
            <img src={it.poster} className="--works-poster" />
          </div>
        </div> : 

        <div className="--works-whole-container" key={it.id}>
          <div className="--works-movie-poster-container" >
        <img src={it.poster} className="--works-poster"  />
        </div>
      <div className="--works-movie-info-container">
      <h2 className="--works-title-work">{it.title.toUpperCase()}</h2>
      <h5 className="--works-subtitle">{it.subtitle.toUpperCase()}</h5>
      <p className="--works-paragraph">{it.description}</p>
      <div className="--works-trailer-container">
      <iframe 
      
        src={it.trailerUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      
    </div>
        </div>
        }

        
      </>
    );
  });

  const otherWorkMakeGrid = props.otherWorks.map((it) => {
    return (
      <div className="--works-otherworks-flex-container" key={it.id}>
        <iframe
          max-width="200"
          height="315"
          src={it.trailerUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h4>{it.title}</h4>
        <p className="--works-otherWorks-subtitle">{it.subtitle}</p>
      </div>
    );
  });

  return (
    <div id="works">
      <br />
      <h2 className="--works-portfolio-title">WORKS</h2>
      {eachWork}
     
      <h2 className="--works-portfolio-title"> PORTFOLIO</h2>
      <div className="--works-otherWork-grid-total-container" id="portfolio">
        {otherWorkMakeGrid}
      </div>
    </div>
  );
}
