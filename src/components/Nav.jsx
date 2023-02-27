
export default function Nav(props) {
  const makeLis = props.sections.map((it) => {
    return <li key={it.id}><a href={`#${it.category}`}>{it.category.toUpperCase()}</a></li>;
  });

  return (
    <nav id="nav">
      <div>
        <h1 className="--nav-title"> <a href="#video">{props.name.toUpperCase()}</a></h1>
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
