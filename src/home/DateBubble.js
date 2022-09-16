import React, {useEffect, useRef, useState} from "react";
import "./DateBubble.css"

export const DateBubble = (props) => {
    return (
        <div className="dateBubble">
            <p>
                {props.date}
                <br/>
                {props.year}
            </p>
        </div>
    )
}
