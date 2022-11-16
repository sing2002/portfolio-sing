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
import { useState } from 'react';

function App() {
  const [isLao, setIsLao] = useState(false);

  function onSetIslao(value) {
    setIsLao(value);
  }

  return (
    <div
      style={{
        fontfamily: "Courier New",
        fontSize: "30px",
        fontFamily: ' Courier New'
      }}
    >
      <Section1 isLao={isLao} onSetIsLao={onSetIslao} />
      <Section2 isLao={isLao} onSetIsLao={onSetIslao} />
      <Section3 isLao={isLao} onSetIsLao={onSetIslao}/>
      <Section4 isLao={isLao} onSetIsLao={onSetIslao}/>
      <Foodter />

    </div >
  );
}

export default App;
