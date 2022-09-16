import React, {Component} from "react";
import "./Button.css";

class Button extends Component {
    render() {
        return (
            <div className="buttonContainer" onClick={this.props.onClick}>
                {this.props.text}
            </div>
        )
    }
}

export default Button;
