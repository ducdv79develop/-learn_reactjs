import React, { Component, useContext } from "react";
// Khởi tạo context mới.
const CounterContext = React.createContext();
const Counter = () => {
    // Sử dụng useContext để lấy gía trị của context
    // Tham số truyền vào là object CounterContext.
    const counter = useContext(CounterContext);

    return (
        <div>
            <code>freetuts.net</code>
            <h1>{counter.count}</h1>
            <button
                onClick={() => {
                    counter.countUp();
                }}
            >
                Tăng
            </button>
            <button
                onClick={() => {
                    counter.countDown();
                }}
            >
                Giảm
            </button>
        </div>
    );
};
export default class HookUseContext extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        };
    }
    //Cập nhật giá trị của state count - Tăng
    countUp() {
        this.setState({
            count: this.state.count + 1,
        });
    }
    //Cập nhật giá trị của state count - Giảm
    countDown() {
        this.setState({
            count: this.state.count - 1,
        });
    }
    render() {
        return (
            <CounterContext.Provider
                value={{
                    count: this.state.count,
                    countUp: this.countUp.bind(this),
                    countDown: this.countDown.bind(this),
                }}
            >
                <Counter />
            </CounterContext.Provider>
        );
    }
}