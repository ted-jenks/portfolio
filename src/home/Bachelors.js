import React from "react"
import "./Home.css"
import {DateBubble} from "./DateBubble";
import {BachelorsContent} from "./BachelorsContent";

export const Bachelors = () => {
    return (
        <>
            <div className="educationSection">


                <div>
                    <div className="educationHeading">
                        BSc Physics
                    </div>
                    <div className="educationSubHeading">
                        Imperial College London
                    </div>
                </div>

                <DateBubble date={"01 Oct"} year={"2018"}/>

            </div>
            <div className="educationSection">

                <BachelorsContent/>

            </div>
        </>
    )
}
