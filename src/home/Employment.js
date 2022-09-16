import React from "react";
import {Palantir} from "./Palantir";
import {QA} from "./QA";
import {LineEnding} from "./LineEnding";
import "./Home.css"

export const Employment = () => {
    return (
        <>
            <div className="employment">
                Employment
            </div>
            <div className="employmentSection">
                <div className="employmentLine" style={{height: "3rem"}}></div>
            </div>

            <Palantir/>

            <QA/>

        </>
    )
}
