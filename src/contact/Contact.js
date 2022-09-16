import React, {Component} from "react";
import "./Contact.css";
import Fade from "react-reveal/Fade";
import Button from "../common/Button";
import Ender from "../common/Ender";

class Contact extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleClick = () => {
        window.location.href = 'mailto: ted.c.jenks@gmail.com';
    };

    render() {
        return (
            <>
                <Fade delay={300}>
                    <div className="contentContainer">
                        <div className="contactHeading">
                            Contact Me
                        </div>
                        <div className="contactText">
                            I am not currently looking for any opportunities but if you want to reach out my inbox is
                            always
                            open.
                        </div>
                        <div className="contactButtonContainer">
                            <Button text={"Get In Touch"} onClick={this.handleClick}/>
                        </div>
                    </div>

                    <div style={{height: "45vh"}}/>
                </Fade>

                <Ender  style={{position: "absolute", bottom: 0}}/>
            </>
        )
    }
}

export default Contact;
