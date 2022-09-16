import React from "react";
import "./EducationContent.css"
import "./Home.css"
import {LineEndingEducation} from "./LineEndingEducation";

export const BachelorsContent = () => {
    return (
        <>
            <div>
                <div className="gradeEducation">
                    73
                </div>
                <div className="descriptionEducation">Physics at Imperial gave me my introduction to programming. With
                    much modern physics done computationally, there was plenty of opportunities to write complex models
                    or do detailed data analysis on the course. As a very mathematical subject, it also gave me
                    fantastic numerical skills.
                </div>
            </div>
            <div style={{marginBottom: "7rem"}}>
                <div className="educationLine" style={{minHeight: "75%"}}/>
                <LineEndingEducation/>
            </div>
        </>
    )
}
