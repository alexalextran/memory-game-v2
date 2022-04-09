import React from 'react';

const Game = () => {
    return (
        <div>
            <div className='game__wrapper'>
            <div className='game__wrapper--header'>
                 <div>
                    <button>Back Home</button>
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
               
            </div>
        </div>
    );
}

export default Game;
