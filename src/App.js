import "./App.css";
import React, { Component } from "react";
import Socials from "./common/Socials";
import { Home } from "./home/Home";
import { Route, Routes } from "react-router-dom";
import NoRoute from "./noRoute/NoRoute";
import cv from "./assets/CV.pdf";

class App extends Component {
  componentDidMount() {
    document.title = "Ted";
  }

  render() {
    return (
      <div className="App">
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
