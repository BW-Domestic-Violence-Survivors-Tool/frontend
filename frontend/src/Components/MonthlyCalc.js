import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import styled from "styled-components";

const Month = styled.div`
  display: flex;
  margin: 2%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Calc = styled.form`
  display: flex;
  width: 25%;
  flex-direction: column;
  margin: 3%;
  padding: 2%;
`;

const Label = styled.label`
  display: flex;
  margin: 2%;
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const MonthlyCalc = (props, { errors, touched, values, status }) => {
  const [monthlyBudget, setMonthlyBudget] = useState({
    monthlyIncome: 0,
    transportation: 0,
    food: 0,
    healthInsurance: 0,
    carInsurance: 0,
    personalLoans: 0,
    carNote: 0,
    miscMonthlyExpense: 0
  });

  const [result, setResult] = useState(0);

  const submitHandler = event => {
    event.preventDefault();
    const monthlyKeys = Object.keys(monthlyBudget);
    const totalCost = monthlyKeys.reduce((accum, current) => {
      return accum + monthlyBudget[current];
    }, 0);
    setResult(totalCost);
    console.log(totalCost);
  };

  const changeHandler = event => {
    event.persist();
    const parse = parseInt(event.target.value);
    setMonthlyBudget(prevValue => ({
      ...prevValue,
      [event.target.name]: parse
    }));
    console.log("in change handler", monthlyBudget);
  };

  return (
    <div className="monthlyForm">
      <h1>Monthly Expenditures</h1>

      <Calc>
        <Month>
          <label>Monthly Income</label>
          <input
            type="text"
            name="monthlyIncome"
            onChange={changeHandler}
            value={monthlyBudget.monthlyIncome}
          ></input>
        </Month>
        <Label>Transportation Expense?</Label>
        <input
          type="text"
          name="transportation"
          onChange={changeHandler}
          value={monthlyBudget.transportation}
        ></input>
        <Label>Food Expense?</Label>
        <input
          type="text"
          name="food"
          onChange={changeHandler}
          value={monthlyBudget.food}
        ></input>
        <Label>Health Insurance?</Label>
        <input
          type="text"
          name="healthInsurance"
          onChange={changeHandler}
          value={monthlyBudget.healthInsurance}
        ></input>
        <Label>Car Insurance?</Label>
        <input
          type="text"
          name="carInsurance"
          onChange={changeHandler}
          value={monthlyBudget.carInsurance}
        ></input>
        <Label>Car Note Cost?</Label>
        <input
          type="text"
          name="carNote"
          onChange={changeHandler}
          value={monthlyBudget.carNote}
        ></input>
        <Label>Personal Loans?</Label>
        <input
          type="text"
          name="personalLoans"
          onChange={changeHandler}
          value={monthlyBudget.personalLoans}
        ></input>
        <Label>Other Costs</Label>
        <input
          type="text"
          name="miscMonthlyExpense"
          onChange={changeHandler}
          value={monthlyBudget.miscMonthlyExpense}
        ></input>
      </Calc>
      <button type="submit" onClick={submitHandler}>
        Calculate
      </button>
      <div>Total: {result}</div>
    </div>
  );
};
export default MonthlyCalc;

//user name, password, button, same for register, submit handler, change handler.
