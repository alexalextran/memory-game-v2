import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../Contexts/AuthContext';

const Loginpage = () => {
    const { signInWithGoogle, currentUser } = useAuth()
    const [loading, setloading] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {   
    }, [currentUser])
    

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
    
        <div className='card'>
            <h2>Memory Game V2</h2>
            <p>Since V2 of MG uses a leaderboard, please feel free to login using google authentication, or login as a <a>guest</a> alternatively</p>
            <button disabled={loading} onClick={GoogleLogIn}>Log In</button>
        </div>
        
   

   
        </section>
    );
}

export default Loginpage;
