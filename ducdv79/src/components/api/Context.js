import React from "react";

// const ComponentChau = (props) => {
//     return <h1>Ông bảo là "{props.message}"</h1>;
// };
// const ComponentCha = (props) => {
//     return <ComponentChau {...props} />;
// };
//
// const ComponentOng = () => {
//     const message = "Vào freetuts.net học lập trình";
//     return <ComponentCha message={message} />;
// };
// const MessageContext = React.createContext();
const NumberContext = React.createContext();

class ComponentOng extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        };
    }
    updateNumber = () => {
        this.setState({
            number: Math.random(),
        });
    };
    render() {
        return (
            <NumberContext.Provider
                value={{
                    number: this.state.number,
                    update: this.updateNumber.bind(this),
                }}
            >
                <NumberContext.Consumer>
                    { () =>  (
                        <>
                            <ShowNumber />
                            <UpdateNumber />
                        </>
                    )}
                </NumberContext.Consumer>
            </NumberContext.Provider>
        );
    }
}

class UpdateNumber extends React.Component {
    render() {
        return (
            <button onClick={() => {
                //Gọi hàm update để thực hiện update số.
                console.log(this.context.update())
            }}>Update Number</button>
        );
    }
}
UpdateNumber.contextType = NumberContext;

class ShowNumber extends React.Component {
    render() {
        //Hiển thị ra số.
        return (
            <p>{this.context.number}</p>
        );
    }
}
ShowNumber.contextType = NumberContext;

export default ComponentOng;