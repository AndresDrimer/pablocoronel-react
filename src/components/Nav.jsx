import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Nav(props) {
  const [checked, setChecked] = useState(false);

  function disappearMenu() {
    setChecked((prev) => !prev);
  }

  const makeLis = props.sections.map((it) => {
    return (
      <li key={it.id} onClick={disappearMenu} className="--nav-each-li">
        <HashLink smooth to={`/#${it.category}`}>
          {it.category.toUpperCase()}
        </HashLink>
      </li>
    );
  });

  return (
    <nav id="nav">
      <div>
        <h1 className="--nav-title">
          {" "}
          <a href="/">{props.name.toUpperCase()}</a>
        </h1>
        <h3 className="--nav-subtitle">{props.subtitle.toUpperCase()}</h3>
      </div>

      <div>
        <input
          id="menu-toggle"
          type="checkbox"
          checked={checked}
          onChange={disappearMenu}
        />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">{makeLis}</ul>
      </div>
    </nav>
  );
}
