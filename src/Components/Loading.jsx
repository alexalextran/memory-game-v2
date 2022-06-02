import React from 'react';
import punpun from '../assets/punpun-transparent.png'
const Loading = () => {
    return (
        <div className='loadingAnimation'>
            <img src={punpun}></img>
            <h2>Loading...</h2>
        </div>
    );
}

export default Loading;
