import React from "react";
import "./App.css";
import MonthlyCalc from "./Components/MonthlyCalc";
import RelocationCalc from "./Components/RelocationCalc";

function App() {
  return (
    <div>
      <MonthlyCalc key={Date.now()} />
      <RelocationCalc />
    </div>
  );
}

export default App;
