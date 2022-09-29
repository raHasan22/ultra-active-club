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
        <div>
            <div className='main-body'>
            <div className='container'>
                <h1>Booking PLAYGROUNDS</h1>
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
        <div className='blogs'>
                <h1>Blogs</h1>
                <div className='blogs-details'>
                    <div className='blogs-component'>
                        <h4>How react works?</h4>
                        <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                    </div>
                    <div className='blogs-component'>
                        <h4>Difference between props and state?</h4>
                        <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
                    </div>
                    <div className='blogs-component'>
                        <h4>Besides fetching data what is the other usage of hook?</h4>
                        <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
                    </div>
                </div>
        </div>
        </div>
    );
  };

export default Body;