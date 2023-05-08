import React, { Component } from "react";
import "./ProjectItem.css";
import MediaQuery from "react-responsive";

class ProjectItem extends Component {
  right = () => {
    return (
      <div
        className={"projectItemContainer"}
        onClick={() => {
          window.open(this.props.route, "_blank");
        }}
      >
        <div className="imageContainer">
          <img
            className={"projectImage"}
            src={this.props.img}
            alt={"image of project"}
          />
        </div>
        <div className={"projectText"}>
          <div className={"projectTitle"}>{this.props.title}</div>
          <div className={"projectDescription"}>{this.props.children}</div>
          <div className="techList">
            {this.props.tech.map((t, i) => {
              return <div key={i}>{t}</div>;
            })}
          </div>
        </div>
      </div>
    );
  };

  left = () => {
    return (
      <div className={"projectItemContainer"} onClick={() => {
          window.open(this.props.route, "_blank");
      }}>
        <div
          className={"projectText"}
          style={{ borderRadius: "2vw 0px 0px 2vw" }}
        >
          <div className={"projectTitle"}>{this.props.title}</div>
          <div className={"projectDescription"}>{this.props.children}</div>
          <div className="techList">
            {this.props.tech.map((t, i) => {
              return <div key={i}>{t}</div>;
            })}
          </div>
        </div>
        <div className="imageContainer">
          <img
            className={"projectImage"}
            style={{ borderRadius: "0px 2vw 2vw 0px" }}
            src={this.props.img}
            alt={"image of project"}
          />
        </div>
      </div>
    );
  };

  leftAndPhone = () => {
    return this.right();
  };

  render() {
    return (
      <>
        {this.props.text === "right" && this.right()}
        <MediaQuery minWidth={1100}>
          {this.props.text === "left" && this.left()}
        </MediaQuery>
        <MediaQuery maxWidth={1100}>
          {this.props.text === "left" && this.leftAndPhone()}
        </MediaQuery>
      </>
    );
  }
}

export default ProjectItem;
