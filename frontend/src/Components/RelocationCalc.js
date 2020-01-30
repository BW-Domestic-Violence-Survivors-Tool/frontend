import React, { useState, useEffect } from "react";
import * as Yup from "yup";

const RelocationCalc = ({ errors, touched, values, status }) => {
  const [relocationBudget, setRelocationBudget] = useState("");

  useEffect(() => {
    setRelocationBudget(Budget => [...relocationBudget, status]);
  }, [status]);
  // CHANGE THE NAMES FOR RELOCATION UNDERNEATH
  return (
    <div className="relocationForm">
      <h1>Relocation Cost</h1>
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

export default RelocationCalc;
