import React, { useEffect, useState } from 'react';
import Box from './Box';
import ReactDOM from 'react-dom';

const Gamebody = (props) => {
  const [boxesRemaining, setboxesRemaining] = useState(1)

  useEffect(() => {
    startGame()
   
    return() => {
      Array.from(document.getElementsByClassName("box")).forEach(box => {
        box.style.backgroundColor = "rgb(0,162,226)"
        box.style.animationName = "none"
      })
        
    }
    
  }, [boxesRemaining])

  
  


    var gridNumber = parseInt(props.number) * parseInt(props.number)
    var box = new Array(gridNumber).fill(0);
   
    var selectedBoxes = new Array()
    

    const handleClick = (event) =>{
      if(selectedBoxes.includes(parseInt(event.target.id.slice(4)))){
        (document.getElementById(`box ${event.target.id.slice(4)}`).style.backgroundColor = "green")

        var index = selectedBoxes.findIndex(selectedBox => selectedBox == (parseInt(event.target.id.slice(4))));
        selectedBoxes.splice(index, 1);
      }

        if(selectedBoxes.length == 0){
          setTimeout(() => {
            setboxesRemaining(boxesRemaining + 1)
          }, "2000")
      
         }
 
    }

 
  
  function startGame(){
    

    while(selectedBoxes.length != boxesRemaining){
        var random = Math.ceil((Math.random()*gridNumber))
      if (!(selectedBoxes.includes(random))){
         selectedBoxes.push(random)   
      }
    }

    
    console.log(selectedBoxes)


if(selectedBoxes.length != 0){
  setTimeout(() => {
    selectedBoxes.forEach(box => ReactDOM.findDOMNode(document.getElementById(`box ${box}`)).style.animationName = "selected")
  }, "2000")
  
}   
  }


  


 

    return (
        <div id='gamebody' style={{ gridTemplateColumns: `repeat(${props.number}, 1fr)`, gridGap: `${4/ props.number}rem`  }}>
            {
                box.map((element, index) => <Box number={props.number} key={index} boxnumber={index+1} handleClick={handleClick}/>)
            }
        </div>
    );
    
}

export default Gamebody;
