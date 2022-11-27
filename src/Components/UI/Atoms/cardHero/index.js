import "./index.css";

function CardHero({ id, name, icon, img, funcionButton }) {

  return (
    <div className="card-container" onClick={funcionButton}>
      <div className="card-img-container">
        <img src={img} alt="" />
      </div>
      <div className="card-name-container">
        <h3 className="card-name">{name}</h3>
        <img className="atribute-icon" src={icon} alt="" />
      </div>
      <div className="card-id-container">
        <p className="card-id">{id}</p>
      </div>
    </div>
  );
}

export default CardHero;
