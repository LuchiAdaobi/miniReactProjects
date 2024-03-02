import { useState } from "react";
import Accordion from "./projects/accordion/Accordian";
import RandomColor from "./projects/backgroundChanger/RandomColor";

function App() {
  return (
    <div className="app">
      <Accordion />
      <RandomColor />
    </div>
  );
}

export default App;
