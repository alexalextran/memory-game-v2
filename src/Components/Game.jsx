import React from 'react';
import Gamebody from './GameBody';

const Game = (props) => {
    
    return (
        <div>
            <div className='game__wrapper'>
            <div className='game__wrapper--header'>
                 <div>
                    <button onClick={() => props.settutorial(true)}>Back Home</button>
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
               <Gamebody number={props.number}/>
            </div>
        </div>
    );
}

export default Game;
