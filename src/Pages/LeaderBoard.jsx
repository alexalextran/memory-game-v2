import { collection, getDocs, getFirestore, setLogLevel } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeaderBoardPosition from '../Components/LeaderBoardPosition';



const LeaderBoard = () => {
    const db = getFirestore()
    const colRef = collection(db, 'users')
   
    const [sortedUserScores, setsortedUserScores] = useState([])
    var userScores = []
  

    useEffect(() => {
        getDocs(colRef)
        .then((snapshot) => {
        
            snapshot.docs.forEach((doc) => {
                userScores.push({
                    ...doc.data(), id: doc.id
                })
            })
         
            setsortedUserScores(userScores.sort((a, b) => (parseInt(a.Level) < parseInt(b.Level)) ? 1 : (a.color === b.color) ? ((parseInt(a.Time) > parseInt(b.Time)) ? 1 : -1) : -1 ))
           
            })
            .catch(err => {
                console.log(err.message)
        })
    }, [])
    

  
    

       
        
     
    
    
 
    return (
        <>
        <div className='leaderboard'>
            leaderboard
            <div>
            {sortedUserScores.map((user, index) => (
        <LeaderBoardPosition
          position= {index}
          level = {user.Level}
          time = {user.Time}
        />
      ))}
            </div>
            <Link to="/" className="button">Back Home</Link>
        </div>
        </>
            
    );
}


export default LeaderBoard;
