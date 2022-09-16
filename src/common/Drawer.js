import React, {Component, useEffect} from "react";
import "./Drawer.css";
import Close from '@mui/icons-material/Close';
import DrawerSelector from "./DrawerSelector";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import Email from "@mui/icons-material/Email";

class Drawer extends Component {

    render() {
        console.log(this.props.open)
        return (
            <div className={this.props.open ? "drawer open" : "drawer closed"} style={{position: "absolute"}}>
                <div className="closeContainer">
                    <div className="closeClickBox" onClick={this.props.onClose}>
                        <Close fontSize='large'/>
                    </div>
                </div>
                <div className="selectorContainer">
                    <DrawerSelector titles={this.props.titles} routes={this.props.routes} onClose={this.props.onClose}/>
                </div>


                <div className="drawerSocialsContainer">
                    <a className="drawerSocialsItem" href="https://www.linkedin.com/in/ted-jenks-ab631a1a3/">
                        <LinkedIn fontSize='medium'/>
                    </a>
                    <a className="drawerSocialsItem" href="https://github.com/ted-jenks">
                        <GitHub fontSize='medium'/>
                    </a>
                    <a className="drawerSocialsItem" href="mailto: ted.c.jenks@gmail.com">
                        <Email fontSize='medium'/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Drawer;
