import React, {useEffect, useRef} from "react";
import "./Home.css";
import {Splash} from "./Splash";
import Ender from "../common/Ender";
import Fade from "react-reveal/Fade";
import Projects from "../projects/Projects";

export const Home = () => {
  const scollToRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Splash scollToRef={scollToRef} />

      <div ref={scollToRef} />

      <Fade delay={100}>
        <Projects />
        <div style={{ height: "15vh" }} />
      </Fade>

      <Ender />
    </>
  );
};
