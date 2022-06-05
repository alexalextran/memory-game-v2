
import React, { useState } from 'react';
import Game from '../Components/Game';
import Tutorial from '../Components/Tutorial';




const Homepage = () => {
 const [tutorial, settutorial] = useState(true);
const [number, setnumber] = useState(3);

    return (
        <section>
        {
          tutorial ?
          <Tutorial settutorial={settutorial} setnumber={setnumber}/> : <Game settutorial={settutorial} number={number}/>

        }
       
            
        </section>
    );
}

export default Homepage;
