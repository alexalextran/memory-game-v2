import userEvent from '@testing-library/user-event';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';


const Homepage = () => {
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
        <section>
        <div>
      
            <h2>Welcome {currentUser.displayName} to Memory Game V2!</h2>
            <img src={currentUser.photoURL}></img>
            <button onClick={handleLogout}>Logout</button>
        </div>
            
        </section>
    );
}

export default Homepage;
