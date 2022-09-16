import React, {useEffect, useRef} from "react";
import "./Home.css";
import {Splash} from "./Splash";
import {Employment} from "./Employment";
import {Education} from "./Education";
import HomeEnd from "./HomeEnd";
import Ender from "../common/Ender";
import Fade from "react-reveal/Fade";

export const Home = () => {
    const scollToRef = useRef();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Splash scollToRef={scollToRef}/>

            <div ref={scollToRef}/>

            <div className="timelineContainer">

                <Fade delay={300}>

                    <Employment/>

                    <div style={{height: "20vh"}}/>

                    <Education/>

                    <div style={{height: "40vh"}}/>

                </Fade>

            </div>

            <Fade delay={300}>
                <HomeEnd/>
            </Fade>

            <Ender/>
        </>
    );
};
