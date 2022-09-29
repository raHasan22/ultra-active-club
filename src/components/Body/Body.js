import React, { useEffect, useState } from 'react';
import Games from '../Games/Games';
import Sidebar from '../Sidebar/Sidebar';
import './Body.css'

const Body = () => {
    const [games, setGames] = useState([]);
        useEffect( () => {
        fetch('fakedata.json')
        .then(function(response){response.json()
            .then(function(data) {setGames(data);
            });})
    }, [])

    const handleAddButton = (game) => {
        console.log(game)
    }
    
    return (
        <div className='main-body'>
            <div className='container'>
                <h1>Download Games</h1>
            <div className='games-container'>
                {
                    games.map(game => <Games
                    key={game.idSport}
                    game={game}
                    handleAddButton ={handleAddButton}
                    ></Games>)
                }
            </div>
            </div>
            <div className='Count-time'>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
  };

export default Body;