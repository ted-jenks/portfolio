import React from "react";
import "./EmploymentContent.css"
import "./Home.css"
import People from "@mui/icons-material/People";
import Message from "@mui/icons-material/Message";
import CoPresent from "@mui/icons-material/CoPresent";

export const PalantirContent = () => {
    return (
        <>
            <div className="employmentLine" style={{minHeight: "3rem"}}/>
            <div>
                <div className="description">
                    At Palantir, we deliver solutions that help companies make the most of their data. Whether a
                    business needs to analyse the ways in which it can make its practices more sustainable, or
                    the NHS needs help planning the logistics of a nationwide vaccination program, Palantir can
                    implement highly intelligent solutions efficiently.
                    <br/><br/>
                    I am a software engineer at Palantir working on Foundry, our big data ‘operating system’.
                    This forms the basis for Palantir’s bespoke corporate solutions.
                    <br/><br/>
                    My responsibilities include:
                </div>
                <div className="responsibilities">
                    <div className="responsibilitiesItem">
                        <div className="responsibilitiesIconContainer">
                            <People fontSize='large'/>
                        </div>
                        <div className="responsibilitiesDescription">
                            <p>
                                Working with a team to reach the best possible solutions and use Git and clean coding
                                practices to collaborate while developing software and achieve readable, well-tested
                                code.
                            </p>
                        </div>
                    </div>
                    <div className="responsibilitiesItem">
                        <div className="responsibilitiesIconContainer">
                            <Message fontSize='large'/>
                        </div>
                        <div className="responsibilitiesDescription">
                            <p>
                                Communicating with others effectively in stressful and challenging scenarios, ensuring all
                                in the team are comfortable and the team remains efficient.
                            </p>
                        </div>
                    </div>
                    <div className="responsibilitiesItem">
                        <div className="responsibilitiesIconContainer">
                            <CoPresent fontSize='large'/>
                        </div>
                        <div className="responsibilitiesDescription">
                            <p>
                                Presenting and defending my ideas and opinions to others from a range of positions in the
                                company, both technical and non-technical.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
