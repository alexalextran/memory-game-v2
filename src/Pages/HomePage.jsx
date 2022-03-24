
import React, { useState } from 'react';
import Game from '../Components/Game';
import Tutorial from '../Components/Tutorial';




const Homepage = () => {
 const [tutorial, settutorial] = useState(true);

    return (
        <section>
        {
          tutorial ?
          <Tutorial settutorial={settutorial}/> : <Game />

        }
       
            
        </section>
    );
}

export default Homepage;
