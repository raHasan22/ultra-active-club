import React from 'react';
import './Games.css'

const Games = (props) => {
    const {handleAddButton, game} = props;
    const {strSport, strFormat, strSportThumb, timeNeed} = game;
    return (
        <div className='single-game'>
            <img src={strSportThumb} alt=""></img>
            <div className='details'>
            <h3>{strSport}</h3>
            <p><strong>Format:</strong> {strFormat}</p>
            <p><strong>Time:</strong> {timeNeed}min</p>
            </div>
            <button onClick={() => handleAddButton(game)}>Add</button>
        </div>
    );
};

export default Games;