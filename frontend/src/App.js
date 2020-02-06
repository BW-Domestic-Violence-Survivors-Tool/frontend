import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import BudgetCalculator from "./Components/BudgetReview";

function App(props) {
  return (
    <>
      <Router>
        <div>
          <Navigation />
        </div>
        <div>
          <PrivateRoute exact path="/budgetReview" component={BudgetCalculator} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
      <div className="appStart">
        <div className="difference"></div>
      </div>
    </>
  );
}
export default App;
