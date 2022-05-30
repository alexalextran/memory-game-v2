import React from 'react';
import { useAuth } from '../Contexts/AuthContext';

const GameOver = (props) => {
   // const { currentUser } = useAuth()
    
 console.log(props.highscore)

    return (
        <div className='gameOver'>
            <h1>Game Over</h1>
            <p>Nice Job, you got up to level {props.highscore.level} with a time of {props.highscore.time} seconds</p>
        </div>
    );
}

export default GameOver;
