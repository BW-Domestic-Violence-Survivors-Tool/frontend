import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import MonthlyCalc from "./Components/MonthlyCalc";
import RelocationCalc from "./Components/RelocationCalc";
import Footer from "./Components/Footer";

function App(props) {
  return (
    <>
      <Router>
        <div className="navigation">
          <nav>
            {/* <img src="freeFrom.jpg" alt="FreeFrom"></img> */}
            <Link to="/">Home</Link>
            <Link to="#">Login</Link>
            <Link to="/App">Calculator</Link>
            <Link to="#">About</Link>
            <Link to="#">Resources</Link>
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
          <MonthlyCalc
            monthlyBudget={props.monthlyBudget}
            setMonthlyBudget={props.setMonthlyBudget}
            result={props.result}
            setResult={props.setResult}
          />
          <RelocationCalc
            relocation={props.relocation}
            setRelocation={props.setResultReloc}
            resultRelocation={props.resultReloc}
            setResultReloc={props.setResultReloc}
          />
        </div>
        <div className="difference"></div>
        <Footer />
      </div>
    </>
  );
}
export default App;
