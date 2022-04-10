import React from 'react';

const Box = (props) => {
    var color = props.selected ? "green" : "rgb(0,162,226)"

  
    return (
       
        <div className='box' id={`box ${props.boxnumber}`} style={{ height: `${30 / props.number}em ` , width: `${30 / props.number}em ` , backgroundColor: `${color}`}} >
            
        </div>
    );
}

export default Box;
