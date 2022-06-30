import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import WorkoutList from './WorkoutList/WorkoutList';
import './WorkoutLists.css';

class WorkoutLists extends Component {
    render() {
        return (
    <Aux>
        <h2 className='h3Tag'>Classic Workouts</h2>
        <WorkoutList 
        level={this.props.beginner}
        picture={this.props.imgPic1}
        ordered={this.props.ordered}/>
        <WorkoutList 
        level={this.props.intermediate}
        picture={this.props.imgPic2}
        ordered={this.props.ordered}/>
        <WorkoutList 
        level={this.props.advanced}
        picture={this.props.imgPic3}
        ordered={this.props.ordered}/>
    </Aux>
        )
    }
}

export default WorkoutLists;