import "./navComponent.css";
import { nanoid } from "nanoid";

export default function Nav(props) {
  const makeLis = props.sections.map((it) => {
    return <li key={it.id}><a href="#">{it.category.toUpperCase()}</a></li>;
  });

  return (
    <nav>
      <div>
        <h1 className="--nav-title">{props.name.toUpperCase()}</h1>
        <h3 className="--nav-subtitle">{props.subtitle.toUpperCase()}</h3>
      </div>
      <div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">{makeLis}</ul></div>
    </nav>
  );
}
