import React from 'react';

import './NavigationItems.css';

const navigationItems = (props) => (
    <ul className="NavigationItems">
        <a className='active'>Recent</a>
        <a>My Plan</a>
        <a>Beginner</a>
        <a>Intermediate</a>
        <a>Advanced</a>
    </ul>
);

export default navigationItems;