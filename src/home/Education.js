import React from "react";
import "./Home.css"
import {Masters} from "./Masters";
import {Bachelors} from "./Bachelors";
import queensLogo from "../assets/queensTower.png";

export const Education = () => {
    return (
        <div className="wrap" style={{justifyContent: "flex-end", alignItems: "flex-end"}}>

            <img src={queensLogo} className="queensTower"/>

            <div style={{display: "flex", justifyContent: "flex-end"}}>
                <div className="education">
                    Education
                </div>
            </div>
            <div className="educationSection">
                <div className="educationLine" style={{height: "3rem"}}></div>
            </div>

            <Masters/>

            <Bachelors/>
        </div>
    )
}
