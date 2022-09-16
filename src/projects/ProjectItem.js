import React, {Component} from "react";
import "./ProjectItem.css";
import MediaQuery from "react-responsive";

class ProjectItem extends Component {

    right = () => {
        return (
            <div className={"projectItemContainer"}>
                <div className="imageContainer">
                    <div className="imageOverlay" onClick={() => {
                        window.location.href = this.props.route;
                    }}/>
                    <img className={"projectImage"} src={this.props.img}/>
                </div>
                <div className={"projectText"}>
                    <div className={"wrap"}>
                        <div className={"projectDescription"}>

                            <div className={"wrap"}>
                                <div className={"projectTitle"}>
                                    {this.props.title}
                                </div>
                            </div>
                            {this.props.children}
                            <div className={"wrap"}>
                                <div className="techList">
                                    {this.props.tech.map((t, i) => {
                                        return (
                                            <div key={i}>
                                                {t}
                                            </div>);
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    left = () => {
        return (
            <div className={"projectItemContainer"}>
                <div className={"projectText"}>
                    <div className={"wrap"}>
                        <div className={"projectDescription"} style={{left: 0, zIndex: 10}}>
                            <div className={"wrap"}>
                                <div className={"projectTitle"} style={{textAlign: "left", left: "-1rem"}}>
                                    {this.props.title}
                                </div>
                            </div>
                            {this.props.children}
                            <div className={"wrap"}>
                                <div className="techList" style={{left: "-0.9rem"}}>
                                    {this.props.tech.map((t, i) => {
                                        return (
                                            <div key={i}>
                                                {t}
                                            </div>);
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="imageContainer">
                    <div className="imageOverlay" onClick={() => {
                        window.location.href = this.props.route;
                    }}/>
                    <img className={"projectImage"} src={this.props.img}/>
                </div>
            </div>);
    }

    leftAndPhone = () => {
        return (
            <div className={"projectItemContainer"}>
                <div className="imageContainer" style={{paddingLeft: "30%", paddingRight: "0"}}>
                    <div className="imageOverlay" style={{left: "30%", right: 0, width:"70.1%"}} onClick={() => {
                        window.location.href = this.props.route;
                    }}/>
                    <img className={"projectImage"} src={this.props.img}/>
                </div>
                <div className={"projectText"}>
                    <div className={"wrap"}>
                        <div className={"projectDescription"} style={{left: 0, zIndex: 10}}>
                            <div className={"wrap"}>
                                <div className={"projectTitle"} style={{textAlign: "left"}}>
                                    {this.props.title}
                                </div>
                            </div>
                            {this.props.children}
                            <div className={"wrap"}>
                                <div className="techList" style={{left: "-0.9rem"}}>
                                    {this.props.tech.map((t, i) => {
                                        return (
                                            <div key={i}>
                                                {t}
                                            </div>);
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <>
                {this.props.text === 'right' && this.right()}
                <MediaQuery minWidth={700}>
                    {this.props.text === 'left' && this.left()}
                </MediaQuery>
                <MediaQuery maxWidth={700}>
                    {this.props.text === 'left' && this.leftAndPhone()}
                </MediaQuery>
            </>
        )
    }
}

export default ProjectItem;
