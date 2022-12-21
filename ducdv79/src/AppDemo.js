import React, { Component } from 'react';
// import Dashboard from './components/home/Dashboard';
// import DashboardFunction from './components/home/DashboardFunction';
// import ApiService from './components/api/ApiService';
// import ComponentOng from "./components/api/Context";
import ShowListUser from "./components/api/HookUseState";
import HookUseEffect from "./components/api/HookUseEffect";
import HookUseContext from "./components/api/HookUseContext";
// import TestFragments from "./components/react/Fragments";
// import RenderProps from "./components/react/RenderProps";
// import RandomNumberComponent from "./components/react/Hooks";


// Dashboard.defaultProps = {
//     number1: 2,
//     number2: 3,
//     name: 'Airpods 2',
//     type: 'Airpod',
//     public_year: 2019
// }
//
// DashboardFunction.defaultProps = {
//     number1: '2',
//     number2: '3',
//     name: 'iPhone Xs Max',
//     type: 'iPhone',
//     public_year: 2018,
//     storage: '64 GB'
// }

class AppDemo extends Component {
    render() {
        return (
            <div>
                {/* <Dashboard name="Ducdv79" age="18"/> */}
                {/* <DashboardFunction name="Ducdv79 Function" gender="male"/> */}

                {/*<ApiService />*/}
                {/* <ComponentOng /> */}
                {/* <TestFragments/>
                <RenderProps
                    render={(data) => {
                        //qua props render.
                        const { count, increment, decrement } = data;
                        return (
                            <>
                                <p>Giá trị {count}</p>
                                <button onClick={increment}>Tăng</button>
                                <button onClick={decrement}>Giảm</button>
                            </>
                        );
                    }}
                />
                {/* <HoverComponent/> */}
                {/* <RandomNumberComponent /> */}
                <ShowListUser />
                <HookUseEffect />
                <HookUseContext />

                <h1>App.js</h1>
            </div>
        );
    }
}

export default AppDemo;
