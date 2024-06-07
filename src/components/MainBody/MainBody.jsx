import onlineLearningGif from "../../assets/images/Online learning-amico.png";
import ParticleBg from "../ParticleBg/ParticleBg";
import "./Mainbody.css";

export default function MainBody() {
  return (
    <main>
      <div className="main-div">
        <div className="main-div-left">
          <h2>Coming Soon</h2>
          <p>We are currently working on awesome new site</p>
          <div className="loader-div">
            <div className="loader"></div>
          </div>
        </div>
        <div className="main-div-right">
          <img src={onlineLearningGif} alt="Online Learning GIF" />
        </div>
      </div>
      <ParticleBg></ParticleBg>
    </main>
  );
}
