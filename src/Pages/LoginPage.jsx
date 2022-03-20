import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../Contexts/AuthContext';

const Loginpage = () => {
    const { signInWithGoogle, currentUser } = useAuth()
    const [loading, setloading] = useState(false);
    const navigate = useNavigate()

    async function GoogleLogIn(e){
        e.preventDefault()

        try{
            setloading(true)
         await signInWithGoogle()
         navigate("/");

        } catch{
            window.alert("Failed To sign in!")
        }
        setloading(false)
        
    }
   
    return (
     <section className='signup' >
    
     
        <button disabled={loading} onClick={GoogleLogIn}>Log In</button>
   

   
        </section>
    );
}

export default Loginpage;
