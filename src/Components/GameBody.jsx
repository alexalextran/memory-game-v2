import React, { useEffect, useState } from 'react';
import Box from './Box';
import ReactDOM from 'react-dom';

const Gamebody = (props) => {
  const [boxesRemaining, setboxesRemaining] = useState(1)
  var stopfunction = true;

  useEffect(() => {
    clickable(false);
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
    

    function handleClick (event){

      //disable onclick if the boxes are still playing selected animation
     
      if(selectedBoxes.includes(parseInt(event.target.id.slice(4)))){
        (document.getElementById(`box ${event.target.id.slice(4)}`).style.pointerEvents = "none");
        (document.getElementById(`box ${event.target.id.slice(4)}`).style.backgroundColor = "green")
      

        var index = selectedBoxes.findIndex(selectedBox => selectedBox === (parseInt(event.target.id.slice(4))));
        selectedBoxes.splice(index, 1);
      }
      else{
        (document.getElementById(`box ${event.target.id.slice(4)}`).style.backgroundColor = "red")
      }

        if(selectedBoxes.length === 0){

          clickable(false);

          setTimeout(() => {
            setboxesRemaining(boxesRemaining + 1)
          }, "1000")

         
         }
 
    }

 
  
  function startGame(){



    
//chosen all boxes and ensure that are chosen boxes are unique 
    while(selectedBoxes.length !== boxesRemaining){
      if(selectedBoxes.length === gridNumber){
        props.setrun(false)
        console.log("game over u won")
        return
      }
        var random = Math.ceil((Math.random()*gridNumber))
        //only includes box if not already chosen
      if (!(selectedBoxes.includes(random))){
         selectedBoxes.push(random)   
      }
    }


  //gives time for previous boxes to reset anmations and plays the selected animation for all chosen boxes after one second
 setTimeout(() => {
    selectedBoxes.forEach(box => ReactDOM.findDOMNode(document.getElementById(`box ${box}`)).style.animationName = "selected")
  }, "1000")

  //executes after selected animation plays
  setTimeout(() => {

    //allows users to click 
    clickable(true);
   

    
  }, "2500")

  

  

  }

function clickable(click){
  if(click === true){
    Array.from(document.getElementsByClassName("box")).forEach(box => {
      box.style.pointerEvents = "all"
      box.style.cursor = "pointer"
    })
  } else{
    Array.from(document.getElementsByClassName("box")).forEach(box => {
    box.style.cursor = "auto"
    box.style.pointerEvents = "none"
  })

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
