import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import punpun from '../assets/punpun-transparent.png'
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
            <h2>Welcome to Memory Game V2!</h2>

            <img src={punpun}></img>
            <p>Memory Game has been completely reworked from the ground up with react, so what does this mean for the game as a whole?</p>
            <h4>Several New Features Including</h4>

            <ul>
            <li>LEADERBOARDS to compare time and level</li>
            <li>More responsive squares, no more buggy clicks</li>
            <li>Cuztomizable grid, you aren't restricted to 6 by 6 anymore</li>
            <li>Difficulty Scaling, squares are shown for longer as the game goes on</li>
            <li>Adjustable screen sizes, the game shouldn't look weird on different screens anymore</li>
            <li>Secure authentication, (no i don't have access to your data, its handled by google and firebase)</li>
            </ul>
           
           <div className="buttons">
               <button disabled={loading} onClick={GoogleLogIn}>Log In</button>
            <Link to="/leaderBoard" className="button">LeaderBoard</Link>
           </div>
            
        </div>
        
   

   
        </section>
    );
}

export default Loginpage;
