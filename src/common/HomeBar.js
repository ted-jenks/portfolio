import React, {Component} from "react";
import "./HomeBar.css";
import NavBar from "./NavBar";
import Button from "./Button";
import MenuDrawer from "./MenuDrawer";
import MediaQuery from "react-responsive"
import cv from "../assets/CV.pdf"

class HomeBar extends Component {

    constructor() {
        super();
        this.state = {
            show: false,
            scrollPos: 0,
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        setTimeout(() => this.setState({show: true}), 300);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    }

    handleScroll = () => {
        console.log(document.body.getBoundingClientRect().top);
        this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top > this.state.scrollPos,
        });
    };

    handleResumeClick = () => {
        window.location.href = cv
    }

    render() {
        return (
            <div className={this.state.show ? "homeBarContainer active" : "homeBarContainer hidden"}>
                <MediaQuery minWidth={1100}>
                    <NavBar titles={['Home', 'Projects', 'Contact']}
                            routes={['/', '/projects', '/contact']}/>
                </MediaQuery>
                <MediaQuery maxWidth={1100}>
                    <MenuDrawer titles={['Home', 'Projects', 'Contact']}
                                routes={['/', '/projects', '/contact']}/>
                </MediaQuery>
                <div className="buttonHomebarContainer">
                    <Button text={'Resume'} onClick={this.handleResumeClick}/>
                </div>
            </div>
        )
    }
}

export default HomeBar;
