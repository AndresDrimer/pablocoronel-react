import photoIcon from "/camera-icon.svg";
import fbIcon from "/fb-icon.svg";
import phoneIcon from "/cell-phone.svg";
import mailIcon from "/mail-icon.svg";
import locationIcon from "/location-icon.svg";

export default function Footer(props) {
  return (
    <footer>
      <div className="--footer-title-and-subtitle-container">
        <h4 className="--footer-title">{props.name.toUpperCase()}</h4>
        <h6 className="--footer-subtitle">{props.subtitle.toUpperCase()}</h6>
      </div>

      <div className="--footer-tile"></div>

      <div className="footer-first-level-container">
        <div className="--foter-icon-text-container">
          <img src={phoneIcon} className="--footer-icon-tel" />
          <p className="--footer-p"> {props.contactInfo.tel1}</p>
        </div>

        <div className="--foter-icon-text-container">
          <img src={phoneIcon} className="--footer-icon-tel" />
          <p className="--footer-p"> {props.contactInfo.tel2}</p>
        </div>

        <div className="--foter-icon-text-container">
          <img src={mailIcon} className="--footer-icon-tel" />
          <p className="--footer-p"> {props.contactInfo.mail}</p>
        </div>
        
      </div>
    
      <div className="--foter-icon-text-container" id="--footer-location">
          <img src={locationIcon} className="--footer-icon-tel" />
          <p className="--footer-p"> {props.contactInfo.location}</p>
        </div><br />

      <a href={props.contactInfo.youtube}>
        <img src={fbIcon} className="--footer-icon" />
      </a>

      <a href={props.contactInfo.photoWeb}>
        {" "}
        <img src={photoIcon} className="--footer-icon" />
      </a>
    </footer>
  );
}
