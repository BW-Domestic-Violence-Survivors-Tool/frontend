import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation";
import Login from "./Components/Login";
import Register from "./Components/Register";
import PrivateRoute from "./Components/PrivateRoute";
import BudgetCalculator from "./Components/BudgetReview";
import Unsub from "./Components/Unsub";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navigation />
        </div>
        <div>
          <PrivateRoute exact path="/" component={BudgetCalculator} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/Unsub" component={Unsub} />
        </div>
      </Router>
      <div className="appStart"></div>
    </>
  );
}

export default App;
