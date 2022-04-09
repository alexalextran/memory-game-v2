import React from 'react';

const Box = (props) => {
    return (
        <div className='box' style={{ height: `${30 / props.number}em ` , width: `${30 / props.number}em `}} >
            
        </div>
    );
}

export default Box;
