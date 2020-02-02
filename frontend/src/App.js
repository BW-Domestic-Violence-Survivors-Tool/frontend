import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import MonthlyCalc from "./Components/MonthlyCalc";
import RelocationCalc from "./Components/RelocationCalc";

function App() {
  return (
    <>
      <Router>
        <div className="navigation">
          <Link>Login</Link>
        </div>
      </Router>
      <div className="appStart">
        <div>
          <MonthlyCalc key={Date.now()} />
          <RelocationCalc />
        </div>
      </div>
    </>
  );
}

export default App;
