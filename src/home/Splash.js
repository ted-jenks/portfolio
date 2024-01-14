import React, { useEffect, useState } from "react";
import "./Splash.css";
import Fade from "react-reveal/Fade";
import Lottie from "lottie-react-web";
import animation from "../assets/homeAnimation.json";
import { useMediaQuery } from "react-responsive";
import Button from "../common/Button";
import cv from "../assets/CV.pdf";
import { Parallax } from "react-scroll-parallax";

export const Splash = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const isBigScreen = useMediaQuery({ query: "(min-width: 1100px)" });

  const handleResumeClick = () => {
    window.open(cv, "_blank");
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true  });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkStyle = {
    color: "var(--contrast)",
    cursor: "pointer",
    textDecoration: "none",
  };
  const animStyleDesktop = {
    width: "140vh",
    height: "140vh",
    position: "fixed",
    right: "-10%",
    top: "-100%",
    animation: "fadeInAnim ease 5s",
    transition: "transform 300ms ease-out",
  };
  const animStylePhone = {
    width: "120vw",
    height: "120vh",
    position: "fixed",
    right: "-50vw",
    top: "-5vh",
    animation: "fadeInAnim ease 5s",
    transition: "transform 300ms ease-out",
  };

  return (
    <div>
      <Fade delay={300}>
        <div className="contentContainer">
          <div className="mainHeading">Ted Jenks</div>
        </div>
        <div className="contentContainer">
          <div className="subHeading">Software Engineer</div>
        </div>
        <div className="contentContainer">
          <div className="intro">
            Hi, I am an Imperial MSc Computer Science Graduate at{" "}
            <a style={linkStyle} href={"https://www.palantir.com/uk/"}>
              Palantir
            </a>
            .
            <br />I am passionate about producing exceptional software.
          </div>
          <div className="resumeContainer">
            <Button text={"Résumé"} onClick={handleResumeClick} />
          </div>
        </div>
      </Fade>
      {/*<Lottie*/}
      {/*  options={{*/}
      {/*    animationData: animation,*/}
      {/*    loop: true,*/}
      {/*  }}*/}
      {/*  style={*/}
      {/*    isBigScreen*/}
      {/*      ? { ...animStyleDesktop, transform: "translateY(" + (50 - scrollPosition/70) + "%)" }*/}
      {/*      : { ...animStylePhone, transform: "translateY(" + ( - scrollPosition / 30) + "vh" }*/}
      {/*  }*/}
      {/*  speed={0.05}*/}
      {/*/>*/}
    </div>
  );
};
