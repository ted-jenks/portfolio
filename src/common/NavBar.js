import React, {Component} from "react";
import "./NavBar.css"
import {Link, useMatch, useResolvedPath} from "react-router-dom"
import {useMeasure} from "react-use";

class NavBar extends Component {
    state = {
        width: 10,
        active: 0,
        translate: [0, 5, 11.3],
    }

    constructor(props) {
        super(props);
        this.state.widths = new Array(props.titles.length)
        this.state.widths.fill(0)
    }

    handleActiveChange = (key, width) => {
        console.log('h', key)
        if (this.state.width !== width)
            this.setState({width: width, active: key});
    }

    render() {
        const highlightStyle = {
            width: this.state.width + 'px',
            transform: `translateX(${this.state.translate[this.state.active]}rem)`,
        }

        return (
            <div className={"navBarContainer"}>
                <div className="highlight" style={highlightStyle}/>
                {this.props.titles.map((t, i) => {
                    return (
                        <CustomLink key={i} ind={i} returnWidths={this.returnWidths}
                                    onActiveChange={this.handleActiveChange}
                                    to={this.props.routes[i]}>
                            {t}
                        </CustomLink>);
                })}
            </div>
        )
    }
}

function CustomLink({to, children, ind, onActiveChange}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    const [ref, {width}] = useMeasure();

    if (isActive) {
        onActiveChange(ind, width);
    }

    return (
        <Link className={(isActive) ? 'navBarItem active' : 'navBarItem'} ref={ref} key={ind} to={to}>{children}</Link>
    )
}


export default NavBar;
