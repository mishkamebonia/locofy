import "./poster.scss";
import image1 from "../assets/images/staff-image1.png";
import image2 from "../assets/images/staff-image2.png";
import videoIcon from "../assets/icons/video-icon.png";
import medicineIcon from "../assets/icons/medicine-icon.png";
import ambulanceIcon from "../assets/icons/ambulance-icon.png";

export default function Poster() {
  return (
    <div className="poster">
      <div className="description">
        <h2>Book your appointment now!</h2>
        <p>The best medical service at your fingertips</p>
        <button>
          <a href="https://www.locofy.ai/signup?utm_source=convertpage&utm_medium=organic&utm_campaign=figma-to-react">
            Download App
          </a>
        </button>
      </div>
      <img src={image1} className="img1" alt="image1" />
      <img src={image2} className="img2" alt="image2" />
      <img src={videoIcon} className="video-icon" alt="video" />
      <img src={medicineIcon} className="medicine-icon" alt="medicine" />
      <img src={ambulanceIcon} className="ambulance-icon" alt="ambulance" />
    </div>
  );
}
