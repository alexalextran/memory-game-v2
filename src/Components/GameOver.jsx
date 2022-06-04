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
   const tipsarray = [
       "As each level goes on the time that each box is shown by increases by 85 miliseconds",
       "The max level you can reach for each gridnumber you choose is (gridnumber - 2) so if your grid is 9 squares the max level is 7 (this is because you can't lose once you reach level 7",
       "The gridsystem allows for high risk high reward since while it is easier to play using a smaller gridnumber, you are limited in the highscore you can reach"
    ]
  
 //get firestore document

 useEffect(() => {
   console.log(tipsarray)
    getDoc(docRef)
    .then((snapshot) => {
        if (snapshot.exists()) {
            sethighestLevel(snapshot.data().Level)
            sethlTime(snapshot.data().Time)
            if (parseInt(snapshot.data().Level) < parseInt(props.highscore.level)) {
                addHighScore()
                setnewScore(true) 
            } 
        } else{
            setnewScore(true)
        }
        setLoading(false)
    })
 

   
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
            <>
            <div className='tips'>
                <p>Tips and Hints</p>
                {tipsarray[Math.floor(Math.random() * tipsarray.length)]}
            </div>
            <div className='gameOver'>
            <span className='gameover__title'>Game Over</span>
            <div>
                <p>Nice Job, you got up to level <span>{props.highscore.level}</span> with a time of <span>{props.highscore.time}</span> seconds</p>
            <Link to="/leaderBoard" className="button">LeaderBoard</Link>
            </div>
            
            {
                newScore ?
                <div>
                    <p>Woah you beat your highscore (your highscore has been updated)</p>
                    <button onClick={() => window.location.reload()} className="button">Retry</button>
                </div>
                 :
            
                 <div>
                <p>Your current highest level is <span>{highestLevel} </span>with a time of <span>{hlTime}</span> seconds</p>
                <button onClick={() => window.location.reload()} className="button">Retry</button>
                </div>
        

            }

        </div>
        </>
        }
        </>

    );
}

export default GameOver;
