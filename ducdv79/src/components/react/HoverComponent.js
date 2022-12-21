import React from "react";

const withHoverOpacity = (ImageComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                opacity: 1,
            };
            //bind this
            this.onMouseLeave = this.onMouseLeave.bind(this);
            this.onMouseEnter = this.onMouseEnter.bind(this);
        }
        //Được gọi khi chuột được di vào
        onMouseEnter() {
            this.setState({
                opacity: 0.5,
            });
        }
        //Được gọi khi chuột được rời đi
        onMouseLeave() {
            this.setState({
                opacity: 1,
            });
        }
        render() {
            return (
                <div
                    style={{ opacity: this.state.opacity }}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                >
                    <ImageComponent />
                </div>
            );
        }
    };
};



const Image1 = (props) => {
    return <img src="https://doyouloveme-c31fd.web.app/bg.jpg" alt="ducdv1" />;
};

const Image2 = (props) => {
    return <img src="/logo512.png" alt="ducdv2" />;
};
const ImageWithHoverOpacity1 = withHoverOpacity(Image1);
const ImageWithHoverOpacity2 = withHoverOpacity(Image2);

export default class HoverComponent extends React.Component {
    render() {
        return (
            <>
                <ImageWithHoverOpacity1 />
                <ImageWithHoverOpacity2 />
            </>
        )
    }
}