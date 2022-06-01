import React from 'react';

const LeaderBoardPosition = (props) => {
    
    return (
        
        <div className='leaderboard__position'>
            <div>
             <img src = {props.image}></img>
             </div>

             <div>
             <p> Positon <span>{props.position + 1} </span> by <span>{props.name}</span> reached level <span>{props.level}</span> and a time of <span>{props.time}</span></p>
          </div>
         
        </div>
     
    );
}

export default LeaderBoardPosition;
