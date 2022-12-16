import React, { Component } from "react";
import PropTypes from 'prop-types';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            website: "ducdv79.com",
            index: 1
        };
    }

    render() {
        const { number1, number2 } = this.props;
        return (
            <div>
                <h1>Xin chào {this.props.name} - {this.props.age} !</h1>
                <h2>truy cập {this.state.website} --- index = {this.state.index} !</h2>
                <button
                    onClick={() => {
                        this.setState({
                            index: this.state.index + 1
                        })
                    }}
                >Tăng</button>
                <button
                    onClick={() => {
                        this.setState({
                            index: this.state.index - 1
                        })
                    }}
                >Giảm</button>


                <h1>{number1} + {number2} = {number1 + number2}</h1>

                <h1>{this.props.name}</h1>
                <ul>
                    <li>{this.props.type}</li>
                    <li>{this.props.public_year}</li>
                    <li>{this.props.storage}</li>
                </ul>


                <p>Giá trị: {Math.random()}</p>
                <button onClick={() => this.forceUpdate()}>Reload</button>
            </div>
        );
    }
}

Dashboard.prototypes = {
    name: PropTypes.number,
    type: PropTypes.oneOf(["iPhone", "iPad", "Mac", "SmartWatch"]),
    public_year: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])
}


export default Dashboard;
