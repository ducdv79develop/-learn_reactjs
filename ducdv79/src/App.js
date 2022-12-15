import React, { Component } from 'react';
import Dashboard from './components/home/Dashboard';
import DashboardFunction from './components/home/DashboardFunction';


Dashboard.defaultProps = {
    number1: 2,
    number2: 3,
    name: 'Airpods 2',
    type: 'Airpod',
    public_year: 2019
}

DashboardFunction.defaultProps = {
    number1: '2',
    number2: '3',
    name: 'iPhone Xs Max',
    type: 'iPhone',
    public_year: 2018,
    storage: '64 GB'
}

class App extends Component {
    render() {
        return (
            <div>
                <Dashboard name="Ducdv79" age="18"/>
                <DashboardFunction name="Ducdv79 Function" gender="male"/>
                <p>xin chao</p>
            </div>
        );
    }
}

export default App;
