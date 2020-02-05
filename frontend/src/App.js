import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation";
import Login from "./Components/Login";
import BudgetReview from "./Components/BudgetReview";

import Unsub from "./Components/Unsub";

function App(props) {
  return (
    <>
      <Router>
        <div>
          <Navigation />
        </div>
        <div>
          <Route path="/login" component="{Login}" />
        </div>
      </Router>

      <div className="appStart">
        <div>
          <Login />
        </div>
        <div className="difference"></div>
      </div>
    </>
  );
}
export default App;
