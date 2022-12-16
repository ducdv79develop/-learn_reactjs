import React, { Component } from "react";
import ReactDOM from 'react-dom';

class ApiService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            website: 'ducdv79.com',
            index: 1
        };
    }

    countDown() {
        this.setState({
            index: this.state.index - 1
        });
    }
    countUp() {
        this.setState((prevState, props) => {
            return {
                index: prevState.index + 1
            }
        });
    }

    changeColor() {
        var title = document.getElementById("title");
        ReactDOM.findDOMNode(title).style.color = "red";
    }

    componentWillMount() {
        console.log('Component will mount!')
    }
    componentDidMount() {
        console.log('Component did mount!')
        this.getList();
    }
    getList = () => {
        console.log('hahahahaha')
    }

    render() {
        return (
            <div>
                <h1 id="title">{this.state.website}</h1>
                <p>Giá trị: {this.state.index}</p>
                <p>Giá trị: {Math.random()}</p>
                <button onClick={() => this.countDown()}>Down</button>
                <button onClick={() => this.countUp()}>Up</button>
                <button onClick={() => this.forceUpdate()}>Reload</button>
                <button onClick={() => this.changeColor()}>Change Color</button>
            </div>
        );
    }
}

export default ApiService;
