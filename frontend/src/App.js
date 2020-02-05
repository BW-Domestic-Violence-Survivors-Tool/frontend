import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation";
import Login from "./Components/Login";
import BudgetReview from "./Components/BudgetReview";
import PrivateRoute from "./Components/PrivateRoute";

import Unsub from "./Components/Unsub";
import BudgetCalculator from "./Components/BudgetReview";

function App(props) {
  return (
    <>
      <Router>
        <div>
          <Navigation />
        </div>
        <div>
          <PrivateRoute exact path="/" component={BudgetReview} />
          <Route path="/login" component={Login} />
        </div>
      </Router>

      <div className="appStart">
        <div></div>
        <div className="difference"></div>
      </div>
    </>
  );
}
export default App;
