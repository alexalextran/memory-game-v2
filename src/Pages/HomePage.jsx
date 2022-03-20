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
        <div>
            {JSON. stringify(currentUser)}
            <h2>{currentUser.displayName}</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Homepage;
