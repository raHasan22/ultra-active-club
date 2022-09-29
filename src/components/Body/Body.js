import React, { useEffect, useState } from 'react';
import Games from '../Games/Games';
import Sidebar from '../Sidebar/Sidebar';
import './Body.css'
import { addTime } from './utilities';

const Body = () => {
    const [games, setGames] = useState([]);
    // const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);
        useEffect( () => {
        fetch('fakedata.json')
        .then(function(response){response.json()
            .then(function(data) {setGames(data);
            });})
    }, [])

    
    function handleAddButton(game){
        const {timeNeed} = game;
        // const addTime = () => setCount(count + parseInt(timeNeed))
        const value = addTime(timeNeed, count);
        setCount(value)
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
                <Sidebar value={count}></Sidebar>
            </div>
        </div>
    );
  };

export default Body;