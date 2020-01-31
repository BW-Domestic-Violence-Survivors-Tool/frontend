import React from "react";
import "./App.css";
import MonthlyCalc from "./Components/MonthlyCalc";
import RelocationCalc from "./Components/RelocationCalc";

function App(props) {
  return (
    <div className="appStart">
      <MonthlyCalc
        key={Date.now()}
        monthlyIcome={props.monthlyIncome}
        transportation={props.transportation}
        food={props.food}
        healthInsurance={props.healthInsurance}
        carInsurance={props.carInsurance}
        carNote={props.carNote}
        personalLoans={props.personalLoans}
        miscMonthlyExpense={props.miscMonthlyExpense}
      />
      <RelocationCalc />
    </div>
  );
}

export default App;
