import React, {Component} from "react";
import "./HomeEnd.css";
import Button from "../common/Button";

class HomeEnd extends Component {

     linkStyle = {
        color: "var(--contrast)",
        cursor: "pointer",
        textDecoration: "none",
    }

    render() {

        return (
            <>
                <div className="homeEndButtonContainer">
                    <Button text="Home" onClick={() => {
                        window.location.href = '/';
                    }}/>
                    <Button text="Projects" onClick={() => {
                        window.location.href = '/projects';
                    }}/>
                    <Button text="Contact"onClick={() => {
                        window.location.href = '/contact';
                    }}/>
                </div>
            <div className="homeEndHeading">
                Up to Date!
            </div>
                <div className="homeEndText">
                    So that brings you up to the current date. Alongside my professional and academic experience, I take on some projects in my own time. Why not check these out in
                    <a
                        style={this.linkStyle}
                        href={"/projects"}
                    >
                        {' '}projects
                    </a>
                    ?
                </div>
                </>
        )
    }
}


export default HomeEnd
