import React from "react"
import "./Home.css"
import {DateBubble} from "./DateBubble";
import {PalantirContent} from "./PalantirContent";

export const Palantir = () => {
    return (
        <>
            <div className="employmentSection">

                <DateBubble date={"10 Oct"} year={"2022"}/>

                <div>
                    <div className="employmentHeading">
                        Palantir
                    </div>
                    <div className="employmentSubHeading">
                        Software Engineer
                    </div>
                </div>

            </div>
            <div className="employmentSection">

                <PalantirContent/>

            </div>
        </>
    )
}
