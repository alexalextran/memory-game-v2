import React, { useState } from 'react';
import Gamebody from './GameBody';
import GameOver from './GameOver';

const Game = (props) => {
    const [boxesRemaining, setboxesRemaining] = useState(1)
    const [gameOver, setGameOver] = useState(false)
   
    return (
        gameOver ?
        
        <GameOver />
        :
        <div>
            <div className='game__wrapper'>
            <div className='game__wrapper--header'>
                 <div>
                    <button onClick={() => props.settutorial(true)}>Back Home</button> <button onClick={() => setboxesRemaining(1)}>Reset Game</button>
                 </div>
                 <div className='header__info'>
                   <ul>
                       <li>Level <span>0</span></li>
                       <li>Boxes <span>3</span></li>
                       <li>Lives <span>0</span></li>
                       <li>Time <span>3</span></li>
                   </ul>
                 </div>
            </div>
               <Gamebody number={props.number} boxesRemaining={boxesRemaining} setboxesRemaining={setboxesRemaining} setGameOver={setGameOver}/>
            </div>
        </div>
       
    );
}

export default Game;
