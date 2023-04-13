import { useState } from "react";

export default function About(props) {
  const [textShown, setTextShown] = useState(true);

  function toggleText() {
    setTextShown(prev => !prev);

    const imgBtnLogo = document.querySelector('#btn-img-logo')
    const imgBtnAwards = document.querySelector('#btn-img-awards')

    if (textShown){ 
    imgBtnLogo.classList.add("--about.btn-blue") 
    imgBtnAwards.classList.remove("--about.btn-blue")} else {
      imgBtnLogo.classList.remove("--about.btn-blue") 
      imgBtnAwards.classList.add("--about.btn-blue")
    }

    console.log(textShown);
  }

  const awardsText = props.awards.map((it) => {
    return (
      <>
        <ul className="--about-each-full-prize" key={it}>
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


  function toggleHandler(){
    setTextShown(prev => !prev);
  }


  return (
    <div className="--about-total-wrapper" id="about">
      <div className="--about-welcome-text-container">
        <h3 className="--about-subtitle">HELLO I´M PABLO </h3>
        <h2 className="--about-title">WELCOME</h2>
      </div>
      
      
 
      <div className={`--about-toggler${!textShown ? "awards" : ""}`} onClick={toggleHandler}>
      
      <img className={`--about-toggler-notch${!textShown ? "awards" : ""}`}
       src={textShown ? props.logoPhoto : props.awardsLogo}/>
      </div>


      <div className="--about-container-for-two-elements">
        <div className="--about-conditional-text-containers">
          <h4 className="--about-conditional-text-title">
            {textShown ? "About me" : "Awards"}
          </h4>
          <p className="--about-conditional-text-content">
            {textShown && props.aboutmeText}
         
          {!textShown && awardsText} </p>
        </div>
        <div className="--about-cont-img">
          <img src={props.aboutPhoto} className="--about-photo" />
        </div>
      </div>
    </div>
  );
}
