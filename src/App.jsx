import { useState } from "react";
import Accordion from "./projects/accordion/Accordian";
import RandomColor from "./projects/backgroundChanger/RandomColor";
import StarRating from "./projects/starRating/StarRating";

function App() {
  return (
    <div className="app">
      <Accordion />
      <RandomColor />
      <StarRating num={10} />
    </div>
  );
}

export default App;
