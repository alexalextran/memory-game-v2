import React from 'react';
import { useAuth } from '../Contexts/AuthContext';
import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore";

const GameOver = (props) => {
   const { currentUser } = useAuth()
   const db = getFirestore();
   const docRef = doc(db, `users`, `${currentUser.uid}`);
   var newScore = false;
   
 //get firestore document

   getDoc(docRef)
    .then((snapshot) => {
        if (snapshot.exists()) {
       console.log(snapshot.data() )
        } else{
            newScore = true;
            console.log("does not exist")
        }
    })
    


    return (
        <div className='gameOver'>
            <h1>Game Over</h1>
            <p>Nice Job, you got up to level {props.highscore.level} with a time of {props.highscore.time} seconds</p>

            
        </div>
    );
}

export default GameOver;
