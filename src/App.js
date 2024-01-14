import "./App.css";
import React, { Component, useEffect } from "react";
import Socials from "./common/Socials";
import { Home } from "./home/Home";
import { Route, Routes } from "react-router-dom";
import NoRoute from "./noRoute/NoRoute";

// const Background = () => {
//     useEffect(() => {
//         const handleScroll = () => {
//             const parallaxElements = document.querySelectorAll(".parallax");
//             parallaxElements.forEach((element) => {
//                 const scrollY = window.scrollY;
//                 const translateY = scrollY * element.dataset.speed;
//                 element.style.transform = `translateY(${translateY}px)`;
//             });
//         };
//
//         window.addEventListener("scroll", handleScroll);
//
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);
//
//     const createRandomPolygons = () => {
//         const numPolygons = 10;
//         const container = document.querySelector(".background-container");
//
//         for (let i = 0; i < numPolygons; i++) {
//             const polygon = document.createElement("div");
//             polygon.className = "polygon parallax";
//             polygon.dataset.speed = Math.random() * 0.5;
//             const tmp = 5 - Math.random() * 10
//             if (tmp > 0) {
//                 polygon.style.left = `${tmp}vw`;
//             } else {
//                 polygon.style.left = `${95 + tmp}vw`;
//
//             }
//             polygon.style.top = `${Math.random() * 300}%`;
//
//             container.appendChild(polygon);
//         }
//     };
//
//     useEffect(() => {
//         const delay = 1000; // Set the delay in milliseconds (2 seconds in this example)
//         const timeoutId = setTimeout(() => {
//             createRandomPolygons();
//         }, delay);
//
//         return () => {
//             clearTimeout(timeoutId);
//         };
//     }, []);
//
//     return <div className="background-container"></div>;
// };

class App extends Component {
  componentDidMount() {
    document.title = "Ted";
  }

  render() {
    return (
      <div className="App">
        {/*<div className="background">*/}
        {/*    <Background />*/}
        {/*</div>*/}
        <div className="pageContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NoRoute />} />
          </Routes>
        </div>
        <Socials />
      </div>
    );
  }
}

export default App;
