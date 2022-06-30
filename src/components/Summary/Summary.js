import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Button from '../Button/Button';
import modalPic3 from '../../assets/Images/modaPic3.WEBP';
import './Summary.css';

class Summary extends Component {
    alertMessageHandler = () => {
        alert('More to Come!!')
    }

    render() {
        return (
            <Aux>
                <div className='Summary'>
                    <h2>What needs to be done?</h2>
                <span>
                “No matter how slow you go you're still lapping everyone on the couch.” 
                “To keep the body in good health is a duty… otherwise we shall not be able to keep our mind strong and clear.” 
                “When it comes to eating right and exercising, there is no 'I'll start tomorrow'.” 
                “It never gets easier, you just get better.”
                </span>
                    <img src={modalPic3} alt='pic'/>
                    <Button click={this.alertMessageHandler}>Get Started</Button>
                </div>
            </Aux>
        )
    }
}

export default Summary;