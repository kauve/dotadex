import OpenOrCloseModalButton from "../../Atoms/openOrCloseModalButton";
import "./index.css";

function ModalHeroStats({ funcionButton, className }) {
  return (
    <div className={className}>
      <div className="heroStats-container">
        <OpenOrCloseModalButton text="Cerrar modal" onClick={funcionButton} />
        <div className="heroStats-data-container">
          <img
            className="heroStats-img"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png"
            alt=""
          />
          <div className="name-container">
            <div className="data-container">
              <h1 className="data-title">Name:</h1>
              <img
                className="icon"
                alt=""
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png"
              />
              <h1 className="data-text">Lorem Ipsum</h1>
            </div>
          </div>

          <div className="data-container">
            <h1 className="data-title">Roles:</h1>
            <h1 className="data-text">Lorem Ipsum</h1>
          </div>
          <div className="data-container">
            <h1 className="data-title">Attack type:</h1>
            <h1 className="data-text">Lorem Ipsum</h1>
          </div>
          <div className="data-container">
            <h1 className="data-title">Atribute:</h1>
            <h1 className="data-text">Lorem Ipsum</h1>
          </div>
        </div>
        <div className="heroStats-stats-container">
          <img
            className="heroStats-img"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png"
            alt=""
          />
          <div className="name-container">
            <div className="data-container">
              <h1 className="data-title">Name:</h1>
              <img
                className="icon"
                alt=""
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png"
              />
              <h1 className="data-text">Lorem Ipsum</h1>
            </div>
          </div>

          <div className="data-container">
            <h1 className="data-title">Roles:</h1>
            <h1 className="data-text">Lorem Ipsum</h1>
          </div>
          <div className="data-container">
            <h1 className="data-title">Attack type:</h1>
            <h1 className="data-text">Lorem Ipsum</h1>
          </div>
          <div className="data-container">
            <h1 className="data-title">Atribute:</h1>
            <h1 className="data-text">Lorem Ipsum</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalHeroStats;
