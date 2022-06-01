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
         
            setsortedUserScores(userScores.sort((a, b) => (parseInt(a.Level) < parseInt(b.Level)) ? 1 : (a.Level === b.Level) ? ((parseInt(a.Time) > parseInt(b.Time)) ? 1 : -1) : -1 ))
           
            })
            .catch(err => {
                console.log(err.message)
        })
    }, [])
    

  
    

       
        console.log(sortedUserScores)
     
    
    
 
    return (
        <div className='leaderboard__wrapper'>
               <span className='leaderboard__title'>LeaderBoard</span>
        <div className='leaderboard'>
          

           
         
          
            {sortedUserScores.map((user, index) => (
        <LeaderBoardPosition
          key={index}
          position= {index}
          image = {user.ProfilePic}
          name={user.Name}
          level = {user.Level}
          time = {user.Time}
        />
      ))}
           
            <Link to="/" className="button">Back Home</Link>
        
        </div>
        </div>
       
            
    );
}


export default LeaderBoard;
