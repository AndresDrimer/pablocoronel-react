import { useState } from "react";
import recortePoster from "/poster-cqtvdr-recorte.jpg";
export default function Works(props) {
  const eachWork = props.works.map((it) => {
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

              <div className="--works-trailer-container">
                <iframe
                  src={it.trailerUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="--works-paragraph fade"><em>{it.criticText}</em></p>
              <br />
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
              <div className="--works-trailer-container">
                <iframe
                  src={it.trailerUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="--works-paragraph fade"><em>{it.criticText}</em></p>
              <br />
            </div>
          </div>
        )}
      </>
    );
  });

  return (
    <div id="works">
      <br />
      <h2 className="--works-title">WORKS</h2>
      {eachWork}
    </div>
  );
}
