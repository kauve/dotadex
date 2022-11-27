import "./index.css";
import { useState } from "react";

import Tittle from "../../Atoms/tittle";
import ModalHeroStats from "../modalHeroStats";
import CardsHeroContainer from "../cardsHeroContainer";

function SearchHero({ data }) {
  const [showModal, setShowModal] = useState(false);

  function CerrarModal() {
    setShowModal(false);
    console.log("Cerrando modal");
    console.log(showModal);
  }

  function AbrirModal() {
    setShowModal(true);
    console.log("Abriendo modal");
    console.log(showModal);
  }

  return (
    <div id="searchHero" className="main-searchHero">
      <ModalHeroStats
        funcionButton={() => CerrarModal()}
        className={
          showModal
            ? "heroStats-container-main"
            : "heroStats-container-main-none"
        }
      />
      <Tittle text="Selecciona un heroe " />
      <CardsHeroContainer funcionButton={() => AbrirModal()} data={data} />
      <div></div>
    </div>
  );
}

export default SearchHero;
