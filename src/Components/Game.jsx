import React, { useState } from 'react';
import Gamebody from './GameBody';

const Game = (props) => {
    const [run, setrun] = useState(false);
   
    return (
        <div>
            <div className='game__wrapper'>
            <div className='game__wrapper--header'>
                 <div>
                    <button onClick={() => props.settutorial(true)}>Back Home</button> <button onClick={() => setrun(true)}>Start Game</button>
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
               <Gamebody number={props.number} run={run} setrun={setrun}/>
            </div>
        </div>
    );
}

export default Game;