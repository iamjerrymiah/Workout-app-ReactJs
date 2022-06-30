import React from 'react';

import './Footer.css';

const footer = ( props ) => (
    <ul className='Footer'>
        <a><span className='fa fa-clock-o fa-2x'></span> 
        <p>Classic</p></a>
        <a><span className='fa fa-compass fa-2x'></span>
        <p>Discover</p></a>
        <a><span className='fa fa-wpforms fa-2x'></span>
        <p>Personal</p></a>
        <a><span className='fa fa-calendar fa-2x'></span>
        <p>Daily</p></a>
        <a><span className='fa fa-user fa-2x'></span>
        <p>Me</p></a>
    </ul>
)

export default footer;