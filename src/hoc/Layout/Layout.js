import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import DateHeader from '../../components/DateHeader/DateHeader';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
import Calender from '../../containers/Calender/Calender';
import WorkoutLists from '../../components/WorkoutLists/WorkoutLists';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import Summary from '../../components/Summary/Summary';

import imgPic2 from '../../assets/Images/img7.avif';
import imgPic3 from '../../assets/Images/img5.avif';
import imgPic1 from '../../assets/Images/img6.avif'; 

import './Layout.css'


class Layout extends Component {
    state ={
        summary: false,
        beginner: 'Beginner',
        intermediate: 'Intermediate',
        advanced: 'Advanced',
        imgPic1,
        imgPic2,
        imgPic3
    }

    summaryHandler = () => {
        this.setState( { summary: true } );
    }

    summaryCancelHandler = () => {
        this.setState( { summary: false } );
    }


    render () {
        return (
        <Aux>
            <DateHeader />
                <Modal show={this.state.summary} modalClosed={this.summaryCancelHandler}>    
                    <Summary />
                </Modal>

                <NavigationItems />
                <Calender />
                    <WorkoutLists 
                    ordered={this.summaryHandler}
                    beginner={this.state.beginner}
                    imgPic1={this.state.imgPic1}
                    intermediate={this.state.intermediate}
                    imgPic2={this.state.imgPic2}
                    advanced={this.state.advanced}
                    imgPic3={this.state.imgPic3}/>

                <Button 
                click={this.summaryHandler}>
                    <span className='fa fa-wpforms'></span> &nbsp; Adjust the order</Button>
                <Button 
                click={this.summaryHandler}>
                    <span className='fa fa-compass'></span> &nbsp; Discover. More workouts</Button>
                <Footer />
        </Aux>
        )
    }
}

export default Layout;