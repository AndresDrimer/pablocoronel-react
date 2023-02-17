export default function Works(props) {
  const eachWork = props.works.map((it) => {
    return (
      <div className="--works-whole-container" key={it.id}>
        <div className="--works-left-part-container">
          <img src={it.poster} width="500px" className="--works-poster" />
        </div>
        <div className="--works-right-part-container">
          <h2>{it.title.toUpperCase()}</h2>
          <h5 className="--works-subtitle">{it.subtitle.toUpperCase()}</h5>
          <p className="--works-paragraph">{it.description}</p>
          <button className="--works-btn-watch-trailer">
            <a href="#">Watch trailer</a>
          </button>
        </div>
      </div>
    );
  });

  const otherWorkMakeGrid = props.otherWorks.map((it) => {
    return (
      <div className="--works-otherworks-flex-container" key={it.id}>
        <iframe
          width="400"
          height="315"
          src={it.trailerUrl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h4>{it.title}</h4>
        <p className="--works-otherWorks-subtitle">{it.subtitle}</p>
      </div>
    );
  });

  return (
    <div id="works">
      {eachWork}
      <h2 className="--works-portfolio-title">MY PORTFOLIO</h2>
      <div className="--works-otherWork-grid-total-container">{otherWorkMakeGrid}</div>
    </div>
  );
}
