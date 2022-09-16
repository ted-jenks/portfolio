import React, {useEffect, useState} from "react";
import "./Splash.css";
import Fade from "react-reveal/Fade";
import Lottie from "lottie-react-web";
import animation from "../assets/homeAnimation.json";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import {useMeasure} from "react-use";
import {useMediaQuery} from "react-responsive";

export const Splash = (props) => {
    const [ref, {width}] = useMeasure();
    const [show, setShow] = useState(true);
    const isBigScreen = useMediaQuery({query: '(min-width: 1100px)'})

    const linkStyle = {
        color: "var(--contrast)",
        cursor: "pointer",
        textDecoration: "none",
    }
    const animStyleDesktop = {
        width: "75vw",
        position: "absolute",
        right: "-30vh",
        top: "-40vh",
        animation: "fadeInAnim ease 5s",
    }
    const animStylePhone = {
        width: "100vw",
        position: "absolute",
        right: "-25vh",
        top: "20vh",
        animation: "fadeInAnim ease 5s",
    }

    const handleScroll = () => {
        console.log(9, document.body.getBoundingClientRect().top)
        setShow(document.body.getBoundingClientRect().top > -100)
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        setTimeout(() => this.setState({show: true}), 300);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    });

    return (
        <div style={{
            position: "relative",
            overflowX: "hidden",
            width: "100%"
        }}>
            <Fade delay={300}>
                <div className="contentContainer">
                    <div
                        className="mainHeading"
                        ref={ref}
                        style={isBigScreen ? {fontSize: width / 20} : {fontSize: 60}}
                    >
                        Ted Jenks
                    </div>
                </div>
                <div className="contentContainer">
                    <div
                        className="subHeading"
                        style={isBigScreen ? {fontSize: width / 70} : {fontSize: 16}}
                    >
                        Software Engineer
                    </div>
                </div>
                <div className="contentContainer">
                    <div className="intro" style={isBigScreen ? {fontSize: width / 90} : {fontSize: 10}}>
                        Hi, I am an Imperial MSc Computer Science Graduate at{" "}
                        <a
                            style={linkStyle}
                            href={"https://www.palantir.com/uk/"}
                        >
                            Palantir
                        </a>
                        .
                        <br/>I am passionate about producing exceptional software.
                    </div>
                </div>
            </Fade>
            <Lottie
                options={{
                    animationData: animation,
                    loop: true,
                }}
                style={isBigScreen ? animStyleDesktop : animStylePhone}
                speed={0.15}
                height={isBigScreen ? 2000 : null}
            />
            <div className={show ? "aboutMeContainer" : "aboutMeContainer aboutMeContainerHidden"}
                 onClick={() => props.scollToRef.current.scrollIntoView(
                     {behavior: "smooth"})} style={isBigScreen ? {} : {fontSize: "0.9rem"}}>
                <div style={{paddingBottom: "0.4rem"}}> About Me</div>
                <ExpandCircleDownIcon fontSize={isBigScreen ? 'large' : 'medium'}/>
            </div>
        </div>
    )
}
