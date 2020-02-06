import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation";
import Login from "./Components/Login";
import Register from "./Components/Register";
import PrivateRoute from "./Components/PrivateRoute";
import BudgetCalculator from "./Components/BudgetReview";
import Unsub from "./Components/Unsub";

function App(props) {
  return (
    <>
      <Router>
        <div>
          <Navigation />
        </div>
        <div>
<<<<<<< HEAD
          <PrivateRoute exact path="/budgetReview" component={BudgetCalculator} />
=======
          <PrivateRoute
            exact
            path="/BudgetReview"
            component={BudgetCalculator}
          />
>>>>>>> f04a2644ea24f10810ffea6c4e4ca013d28c33e1
          <Route path="/login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/Unsub" component={Unsub} />
        </div>
      </Router>
      <div className="appStart"></div>
    </>
  );
}
export default App;
