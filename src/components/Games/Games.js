import React from 'react';
import './Games.css'

const Games = (props) => {
    const {strSport, strFormat, strSportThumb, timeNeed} = props.game;
    return (
        <div className='single-game'>
            <img src={strSportThumb} alt=""></img>
            <div className='details'>
            <h3>{strSport}</h3>
            <p>Format: {strFormat}</p>
            <p>Time: {timeNeed}min</p>
            </div>
            <button>Add</button>
        </div>
    );
};

export default Games;