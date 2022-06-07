import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';
import useToggle from '../CustomHooks/UseToggle';
import tutorial_gif from '../assets/tutorial_gif.gif'
import { Link} from 'react-router-dom';

const Tutorial = (props) => {

    const { logout, currentUser } = useAuth()
    const navigate = useNavigate()

    async function handleLogout(){
        try{
          await logout()
          navigate("/login");
        }catch(e){
          console.log(e)
          window.alert("Failed to logout!")
        }
      }

  

    return (
      <div className='wrapper'>
        <section className='tutorial'>
             <div className='tutorial__info'>
             <img className='tutorial__userpic' src={currentUser.photoURL}></img>
      
      <h2>Welcome <span>{currentUser.displayName}</span> to Memory Game V2!</h2>
  
      <button onClick={handleLogout}>Logout</button>

      <div>
        <h4>Hey, thanks for checking out the new version of MG</h4>
        <p>For any new players, there is a tutorial provided below!</p>

        <div className='tutorial__gif'>
            <img src={tutorial_gif}></img>
        </div>

        <div className='tutorial__gridnumber'>
          <p>Please Enter a desired number below, this will determine how big your grid will be, so if you put 5, your grid will be 5 by 5 <br></br>(note default is 6, min is 3 and max is 10)</p>
          <input  onChange={event =>
          {
            if(event.target.value > 10 || event.target.value < 3){
              props.setnumber(3)
            } else{
              props.setnumber(event.target.value)
            }
          }} ></input>

          <div>
          <button onClick={() => {props.settutorial(false)}}>
            Start Game
        </button>

        <Link to="/leaderBoard" className="button">LeaderBoard</Link>
        </div>
          

        </div>

      

     
       

      </div>
  </div>
        </section>
        </div>
    );
}

export default Tutorial;
