import React from 'react'
import CardHero from '../../Atoms/cardHero';

function CardsHeroContainer({data,funcionButton}) {
  return (
    <div className="cards-container" >
    {data &&
      data.map((hero) => {
        return (
          <CardHero funcionButton={funcionButton}
            key={hero.id}
            id={`#${hero.id} `}
            img={`https://api.opendota.com${hero.img}`}
            name={hero.localized_name}
            icon={`https://api.opendota.com${hero.icon}`} 
             
          />
        );
      })}
  </div>
  )
}

export default CardsHeroContainer