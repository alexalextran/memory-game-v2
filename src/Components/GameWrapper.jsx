import React, { useEffect, useState } from 'react';
import GameBody from './GameBody';
import { useTransition, animated } from 'react-spring';
import { FaHeart } from 'react-icons/fa';

const GameWrapper = (props) => {
    useEffect(() => {
        stop()
      start()
    
      return () => {
        stop()
        props.setseconds(String(sec))
      }
      
    },[])

    
var sec = 0
var timerOn = 0
var msecVar
  
    const transition = useTransition(props.remainingBoxes, {
        from:{x: 0, y: -10, opacity: 0},
        enter:{x: 0, y: 0, opacity: 1},
        laeve:{x: 0, y: 10, opacity: 0},
       
    })
    const transition1 = useTransition(props.boxesRemaining, {
        from:{x: 0, y: -10, opacity: 0},
        enter:{x: 0, y: 0, opacity: 1},
        laeve:{x: 0, y: 10, opacity: 0},
    })

    //timer function
function setSec() {
    sec = sec + 1;
    props.setseconds(String(sec))
    msecVar = setTimeout(setSec, 1000);
    if(document.getElementById("sec") != null){
        document.getElementById("sec").innerHTML = `<span>${sec}</span>`
    }
    else{
        return
    }
    
    
}

function start() {
  if (!timerOn) {
    timerOn = 1;
    setSec();
  }
}

function stop() {
    clearTimeout(msecVar);
    timerOn = 0;
  }
   

 
    return (
        <div>
            <div className='game__wrapper'>
            <div className='game__wrapper--header'>
                 <div>
                    <button onClick={() => props.settutorial(true)}>Back Home</button>
                 </div>
                 <div className='header__info'>
                   <ul>

                       <li>
                           Level
                           {transition1((style, item) =>
                           <animated.span style = {style}> 
                            {props.boxesRemaining}
                           </animated.span>
                           )}
                           </li>

                       <li>
                           Boxes 
                           {transition((style, item) =>
                           <animated.span style = {style} > 
                            {props.remainingBoxes}
                           </animated.span>
                           )}
                       </li>

                       <li>Lives <span className='hearts'>
                            <FaHeart style={{fill: "red"}} className="heart"/>
                            <FaHeart style={{fill: "red"}} className="heart"/>
                            <FaHeart style={{fill: "red"}} className="heart"/>
                   
                           </span></li>
                       <li>Time <span id="sec">3</span></li>
                   </ul>
                 </div>
            </div>
               <GameBody number={props.number} boxesRemaining={props.boxesRemaining} setboxesRemaining={props.setboxesRemaining} setGameOver={props.setGameOver} setHighScore={props.setHighScore} setremainingBoxes={props.setremainingBoxes} />
            </div>
        </div>
    );
}

export default React.memo(GameWrapper);
