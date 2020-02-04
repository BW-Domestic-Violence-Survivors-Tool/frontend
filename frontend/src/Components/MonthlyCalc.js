import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import styled from "styled-components";
import "../App.css";

const Month = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
  padding-bottom: 2%;
  font-weight: 500;
`;

const Calc = styled.form`
  display: flex;
  width: 25%;
  flex-direction: column;
  padding: 2%;
  margin-top: 2%;
  margin-bottom: 2%;
  border-radius: 10px;
  box-shadow: 10px 10px gray;
  background: rgb(138, 139, 188);
`;

const Label = styled.label`
  display: flex;
  width: 100%;
  padding: 2%;
  align-items: center;
  text-align: left;
  justify-content: flex-start;
  background: lightgrey;
  border-radius-left: 10px;
  font-weight: 500;
`;

const LabelHandler = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  text-align: left;
  margin-bottom: 2%;
  border: 1px dotted black;
  border-radius: 10px;
  box-shadow: 5px 5px gray;
`;

const Button = styled.button`
  width: 5%;
  border-radius: 5px;
  background: gray;
  color: lightgray;
`;

const MonthlyCalc = () => {
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
          <label>Monthly Income in Dollars</label>
          <input
            type="text"
            name="monthlyIncome"
            onChange={changeHandler}
            value={monthlyBudget.monthlyIncome}
          ></input>
        </Month>

        <LabelHandler>
          <Label>
            Food Expense? <span className="rightOrient"> $</span>
          </Label>
          <input
            type="text"
            name="food"
            onChange={changeHandler}
            value={monthlyBudget.food}
          ></input>
        </LabelHandler>

        <LabelHandler>
          <Label>
            Transportation Expense? <span className="rightOrient"> $</span>
          </Label>
          <input
            type="text"
            name="transportation"
            onChange={changeHandler}
            value={monthlyBudget.transportation}
          ></input>
        </LabelHandler>

        <LabelHandler>
          <Label>
            Health Insurance? <span className="rightOrient"> $</span>
          </Label>
          <input
            type="text"
            name="healthInsurance"
            onChange={changeHandler}
            value={monthlyBudget.healthInsurance}
          ></input>
        </LabelHandler>

        <LabelHandler>
          <Label>
            Car Insurance? <span className="rightOrient"> $</span>
          </Label>
          <input
            type="text"
            name="carInsurance"
            onChange={changeHandler}
            value={monthlyBudget.carInsurance}
          ></input>
        </LabelHandler>

        <LabelHandler>
          <Label>
            Car Note Cost? <span className="rightOrient"> $</span>
          </Label>
          <input
            type="text"
            name="carNote"
            onChange={changeHandler}
            value={monthlyBudget.carNote}
          ></input>
        </LabelHandler>

        <LabelHandler>
          <Label>
            Personal Loans? <span className="rightOrient"> $</span>
          </Label>
          <input
            type="text"
            name="personalLoans"
            onChange={changeHandler}
            value={monthlyBudget.personalLoans}
          ></input>
        </LabelHandler>

        <LabelHandler>
          <Label>
            Other Costs <span className="rightOrient"> $</span>
          </Label>
          <input
            type="text"
            name="miscMonthlyExpense"
            onChange={changeHandler}
            value={monthlyBudget.miscMonthlyExpense}
          ></input>
        </LabelHandler>
      </Calc>

      <Button type="submit" onClick={submitHandler}>
        Calculate
      </Button>
      <div className="difference>">Total: {result}</div>
    </div>
  );
};

export default MonthlyCalc;

//user name, password, button, same for register, submit handler, change handler.
