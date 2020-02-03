import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import MonthlyCalc from "./Components/MonthlyCalc";
import RelocationCalc from "./Components/RelocationCalc";

function App(props) {
  // const Total = props.resultMonth - props.resultRelocation;

  return (
    <>
      <Router>
        <div className="navigation">
          <nav>
            <Link path="/">Home</Link>
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
          <MonthlyCalc
          // month={monthlyBudget}
          // setMonth={setMonthlyBudget}
          // resultMonth={result}
          />
          <RelocationCalc
          // reloc={props.resultReloc}
          // setReloc={props.setResultReloc}
          // resultRelocation={props.resultReloc}
          />
        </div>
        <div className="difference">
          <h3>// combined results go here //</h3>
          {/* <h3>{MonthlyCalc.result - RelocationCalc.resultReloc}</h3> */}
        </div>
      </div>
    </>
  );
}
export default App;
