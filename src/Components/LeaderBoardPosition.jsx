import React from 'react';

const LeaderBoardPosition = (props) => {
    return (
        <div className='leaderboard__position'>
            
             
             <span> Positon {props.position} </span>
            
             <p>by {props.name} </p>
            
             <p>with {props.level} </p>
          
          <p>and a time of {props.time}</p>
        </div>
    );
}

export default LeaderBoardPosition;
