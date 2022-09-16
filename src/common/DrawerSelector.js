import React, {Component, useEffect} from "react";
import "./DrawerSelector.css";
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import {useMeasure} from "react-use";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import Email from "@mui/icons-material/Email";

class DrawerSelector extends Component {
    state = {
        active: 1,
    }

    handleActiveChange = (key,) => {
        if (this.state.active !== key)
            this.setState({active: key});
    };

    render() {
        const highlightStyle = {
            transform: `translateY(${3.3 * this.state.active}rem)`,
        }
        return (
            <div>
                <div className="highlightDrawer" style={highlightStyle}/>
                <div className="textContainer" >
                {this.props.titles.map((t, i) => {
                    return <CustomLink key={i} ind={i} returnWidths={this.returnWidths} onActiveChange={this.handleActiveChange} onClose={this.props.onClose}
                                       to={this.props.routes[i]}>{t}</CustomLink>
                })}
                </div>
            </div>
        )
    }
}

function CustomLink({to, children, ind, returnWidths, onActiveChange, onClose, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    if (isActive) {
        onActiveChange(ind);
    }

    return (
        <Link className={(isActive) ? 'drawerItem active' : 'drawerItem'} key={ind} to={to} onClick={() => setTimeout(onClose, 300)}>{children}</Link>
    )
}


export default DrawerSelector
