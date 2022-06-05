import React, { useEffect, useState } from 'react';
import GameOver from './GameOver';
import GameWrapper from './GameWrapper';

const Game = (props) => {
    const [boxesRemaining, setboxesRemaining] = useState(1)
    const [gameOver, setGameOver] = useState(false)
    const [highscore, setHighScore] = useState({})
    const [remainingBoxes, setremainingBoxes] = useState()
    const [seconds, setseconds] = useState(0)
   


    
 
    
    return (
        gameOver ?
        
        <GameOver highscore={highscore} seconds={seconds}/>
        :

        <GameWrapper settutorial={props.settutorial} setboxesRemaining={setboxesRemaining} number={props.number} boxesRemaining={boxesRemaining} setGameOver={setGameOver} setremainingBoxes={setremainingBoxes} remainingBoxes={remainingBoxes} setHighScore={setHighScore} highscore={highscore} setseconds={setseconds}/>
    
       
    );
}

export default React.memo(Game);
