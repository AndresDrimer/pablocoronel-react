import photoIcon from "/camera-icon.svg";
import youtubeIcon from "/youtube.svg";
import phoneIcon from "/cell-phone.svg";
import mailIcon from "/mail-icon.svg";
import locationIcon from "/location-icon.svg";

export default function Footer(props) {
  return (
    <footer>
      {/*<!-- titulo-->*/}

      <div className="--footer-title-and-subtitle-container">
        <h4 className="--footer-title">{props.name.toUpperCase()}</h4>
        <h6 className="--footer-subtitle">{props.subtitle.toUpperCase()}</h6>
      </div>

      {/*   datos de contacto   */}

      <div className="footer-first-level-container">


        <div className="--foter-icon-text-container">
          <img src={phoneIcon} className="--footer-icon-tel" />

          <p className="--footer-p"> <a href="https://api.whatsapp.com/send?phone=4901792248351&text=Hello%20Pablo">{props.contactInfo.tel1}</a></p>
        </div>



        <div className="--foter-icon-text-container">
          <img src={locationIcon} className="--footer-icon-tel" />
          <p className="--footer-p"> {props.contactInfo.location}</p>
        </div>


        <div className="--foter-icon-text-container">
          <img src={mailIcon} className="--footer-icon-tel" />
          <p className="--footer-p"><a href="mailto:pabloignaciocoronel@gmail.com"> {props.contactInfo.mail}</a></p>
        </div>


        <div>
          <a href={props.contactInfo.youtube}>
            <img src={youtubeIcon} className="--footer-icon" />
          </a>

          <a href={props.contactInfo.photoWeb}>
            <img src={photoIcon} className="--footer-icon" id="fotoIcon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
