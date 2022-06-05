import React, { useEffect } from "react";
import Box from "./Box";
import ReactDOM from "react-dom";

const Gamebody = (props) => {
  var lives = 3;
  var difficultyscale = 100;

  useEffect(() => {
    //when new level is started, remove clickability and execute startgame function
    clickable(false);
    startGame();
   
   
 

    return () => {
      //when level finished reset all bg's and animations
      Array.from(document.getElementsByClassName("box")).forEach((box) => {
        box.style.backgroundColor = "rgb(0,162,226)";
        box.style.animation = "";
      });
    };

    //update vitrual dom (start new level) when boxesRemaning is changed
  }, [props.boxesRemaining]);

  var gridNumber = parseInt(props.number) * parseInt(props.number);
  var box = new Array(gridNumber).fill(0);
  var selectedBoxes = [];

  //onclick for each box
  function handleClick(event) {
    //check if box is correct
    if (selectedBoxes.includes(parseInt(event.target.id.slice(4)))) {
      //disables clicability if box is chosen and changes bg to green if correct box
      document.getElementById(
        `box ${event.target.id.slice(4)}`
      ).style.pointerEvents = "none";
      document.getElementById(
        `box ${event.target.id.slice(4)}`
      ).style.backgroundColor = "rgb(46,204,113)";

      // find the index of the click box and remove it from the array
      var index = selectedBoxes.findIndex(
        (selectedBox) => selectedBox === parseInt(event.target.id.slice(4))
      );
      selectedBoxes.splice(index, 1);
      props.setremainingBoxes(selectedBoxes.length);
    } else {
      // if box is not correct, change bg to red
      document.getElementById(
        `box ${event.target.id.slice(4)}`
      ).style.pointerEvents = "none";
      document.getElementById(
        `box ${event.target.id.slice(4)}`
      ).style.backgroundColor = "rgb(242,98,97)";
      
     
      lives--;
     document.getElementsByClassName("heart")[lives].style.fill = "black"
     document.getElementsByClassName("heart")[lives].style.animation = `heartloss 750ms ease-in`
     if(lives == 1){
      document.getElementsByClassName("heart")[0].style.animation = `heartloss 750ms infinite 750ms ease-in`
     }

      if (lives === 0) {
        endGame();
      }
    }

    //if all boxes chosen remove clickability and increment chosen boxes by one (increase level by one)
    if (selectedBoxes.length === 0) {
      clickable(false);

      //check if max number of boxes reached (win condition)
      if (props.boxesRemaining === gridNumber -2) {
        endGame();
      }

      //gives time for boxes to clear
      setTimeout(() => {
        props.setboxesRemaining(props.boxesRemaining + 1);
      }, "1000");
    }
  }

  function startGame() {
    Array.from(document.getElementsByClassName("heart")).forEach((heart) => {
      heart.style.fill = "red";
      heart.style.animationName = "none";
    });

    //chosen all boxes and ensure that are chosen boxes are unique
    while (selectedBoxes.length !== props.boxesRemaining) {
      var random = Math.ceil(Math.random() * gridNumber);

      //only includes box if not already chosen
      if (!selectedBoxes.includes(random)) {
        selectedBoxes.push(random);
      }
    }

    props.setremainingBoxes(selectedBoxes.length);

    //gives time for previous boxes to reset anmations and plays the selected animation for all chosen boxes after one second
    setTimeout(() => {
      selectedBoxes.forEach(
        (box) =>
          (ReactDOM.findDOMNode(
            document.getElementById(`box ${box}`)
          ).style.animation = `selected ${1000 + props.boxesRemaining*difficultyscale}ms ease-in`)
      );
    }, `${1000}`);

    //executes after selected animation plays
    setTimeout(() => {
      clickable(true);
    }, `${2000 +  props.boxesRemaining*difficultyscale}`);
  }

  //either allows users to click or not to click
  function clickable(click) {
    if (click === true) {
      Array.from(document.getElementsByClassName("box")).forEach((box) => {
        box.style.pointerEvents = "all";
        box.style.cursor = "pointer";
      });
    } else {
      Array.from(document.getElementsByClassName("box")).forEach((box) => {
        box.style.cursor = "auto";
        box.style.pointerEvents = "none";
      });
    }
  }

  function endGame() {
    props.setHighScore({
      level: `${props.boxesRemaining}`,
      time: `${200}`,
    });
    props.setGameOver(true);
  }

  return (
    <div
      id="gamebody"
      style={{
        gridTemplateColumns: `repeat(${props.number}, 1fr)`,
        gridGap: `${4 / props.number}rem`,
      }}
    >
      {box.map((element, index) => (
        <Box
          number={props.number}
          key={index}
          boxnumber={index + 1}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default React.memo(Gamebody);

