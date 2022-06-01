import React, { useEffect } from 'react';
import GameBody from './GameBody';
import ReactDOM from "react-dom";


const GameWrapper = (props) => {

    useEffect(() => {
     

     
        return () => {
       
           
        };
      
    }, [props.boxesRemaining]);
    return (
        <div>
            <div className='game__wrapper'>
            <div className='game__wrapper--header'>
                 <div>
                    <button onClick={() => props.settutorial(true)}>Back Home</button> <button onClick={() => props.setboxesRemaining(1)}>Reset Game</button>
                 </div>
                 <div className='header__info'>
                   <ul>
                       <li>Level <span>{props.boxesRemaining}</span></li>
                       <li>Boxes <span id='r-b'>{props.remainingBoxes}</span></li>
                       <li>Lives <span>0</span></li>
                       <li>Time <span>3</span></li>
                   </ul>
                 </div>
            </div>
               <GameBody number={props.number} boxesRemaining={props.boxesRemaining} setboxesRemaining={props.setboxesRemaining} setGameOver={props.setGameOver} setHighScore={props.setHighScore} setremainingBoxes={props.setremainingBoxes}/>
            </div>
        </div>
    );
}

export default React.memo(GameWrapper);
