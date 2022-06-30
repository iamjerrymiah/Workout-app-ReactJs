import React from "react";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import imgPic from "../../../assets/Images/img2.jpg";
import imgPic2 from "../../../assets/Images/img2.png";
import imgPic3 from "../../../assets/Images/img1.png";
import imgPic4 from "../../../assets/Images/img1.jpg";
import imgPic5 from "../../../assets/Images/img6.webp";


import './WorkoutList.css';

const workoutList = ( props ) => (
    <Aux>
        <div className="WorkoutList">
            <div>
            <img className="topImage" src={props.picture} alt="pic" onClick={props.ordered}/>
            <h4 className="WorkoutH4">5 Workouts</h4>
            <h2 className="WorkoutH2">{props.level}</h2>
            </div>
            <div className="WorkoutLine" 
            onClick={props.ordered}>
                <img src={imgPic4} alt="pic" 
                onClick={props.ordered}/>
                <span className="WorkoutSpan">Abs. {props.level} </span> 
                <span className="WorkoutSpanSec">18 mins</span>
            </div>
            <div className="WorkoutLine" 
            onClick={props.ordered}>
                <img src={imgPic} alt="pic" 
            onClick={props.ordered}/>
                <span className="WorkoutSpan">Chest. {props.level}</span> 
                <span className="WorkoutSpanSec">7 mins</span>
            </div>
            <div className="WorkoutLine" 
            onClick={props.ordered}>
                <img src={imgPic3} alt="pic" 
            onClick={props.ordered}/>
                <span className="WorkoutSpan">Arm. {props.level}</span> 
                <span className="WorkoutSpanSec">16 mins</span>
            </div>
            <div className="WorkoutLine" 
            onClick={props.ordered}>
                <img src={imgPic2} alt="pic" 
            onClick={props.ordered}/>
                <span className="WorkoutSpan">Leg. {props.level}</span> 
                <span className="WorkoutSpanSec">22 mins</span>
            </div>
            <div className="WorkoutLine" 
            onClick={props.ordered}>
                <img src={imgPic5} alt="pic" 
            onClick={props.ordered}/>
                <span className="WorkoutSpan">Shoulder & Back. {props.level}</span> 
                <span className="WorkoutSpanSec">15 mins</span>
            </div>
        </div>
    </Aux>
)

export default workoutList;