import React from "react";

import './DateHeader.css';

const dateHeader = ( props ) => (
    <div className="DateHeader">
        <div className="Datevalue">{Date().toLocaleString().split('G')[0]}</div>
        <div className="IconDiv"><span className="icon fa fa-search"></span></div>
        <div className="IconDiv"><span className="icon fa fa-user"></span></div>

        <h2 className="DateH1">home workout</h2>
    </div>
);

export default dateHeader;