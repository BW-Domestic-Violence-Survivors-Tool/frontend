import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import API from "../utils/axiosWithAuth"




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

const BudgetCalculator = ({ errors, touched, values, status }) => {
  const [monthlyBudget, setMonthlyBudget] = useState({
    monthlyIncome: 0,
    transportation: 0,
    food: 0,
    healthInsurance: 0,
    carInsurance: 0,
    personalLoans: 0,
    carNote: 0,
    miscMonthlyExpense: 0,
    hotelCosts: 0,
    newRental: 0,
    utilityConnection: 0,
    storageUnit: 0,
    mortgageRent: 0,
    carRental: 0,
    cellphoneReconnect: 0,
    movingTruck: 0,
    gasMoving: 0,
    mentalHealth: 0,
    security: 0
  });

  const [result, setResult] = useState(0);

  const submitHandler = event => {
    event.preventDefault();
    const monthlyKeys = Object.keys(monthlyBudget);
    const totalCost = monthlyKeys.reduce((accum, current) => {

   
        API()
        .post("/user/origin/addData")
        .then(res => {   
        console.log(res);       
        })        
        .catch(err => console.log(err));        
       

      return accum + monthlyBudget[current];

      
    }, 0);
    setResult(
      monthlyBudget.monthlyIncome -
        monthlyBudget.transportation -
        monthlyBudget.food -
        monthlyBudget.healthInsurance -
        monthlyBudget.carInsurance -
        monthlyBudget.personalLoans -
        monthlyBudget.carNote -
        monthlyBudget.miscMonthlyExpense -
        monthlyBudget.hotelCosts -
        monthlyBudget.newRental -
        monthlyBudget.utilityConnection -
        monthlyBudget.storageUnit -
        monthlyBudget.mortgageRent -
        monthlyBudget.carRental -
        monthlyBudget.cellphoneReconnect -
        monthlyBudget.movingTruck -
        monthlyBudget.gasMoving -
        monthlyBudget.mentalHealth -
        monthlyBudget.security
    );
    console.log({ totalCost });
  };

  const changeHandler = event => {
    event.persist();
    const parse = parseInt(event.target.value);
    setMonthlyBudget(prevValue => ({
      ...prevValue,
      [event.target.name]: parse
    }));
  };

  return (
    <div>
      <header>
        <div className="callToAction">
          <h1>Welcome to the Domestic Violence Survivors Tool!</h1>
          <p className="welcomeTo">
            This tool is made to help you budget, so you can know the costs
            being incurred should you choose to move as soon as possible!{" "}
          </p>
        </div>
      </header>

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
              name="car"
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
              name="loans"
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
              name="other"
              onChange={changeHandler}
              value={monthlyBudget.miscMonthlyExpense}
            ></input>
          </LabelHandler>
        </Calc>
      </div>

      <div className="monthlyForm">
        <h1>Relocation Costs</h1>
        <Calc>
          <LabelHandler>
            <Label>
              Hotel Cost per Month<span className="rightOrient"> $</span>
            </Label>
            <input
              type="text"
              name="hotelCosts"
              onChange={changeHandler}
              value={monthlyBudget.hotelCosts}
            ></input>
          </LabelHandler>

          <LabelHandler>
            <Label>
              New Rental Deposit <span className="rightOrient"> $</span>
            </Label>
            <input
              type="text"
              name="newRentalDeposit"
              onChange={changeHandler}
              value={monthlyBudget.newRental}
            ></input>
          </LabelHandler>

          <LabelHandler>
            <Label>
              Utility Connection Fee <span className="rightOrient"> $</span>
            </Label>
            <input
              type="text"
              name="connectUtility"
              onChange={changeHandler}
              value={monthlyBudget.utilityConnection}
            ></input>
          </LabelHandler>

          <LabelHandler>
            <Label>
              Storage Unit <span className="rightOrient"> $</span>
            </Label>
            <input
              type="text"
              name="storageUnit"
              onChange={changeHandler}
              value={monthlyBudget.storageUnit}
            ></input>
          </LabelHandler>

          <LabelHandler>
            <Label>
              New Monthly Rent/Mortgage <span className="rightOrient"> $</span>
            </Label>
            <input
              type="text"
              name="newMonthlyRent"
              onChange={changeHandler}
              value={monthlyBudget.mortgageRent}
            ></input>
          </LabelHandler>

          <LabelHandler>
            <Label>
              Car Rental and Gas expenditures{" "}
              <span className="rightOrient"> $</span>
            </Label>
            <input
              type="text"
              name="carRentalAndGas"
              onChange={changeHandler}
              value={monthlyBudget.carRental}
            ></input>
          </LabelHandler>

          <LabelHandler>
            <Label>
              Cell Phone Disconnect/Reconnect Fees{" "}
              <span className="rightOrient"> $</span>
            </Label>
            <input
              type="text"
              name="cellphone"
              onChange={changeHandler}
              value={monthlyBudget.cellphoneReconnect}
            ></input>
          </LabelHandler>

          <LabelHandler>
            <Label>
              Moving Truck Rental <span className="rightOrient"> $</span>
            </Label>
            <input
              type="text"
              name="movingTruck"
              onChange={changeHandler}
              value={monthlyBudget.movingTruck}
            ></input>
          </LabelHandler>

          <LabelHandler>
            <Label>
              Gas for Moving Truck <span className="rightOrient"> $</span>
            </Label>
            <input
              type="text"
              name="gasForMovingTruck"
              onChange={changeHandler}
              value={monthlyBudget.gasMoving}
            ></input>
          </LabelHandler>

          <LabelHandler>
            <Label>
              Any Ongoing Mental Health Costs{" "}
              <span className="rightOrient"> $</span>
            </Label>
            <input
              type="text"
              name="mentalHealthTreatment"
              onChange={changeHandler}
              value={monthlyBudget.mentalHealth}
            ></input>
          </LabelHandler>

          <LabelHandler>
            <Label>
              Any other Security Costs <span className="rightOrient"> $</span>
            </Label>
            <input
              type="text"
              name="additionalSecurityMeasures"
              onChange={changeHandler}
              value={monthlyBudget.security}
            ></input>
          </LabelHandler>
        </Calc>

        <Button type="submit" onClick={submitHandler}>
          Calculate
        </Button>

        <div className="difference>">Total: {result}</div>
      </div>
    </div>
  );
};

export default BudgetCalculator;
