import "./index.css";
import ButtonHD from "../../Atoms/buttonHD/Index";
import { Link } from "react-scroll";

function Navbar() {
  let imgLogo =
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_horiz.png";

  return (
    <div id="Up" className="nav-main">
      <div className="nav-video">
        <video autoPlay="autoplay" preload="auto" loop playsInline>
          <source
            type="video/webm"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm"
          />
          <source
            type="video/mp4"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_02.mp4"
          />
        </video>
      </div>
      <nav>
        <div>
          <Link
            className="upButton"
            to="Up"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Up 
          </Link>
        </div>
        <div className="nav-container">
          <div>
            <a className="logo" href="/">
              <img className="imgLogo" src={imgLogo} alt="" />
            </a>
          </div>
        </div>
        <div className="button-nav">
          <ButtonHD text="¡Empieza a usarme!" />
        </div>
        <div className="nav-text-container">
          <h1 className="dotadex"> {"<"} DOTADEX</h1>
          <h1 className="by"> By Kauve</h1>
          <h1 className="dotadex"> {">"} </h1>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
