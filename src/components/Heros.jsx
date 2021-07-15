
import React, {useState} from 'react';
import './Heros.css'

function Heros({hero}) {

    const [isFavorite, setIsFavorite]= useState(false);

    return (
        <div className="Hero">
            <article className="hero-card">
                <img src={hero.image} alt={hero.name} />
                <div className="hero-card-content">
                    <h2> {hero.name} </h2>
                    <span> {hero.race} - {hero.gender} </span>
                    <div className="hero-power">
                        <span>Force: {hero.force}</span>
                        <span>Stamina: {hero.stamina}</span>

                    </div>
                </div>
            </article>
            <button className="filter-bnt" onClick={() => setIsFavorite(!isFavorite)}>
            {isFavorite ? '💌' : '🧡'}
            </button>
            
        </div>
    )
}

export default Heros
