import React from "react";
import "./EmploymentContent.css"
import "./Home.css"
import People from "@mui/icons-material/People";
import CoPresent from "@mui/icons-material/CoPresent";
import {LineEnding} from "./LineEnding";

export const QAContent = () => {
    return (
        <>
            <div>
                <div className="employmentLine" style={{height: "70%"}}/>
                <LineEnding/>
            </div>
            <div>
                <div className="description">
                    QA (UK) Ltd is working with EnviroMission to design and build the
                    World’s first Solar Cyclone Tower (SCT), a novel water and
                    electricity generation solution, positioned for hot, arid climates.
                    <br/><br/>
                    My responsibilities included:
                </div>
                <div className="responsibilities">
                    <div className="responsibilitiesItem">
                        <div className="responsibilitiesIconContainer">
                            <People fontSize='large'/>
                        </div>
                        <div className="responsibilitiesDescription">
                            <p>
                                Leading a team of five Imperial graduates and students in
                                running computational and experimental analysis of the SCT
                                and various components that it incorporated to develop an
                                extensive intellectual property portfolio.
                            </p>
                        </div>
                    </div>
                    <div className="responsibilitiesItem">
                        <div className="responsibilitiesIconContainer">
                            <CoPresent fontSize='large'/>
                        </div>
                        <div className="responsibilitiesDescription">
                            <p>
                                Communicating the project to partners and potential investors.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
