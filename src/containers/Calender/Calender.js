import React, { Component } from 'react';

import './Calender.css';

class Calender extends Component {
    state = {
        currentMonth: new Date().getMonth(),
        currentYear: new Date().getFullYear(),
        currentDate: new Date().getDate(),
        currentDay: new Date().getDay(),
        currentHour: new Date().getHours(),
        currentMinute: new Date().getMinutes(),
        currentSecounds: new Date().getSeconds()
    }

    dayDetermineHandler = () => {
        if(this.state.currentDay === 1) {
            return 'Monday'
        }
        if(this.state.currentDay === 2) {
            return 'Tuesday'
        }
        if(this.state.currentDay === 3) {
            return 'wednesday'
        }
        if(this.state.currentDay === 4) {
            return 'Thursday'
        }
        if(this.state.currentDay === 5) {
            return 'Friday'
        }
        if(this.state.currentDay === 6) {
            return 'Saturday'
        }
        if(this.state.currentDay === 7) {
            return 'Sunday'
        }
    };

    render() {
        return(
            <div className="bg">
            <h4 className='h3Div'>Weekly Active Days <span className='fa fa-calendar'></span></h4>
        <div className="date">
            <div id="month">Month: {this.state.currentMonth}</div>
            <div id="date">Date: {this.state.currentDate}</div>
            <div id="year">Year: {this.state.currentYear}</div>
            <div id="day">Day: {this.dayDetermineHandler()}</div>
        </div>
        <div className="time">
            <div id="hours">Hour: {this.state.currentHour}</div>
            <div id="minutes">Minute: {this.state.currentMinute}</div>
            <div id="seconds">Second: {this.state.currentSecounds}</div>
            <div id="ampm">AM/PM</div>
        </div>
    </div>
        )
    }
}

export default Calender;