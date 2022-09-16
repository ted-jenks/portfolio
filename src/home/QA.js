import React from "react"
import "./Home.css"
import {DateBubble} from "./DateBubble";
import MediaQuery from "react-responsive";
import {QAContent} from "./QAContent";

export const QA = () => {
    return (
        <>
            <div className="employmentSection">

                <DateBubble date={"04 Jun"} year={"2021"}/>

                <div>
                    <div className="employmentHeading">
                        QA (UK)
                    </div>
                    <div className="employmentSubHeading">
                        <MediaQuery minWidth={700}>
                            Computational Fluid Dynamics Engineer
                        </MediaQuery>
                        <MediaQuery maxWidth={700}>
                            CFD Engineer
                        </MediaQuery>
                    </div>
                </div>
            </div>

            <div className="employmentSection">

                <QAContent />

            </div>
        </>
    )
}
