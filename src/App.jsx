// import logo from './logo.svg';
// import './App.css';
// import './todo';

import React from "react";
import Todo from "./todo";
import { IconButton, Grid } from "@mui/material";

import { height, padding } from "@mui/system";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Foodter from "./components/foodter";
function App() {
  return (
    <div
      style={{
        fontfamily: "Courier New",
        fontSize: "30px",
        fontFamily: ' Courier New'
      }}
    >
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Foodter />

    </div >
  );
}

export default App;
