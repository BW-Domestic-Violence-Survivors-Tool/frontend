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
  const [monthlyBudget, setMonthlyBudget] = useState("");

  const submitHandler = event => {
    event.preventDefault();
    setMonthlyBudget(monthlyBudget => {
      console.log(monthlyBudget);
      const budget =
        parseInt(monthlyBudget.monthlyIncome) -
        parseInt(monthlyBudget.transportation) -
        parseInt(monthlyBudget.food) -
        parseInt(monthlyBudget.healthInsurance) -
        parseInt(monthlyBudget.carInsurance) -
        parseInt(monthlyBudget.carNote) -
        parseInt(monthlyBudget.personalLoans) -
        parseInt(monthlyBudget.miscMonthlyExpense);
    });
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
            placeholder="Monthly Income"
          ></input>
        </Month>
        <Label>Transportation Expense?</Label>
        <input
          type="text"
          name="transportation"
          placeholder="Transportation"
        ></input>
        <Label>Food Expense?</Label>
        <input type="text" name="food" placeholder="Cost of Food"></input>
        <Label>Health Insurance?</Label>
        <input
          type="text"
          name="healthInsurance"
          placeholder="Health Insurance Cost"
        ></input>
        <Label>Car Insurance?</Label>
        <input
          type="text"
          name="carInsurance"
          placeholder="Car Insurance Cost"
        ></input>
        <Label>Car Note Cost?</Label>
        <input type="text" name="carNote" placeholder="Car Note Cost"></input>
        <Label>Personal Loans?</Label>
        <input
          type="text"
          name="personalLoans"
          placeholder="Personal Loans"
        ></input>
        <Label>Other Costs</Label>
        <input
          type="text"
          name="miscMonthlyExpense"
          placeholder="Other"
        ></input>
      </Calc>
      <button type="submit" onClick={submitHandler}>
        Calculate
      </button>
    </div>
  );

  {
    monthlyBudget.map(budget => (
      <div>
        <ul>
          <li>Montly Income: {budget.monthlyIncome}</li>
          <li>transportation: {budget.transportation}</li>
          <li>Food: {budget.food}</li>
          <li>Health Insurance: {budget.healthInsurance}</li>
          <li>Car Insurance: {budget.carInsurance}</li>
          <li>Car Note: {budget.carNote}</li>
          <li>Personal Loans: {budget.personalLoansood}</li>
          <li>Miscellaneous: {budget.miscMonthlyExpense}</li>
        </ul>
      </div>
    ));
  }
};

export default MonthlyCalc;
