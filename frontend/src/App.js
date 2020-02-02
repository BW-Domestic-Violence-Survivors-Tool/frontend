import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import MonthlyCalc from "./Components/MonthlyCalc";
import RelocationCalc from "./Components/RelocationCalc";

function App(props) {
  return (
    <>
      <Router>
        <div className="navigation">
          <nav>
            <Link>Home</Link>
            <Link>Login</Link>
            <Link>Calculator</Link>
            <Link>About</Link>
            <Link>Resources</Link>
          </nav>
        </div>
      </Router>
      <header>
        <div className="callToAction">
          <h1>Welcome to the Domestic Violence Survivors Tool!</h1>
          <p className="welcomeTo">
            This tool is made to help you budget, so you can know the costs
            being incurred should you choose to move as soon as possible!{" "}
          </p>
        </div>
      </header>
      <div className="appStart">
        <div>
          <MonthlyCalc key={Date.now()} />
          <RelocationCalc />
        </div>
        <div className="difference">
          <h3> results go here</h3>
        </div>
      </div>
    </>
  );
}

export default App;
