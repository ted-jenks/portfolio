import React from "react"
import "./Home.css"
import {DateBubble} from "./DateBubble";
import {MastersContent} from "./MastersContent";

export const Masters = () => {
    return (
        <>
            <div className="educationSection">


                <div>
                    <div className="educationHeading">
                        MSc Computing
                    </div>
                    <div className="educationSubHeading">
                        Imperial College London
                    </div>
                </div>

                <DateBubble date={"01 Oct"} year={"2021"}/>

            </div>

            <div className="educationSection">

                <MastersContent/>

            </div>
        </>
    )
}
