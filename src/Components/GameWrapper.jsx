import React, { useEffect } from 'react';
import GameBody from './GameBody';
import ReactDOM from "react-dom";
import { useTransition, animated } from 'react-spring';


const GameWrapper = (props) => {
    const transition = useTransition(props.remainingBoxes, {
        from:{x: 0, y: 10, opacity: 0},
        enter:{x: 0, y: 0, opacity: 1},
        laeve:{x: 0, y: -10, opacity: 0},
    })

 
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
                       <li>Boxes 
                           {transition((style, item) =>
                           
                           <animated.div style = {style} id="r-b"> 
                            {props.remainingBoxes}
                           </animated.div>
                           
                           )}
                         
                       </li>
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
