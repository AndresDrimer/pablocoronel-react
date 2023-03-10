import { useParams, useNavigate } from 'react-router-dom'

export default function PortfolioAllProjects(props) {
  const navigate = useNavigate();
 
  
    const portfolioMakeGrid = props.portfolio.map((it) => {
    return (
      <div key={it.id}>
        <img src={it.poster} className="--portfolio-posters" />
        <div className="--portfolio-eachposter-text-container">
          <h4>{it.title}</h4>
          <p className="--portfolio-subtitle">{it.subtitle}</p>
          <p className="--portfolio-description">{it.description}</p>
        </div>
        <button 
            className="--portfolio-watch-trailer-btn"
            onClick={()=> navigate(`/${it.id}`)}
            ><a href="#portfolio">watch trailer</a></button>
      </div>
    );
  });

  return (
    <div className="--portfolio-grid-total-container">{portfolioMakeGrid}</div>
  );
}
