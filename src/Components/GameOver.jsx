import React, { useState } from 'react';
import { useAuth } from '../Contexts/AuthContext';
import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from 'firebase/firestore/lite';

const GameOver = (props) => {
   const { currentUser } = useAuth()
   const db = getFirestore();
   const docRef = doc(db, `users`, `${currentUser.uid}`);
   const [loading, setLoading] = useState(true)
   const [newScore, setnewScore] = useState(false)
   const [disable, setDisable] = useState(false)
   
 //get firestore document

   getDoc(docRef)
    .then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.data().Level)
   
            if (snapshot.data().Level < props.highscore.level) {
                setnewScore(true) 
            } 
       
        } else{
            setnewScore(true)
            console.log("does not exist")
        }
        setLoading(false)
    })
    
    function addHighScore(){
        setDoc(doc(db, "users", `${currentUser.uid}`),{
            Level: props.highscore.level,
            Time: props.highscore.time
        })
        console.log("highscore added")
    }


    return (
        <>
        {
            loading ?
            <div>
                loading
            </div>
            :
        <div className='gameOver'>
            <h1>Game Over</h1>
            <p>Nice Job, you got up to level {props.highscore.level} with a time of {props.highscore.time} seconds</p>
            {
                newScore ?
                <>
                    <p>Woah you got a new highscore! would you like to update your highscore?</p>
                    <button className='button' disabled={disable} onClick={() => {
                        addHighScore()
                        setDisable(true)
                    }}>Update</button>    </>
                 :
                 <>
                <p>No new highscore</p>
                </>
                   

            }

        </div>
        }
        </>

    );
}

export default GameOver;
