import React, {useState} from "react";
import "./Socials.css";
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import Email from '@mui/icons-material/Email';
import {useMediaQuery} from "react-responsive";

export const Socials = () => {
    const isTooSmall = useMediaQuery({query: '(min-height: 600px)'});
    const isTooNarrow = useMediaQuery({query: '(min-width: 1100px)'});
    const [loadTime, setLoadTime] = useState(false);

    setTimeout(() => setLoadTime(true), 900)

    return (<div className={(isTooSmall && loadTime && isTooNarrow) ? "socialsContainer activeSoc" : "socialsContainer hiddenSoc"}>
            <div className="socialsItem" onClick="location.href='https://www.linkedin.com/in/ted-jenks-ab631a1a3/';">
                <a className="socialsItem" href="https://www.linkedin.com/in/ted-jenks-ab631a1a3/">
                    <LinkedIn fontSize='medium'/>
                </a>
            </div>
            <div className="socialsItem">
                <a className="socialsItem" href="https://github.com/ted-jenks">
                    <GitHub fontSize='medium'/>
                </a>
            </div>
            <div className="socialsItem">
                <a className="socialsItem" href="mailto: ted.c.jenks@gmail.com">
                    <Email fontSize='medium'/>
                </a>
            </div>
            <div className="line"/>
        </div>
    )
}

export default Socials;
