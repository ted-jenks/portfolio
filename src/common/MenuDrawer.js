import React, {Component} from "react";
import "./MenuDrawer.css";
import Menu from '@mui/icons-material/Menu';
import Drawer from "./Drawer";

class MenuDrawer extends Component {
    state = {
        drawerOpen: false,
    }

    handleClick = () => {
        if (this.state.drawerOpen) {
            this.setState({drawerOpen: false});
            document.body.style.overflowY = "scroll";
        } else {
            this.setState({drawerOpen: true});
            document.body.style.overflow = "hidden";
        }
    }

    handleClose = () => {
        this.setState({drawerOpen: false});
        document.body.style.overflowY = "scroll";
    }

    render() {
        return (
            <>
                <div className="menuIconContainer" onClick={this.handleClick}>
                    <Menu fontSize='large'/>
                </div>
                <div className={this.state.drawerOpen ? "overlay" : "overlay hide"} onClick={this.handleClick}/>
                <Drawer open={this.state.drawerOpen} onClose={this.handleClose} titles={this.props.titles}
                        routes={this.props.routes}/>
            </>
        );
    }
}

export default MenuDrawer
