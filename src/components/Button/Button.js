import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';

import './Button.css';

const button = ( props ) => (
    <Aux>
        <button className='Button' onClick={props.click}>
            {props.children}
        </button>
    </Aux>
)

export default button;

