export default function Portfolio(props){
  
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
        <p className="--works-otherWorks-description">{it.description}</p>
      </div>
    );
  });
  
  
  return(<>
    <h2 className="--works-portfolio-title"> PORTFOLIO</h2>
      <div className="--works-otherWork-grid-total-container" id="portfolio">
        {otherWorkMakeGrid}
      </div></>
  )
}