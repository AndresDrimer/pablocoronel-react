import { useParams, useNavigate, NavLink } from 'react-router-dom'

export default function PortfolioAllProjects(props) {
    const navigate = useNavigate();
    const { id } = useParams();
 
  
    const portfolioMakeGrid = props.portfolio.map((it) => {
    
    
      return (
      <div key={it.id}>
        <img src={it.poster} className="--portfolio-posters" />
        <div className="--portfolio-eachposter-text-container">
          <h4>{it.title}</h4>
          <p className="--portfolio-subtitle">{it.subtitle}</p>
          <p className="--portfolio-description">{it.description}</p>
        </div>

        <NavLink to={ `portfolio/${it.id}/`} className="--portfolio-watch-trailer-btn">watch movie</NavLink>

     
      </div>
    );
  });

  return (
    <div className="--portfolio-grid-total-container">{portfolioMakeGrid}</div>
  );
}
