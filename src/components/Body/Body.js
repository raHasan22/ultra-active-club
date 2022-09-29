import React, { useEffect, useState } from 'react';
import Games from '../Games/Games';
import './Body.css'

const Body = () => {
    const [games, setGames] = useState([]);
  
    useEffect( () => {
        fetch('fakedata.json')
        .then(function(response){response.json()
            .then(function(data) {setGames(data);
            });})
    }, [])
    
    return (
        <div className='main-body'>
            <div className='container'>
                <h1>Popular Sports</h1>
            <div className='games-container'>
                {
                    games.map(game => <Games
                    key={game.idSport}
                    game={game}
                    ></Games>)
                }
            </div>
            </div>
            <div>
                <h1>Sidepart</h1>
            </div>
        </div>
    );
  };

export default Body;