import React, {Component} from "react";
import "./NoRoute.css";
import a404 from "../assets/404.json";
import animation from "../assets/homeAnimation.json";
import Lottie from "lottie-react-web";

class NoRoute extends Component {
render() {
    return (
        <>
            <div className="noRouteCont">
                <Lottie
                    options={{
                        animationData: a404,
                        loop: true,
                    }}
                    speed={0.5}
                    width={"60vw"}
                />
            </div>
        </>
    )
}
}

export default NoRoute;
