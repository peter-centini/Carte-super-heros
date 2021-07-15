import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Heros from './Heros';
import './HerosList.css';




function HerosList() {
        const [heroes, setHeroes] = useState([]);
        const [isStrong, setIsStrong] = useState(false);

        useEffect(() => {
        
        axios
        .get("https://lit-badlands-40023.herokuapp.com/heros")
        .then((res) => res.data)
        .then((data) => setHeroes(data))
        //  console.log(heroes);       
        }, [])

    return (
        <div className="HerosList">
            <button className="filter-bnt" onClick={() =>setIsStrong(!isStrong)}>
                {isStrong ? 'ALL Heroes': 'Strong Heroes'}
            </button>

            <div className="hero-container">
           {!isStrong 
            ?
            heroes
            .map((hero) => (
                <div key={hero.id}>
                    <Heros hero={hero}/>
                </div>
            ))
            :
            heroes.filter((hero) => hero.force > 75)
            .map((hero) => (
                <div key={hero.id}>
                    <Heros hero={hero}/>
                </div>
            ))}
        </div>
      </div>
    )
}

export default HerosList
