import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';
import useToggle from '../CustomHooks/UseToggle';

const Tutorial = (props) => {

    const { logout, currentUser } = useAuth()
    const navigate = useNavigate()

    function change(){
        props.settutorial(false)
    }
   
    

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
        <section className='tutorial'>
             <div className='tutorial__info'>
      
      <h2>Welcome <span>{currentUser.displayName}</span> to Memory Game V2!</h2>
      <img src={currentUser.photoURL}></img>
      <button onClick={handleLogout}>Logout</button>

      <div>
        <h4>Hey, thanks for checking out the new version of MG</h4>
        <p>For any new players, there is a tutorial provided below!</p>

        <div>
            gif
        </div>

        <button onClick={change}>
            I know how to play
        </button>


      </div>
  </div>
        </section>
    );
}

export default Tutorial;
