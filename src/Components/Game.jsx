import React, { useEffect, useState } from 'react';
import Gamebody from './GameBody';
import GameOver from './GameOver';

const Game = (props) => {
    const [boxesRemaining, setboxesRemaining] = useState(1)
    const [gameOver, setGameOver] = useState(false)
    const [highscore, setHighScore] = useState({})
    const [remainingBoxes, setremainingBoxes] = useState()

    useEffect(() => {
     //console.log(document.getElementById('r-b').style.animation);
    })
    
   
    return (
        gameOver ?
        
        <GameOver highscore={highscore}/>
        :
        <div>
            <div className='game__wrapper'>
            <div className='game__wrapper--header'>
                 <div>
                    <button onClick={() => props.settutorial(true)}>Back Home</button> <button onClick={() => setboxesRemaining(1)}>Reset Game</button>
                 </div>
                 <div className='header__info'>
                   <ul>
                       <li>Level <span>{boxesRemaining}</span></li>
                       <li>Boxes <span id='r-b'>{remainingBoxes}</span></li>
                       <li>Lives <span>0</span></li>
                       <li>Time <span>3</span></li>
                   </ul>
                 </div>
            </div>
               <Gamebody number={props.number} boxesRemaining={boxesRemaining} setboxesRemaining={setboxesRemaining} setGameOver={setGameOver} setHighScore={setHighScore} setremainingBoxes={setremainingBoxes}/>
            </div>
        </div>
       
    );
}

export default Game;
