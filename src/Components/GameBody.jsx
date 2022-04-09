import React from 'react';
import Box from './Box';

const Gamebody = (props) => {
    var box = new Array(parseInt(props.number) * parseInt(props.number)).fill(0);
    console.log(box.length)
    console.log(parseInt(props.number))
  
  
 

    return (
        <div id='gamebody' style={{ gridTemplateColumns: `repeat(${props.number}, 1fr)`, gridGap: `${4/ props.number}rem`  }}>
            {
                box.map((element, index) => <Box number={props.number} key={index}/>)
            }
        </div>
    );
    
}

export default Gamebody;
