import React from "react";
import PropTypes from 'prop-types';


const DashboardFunction = function (props) {
    return (
        <div>
            <h1>---------------------------------------------</h1>
            <h2>Welcome ! I am a functional {props.name} - {props.gender} </h2>
            <h1>{props.number1} + {props.number2} = {props.number1 + props.number2}</h1>
            <h1>{props.name}</h1>
            <ul>
                <li>{props.type}</li>
                <li>{props.public_year}</li>
                <li>{props.storage}</li>
            </ul>
        </div>
    )
}

DashboardFunction.prototypes = {
    name: PropTypes.string,
    type: PropTypes.oneOf(["iPhone", "iPad", "Mac", "SmartWatch"]),
    public_year: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])
}

export default DashboardFunction;
