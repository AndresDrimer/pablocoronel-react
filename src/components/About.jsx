import { useState } from "react";

export default function About(props) {
  const [textShown, setTextShown] = useState(true);
  console.log(textShown)
  function toggleText() {
    setTextShown(!textShown);
    console.log(textShown);
  }

  const awardsText = props.awards.map((it) => {
    return (
      <>
        <ul>
          <li className="--about-prizes-lis">
            <strong className="--about-prizes-opus-title">
              {it.opus.toUpperCase()}{" "}
            </strong>
            <br />
            <em>({it.opusSubtitle})</em>
          </li>
          {it.prizes.map((it) => {
            return (
              <p className="--about-awards-paragraph" key={it.id}>
                · {it.date} // <strong>{it.prizeName}</strong> - {it.place}
              </p>
            );
          })}
        </ul>
        <br />
      </>
    );
  });

  return (
    <div className="--about-total-wrapper" id="about">
      <div className="--about-welcome-text-container">
        <h3 className="--about-subtitle">HELLO I´M PABLO </h3>
        <h2 className="--about-title">WELCOME</h2>
      </div>
      <div className="--about-two-buttons-container">
        <button className="--about-btn-select" onClick={toggleText}>
          <img
            src={props.logoPhoto}
            width="50px"
            height="50px"
          />
        </button>

        
      </div>
      <div className="--about-container-for-two-elements">
        <div className="--about-conditional-text-containers">
          <h4 className="--about-continional-text-title">
            {textShown ? "About me" : "Awards"}
          </h4>
          <p className="--about-continional-text-content">
            {textShown && props.aboutmeText}
          </p>
          {!textShown && awardsText}
        </div>
        <div className="--about-cont-img">
          <img src={props.aboutPhoto} className="--about-photo" />
        </div>
      </div>
    </div>
  );
}
