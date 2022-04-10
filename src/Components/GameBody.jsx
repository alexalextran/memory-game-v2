import React, { useState } from 'react';
import Box from './Box';
import ReactDOM from 'react-dom';

const Gamebody = (props) => {
    var gridNumber = parseInt(props.number) * parseInt(props.number)
    var box = new Array(gridNumber).fill(0);
    var start = props.run
    var selectedBoxes = new Array()
    var boxesRemaining = 0
    
  
  while(start != false){
    boxesRemaining++



    while(selectedBoxes.length != boxesRemaining){
        var random = Math.ceil((Math.random()*gridNumber - 1))
      if (!(selectedBoxes.includes(random))){
         selectedBoxes.push(random)   
      }
    }

    
    

    if(boxesRemaining == 4 /*gridNumber*/){
        start = false
        console.log(selectedBoxes)
    }
if(selectedBoxes.length != 0){
  selectedBoxes.forEach(box => ReactDOM.findDOMNode(document.getElementById(`box ${box}`)).style.animationName = "selected")
} 
   
  }

 


 

    return (
        <div id='gamebody' style={{ gridTemplateColumns: `repeat(${props.number}, 1fr)`, gridGap: `${4/ props.number}rem`  }}>
            {
                box.map((element, index) => <Box number={props.number} key={index} boxnumber={index}/>)
            }
        </div>
    );
    
}

export default Gamebody;
