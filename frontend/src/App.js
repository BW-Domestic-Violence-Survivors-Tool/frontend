import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Navicgation from "./Components/Navigation";
import MonthlyCalc from "./Components/MonthlyCalc";
import RelocationCalc from "./Components/RelocationCalc";
import BudgetReview from "./Components/BudgetReview";

import Unsub from "./Components/Unsub";

function App(props) {
  return (
    <>
      <Router>
        <div className="navigation">
          <nav>
            <Link to="/">Home</Link>
            <Link to="#">Login</Link>
            <Link to="#">About</Link>
            <Link to="#">Unsubscribe</Link>
          </nav>
        </div>
      </Router>
      {/* <header>
        <div className="callToAction">
          <h1>Welcome to the Domestic Violence Survivors Tool!</h1>
          <p className="welcomeTo">
            This tool is made to help you budget, so you can know the costs
            being incurred should you choose to move as soon as possible!{" "}
          </p>
        </div>
      </header> */}
      <div className="appStart">
        <div>
          <BudgetReview />
        </div>
        <div className="difference"></div>
      </div>
    </>
  );
}
export default App;
