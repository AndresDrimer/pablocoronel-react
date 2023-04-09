import { useState } from "react";
import { Link } from 'react-router-dom'

export default function Nav(props) {
  const [checked, setChecked] = useState(false)
  
  function disappearMenu(){
    setChecked(prev => !prev)
  }
  
  const makeLis = props.sections.map((it) => {
    return <li 
    key={it.id}
    onClick={disappearMenu}
    ><a href={`/#${it.category}`}>{it.category.toUpperCase()}</a></li>;
  });

  return (
    <nav id="nav">
      <div>
        <h1 className="--nav-title"> <a href="/">{props.name.toUpperCase()}</a></h1>
        <h3 className="--nav-subtitle">{props.subtitle.toUpperCase()}</h3>
      </div>

      <div>
      <input id="menu-toggle" type="checkbox" checked={checked} onChange={disappearMenu}/>
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">{makeLis}</ul></div>
    </nav>
  );
}
