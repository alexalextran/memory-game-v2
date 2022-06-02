import React, { useEffect, useState } from 'react';
import { useAuth } from '../Contexts/AuthContext';
import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from 'firebase/firestore/lite';
import { Link} from 'react-router-dom';
import Loading from './Loading';

const GameOver = (props) => {
   const { currentUser } = useAuth()
   const db = getFirestore();
   const docRef = doc(db, `users`, `${currentUser.uid}`);
   const [loading, setLoading] = useState(true)
   const [newScore, setnewScore] = useState(false)
   const [disable, setDisable] = useState(false)
   const [highestLevel, sethighestLevel] = useState(0)
   const [hlTime, sethlTime] = useState(0)
  
 //get firestore document

 useEffect(() => {
    getDoc(docRef)
    .then((snapshot) => {
        if (snapshot.exists()) {
            sethighestLevel(snapshot.data().Level)
            sethlTime(snapshot.data().Time)
    
            if (snapshot.data().Level < props.highscore.level) {
                addHighScore()
                setnewScore(true) 
            } 
       
        } else{
            setnewScore(true)
        }
        setLoading(false)
    })
    console.log("api called")

   
 }, []);


  
    
    function addHighScore(){
        setDoc(doc(db, "users", `${currentUser.uid}`),{
            Level: props.highscore.level,
            Time: props.highscore.time,
            Name: currentUser.displayName,
            ProfilePic: currentUser.photoURL
        })
        console.log("highscore added")
    }

   

    return (
        <>
        {
            loading ?
           <Loading />
            :
        <div className='gameOver'>
            <h1>Game Over</h1>
            <p>Nice Job, you got up to level {props.highscore.level} with a time of {props.highscore.time} seconds</p>
            <Link to="/leaderBoard" className="button">LeaderBoard</Link>
            {
                newScore ?
                <div>
                    <p>Woah you got a new highscore</p>
                    <p>Your highscore has been updated</p>
                      </div>
                 :
                 <>
                 <br></br>
                 <div>
                <p>Your current highest level is {highestLevel} with a time of {hlTime} seconds</p>
                </div>
                   </>

            }

        </div>
        }
        </>

    );
}

export default GameOver;
