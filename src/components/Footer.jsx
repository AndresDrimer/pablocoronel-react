import photoIcon from "/camera-icon.svg";
import fbIcon from "/fb-icon.svg";
import phoneIcon from "/cell-phone.svg";
import mailIcon from "/mail-icon.svg";
import locationIcon from "/location-icon.svg";
import photo1 from "/footer-photos/1.jpeg";
import photo2 from "/footer-photos/2.jpeg";
import photo3 from "/footer-photos/3.jpeg";

export default function Footer(props) {
  return (
    <footer>
      <div className="--footer-title-and-subtitle-container">
        <h4 className="--footer-title">{props.name.toUpperCase()}</h4>
        <h6 className="--footer-subtitle">{props.subtitle.toUpperCase()}</h6>
      </div>

      <div className="--footer-photos-container">
        <div className="--footer-photo" id="photo1"></div>
      </div>

      <div className="footer-first-level-container">
        <div className="--foter-icon-text-container">
          <img src={phoneIcon} className="--footer-icon-tel" />
          <p className="--footer-p"> {props.contactInfo.tel1}</p>
        </div>

        <a href={props.contactInfo.photoWeb}>
          {" "}
          <img src={photoIcon} className="--footer-icon" />
        </a>
        <div className="--foter-icon-text-container">
          <img src={locationIcon} className="--footer-icon-tel" />
          <p className="--footer-p"> {props.contactInfo.location}</p>
        </div>
        <a href={props.contactInfo.youtube}>
          <img src={fbIcon} className="--footer-icon" />
        </a>
        <div className="--foter-icon-text-container">
          <img src={mailIcon} className="--footer-icon-tel" />
          <p className="--footer-p"> {props.contactInfo.mail}</p>
        </div>
      </div>

      <div className="--footer-p" id="copyright">
        <p>
          <small></small>
        </p>
      </div>
      <br />
    </footer>
  );
}
