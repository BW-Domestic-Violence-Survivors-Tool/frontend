import React, { useState, useEffect } from "react";
import * as Yup from "yup";

const MonthlyCalc = ({ errors, touched, values, status }) => {
  const [monthlyBudget, setMonthlyBudget] = useState("");

  useEffect(() => {
    setMonthlyBudget(Budget => [...monthlyBudget, status]);
  }, [status]);

  return (
    <div className="monthlyForm">
      <h1>Monthly Expenditures</h1>
      <form>
        <label>Transportation Expense?</label>
        <input
          type="text"
          name="transportation"
          placeholder="Transportation"
        ></input>
        <label>Food Expense?</label>
        <input type="text" name="food" placeholder="Cost of Food"></input>
        <label>Health Insurance?</label>
        <input
          type="text"
          name="healthInsurance"
          placeholder="Health Insurance Cost"
        ></input>
        <label>Car Insurance?</label>
        <input
          type="text"
          name="carInsurance"
          placeholder="Car Insurance Cost"
        ></input>
        <label>Car Note Cost?</label>
        <input type="text" name="carNote" placeholder="Car Note Cost"></input>
        <label>Personal Loans?</label>
        <input
          type="text"
          name="personalLoans"
          placeholder="Personal Loans"
        ></input>
      </form>
    </div>
  );
};

export default MonthlyCalc;
