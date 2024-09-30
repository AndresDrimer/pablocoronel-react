import addImg from "/add-round.svg";
import doneImg from "/done.svg";
import camera from "/services-svgs/camera.svg";
import scripts from "/services-svgs/script.svg";
import edition from "/services-svgs/edition.svg";
import logo from '/logo.png'

export default function Services(props) {
  const makeEachService = props.eachService.map((it) => {
    return (
      <div className="--services-cathegory-container" key={it.id}>     
        <p className="--services-each-description"><span>{it.title}. </span><br />{it.description}</p>
      </div>
    );
  });
  return (
    <div className="--services-background-img" id="services">
      <div className="--services-text-and-footer-container">
        <div className="--services-all-text-container">
          <h1 className="--services-main-title">{props.title.toUpperCase()}</h1>
          {makeEachService}
          <p className="--services-final-text">{props.finalText}</p>
        </div>
       
      </div>
    </div>
  );
}
