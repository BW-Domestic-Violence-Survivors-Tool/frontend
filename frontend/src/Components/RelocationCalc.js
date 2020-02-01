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

const RelocationCalc = ({ errors, touched, values, status }) => {
  const [relocation, setRelocation] = useState({
    hotelCosts: 0
  });

  const [resultReloc, setResultReloc] = useState(0);

  const submitHandler = event => {
    event.preventDefault();
    const relocationKeys = Object.keys(relocation);
    const totalCostReloc = relocationKeys.reduce((accum, current) => {
      return accum + relocation[current];
    }, 0);
    setResultReloc(totalCostReloc);
    console.log(totalCostReloc);
  };

  const changeHandler = event => {
    event.persist();
    const parseReloc = parseInt(event.target.value);
    setRelocation(prevValue => ({
      ...prevValue,
      [event.target.name]: parseReloc
    }));
    console.log("in change handler", parseReloc);
  };

  return (
    <div className="monthlyForm">
      <h1>Relocation Costs</h1>
      <Calc>
        <Month>
          <Label>Hotel Cost per Day</Label>
          <input
            type="text"
            name="hotelCosts"
            onChange={changeHandler}
            value={relocation.hotelCosts}
          ></input>
        </Month>
        <Label>New Rental Deposit</Label>
        <input
          type="text"
          name="newRental"
          onChange={changeHandler}
          value={relocation.newRental}
        ></input>
        <Label>Utility Connection Fee</Label>
        <input
          type="text"
          name="utilityConnection"
          onChange={changeHandler}
          value={relocation.utilityConnection}
        ></input>
        <Label>Cost of a Storage Unit (If you have one)</Label>
        <input
          type="text"
          name="storageUnit"
          onChange={changeHandler}
          value={relocation.storageUnit}
        ></input>
        <Label>New Monthly Rent/Mortgage</Label>
        <input
          type="text"
          name="mortgageRent"
          onChange={changeHandler}
          value={relocation.mortgageRent}
        ></input>
        <Label>Car Rental and Gas expenditures</Label>
        <input
          type="text"
          name="carRental"
          onChange={changeHandler}
          value={relocation.carRental}
        ></input>
        <Label>Cell Phone Disconnect/Reconnect Fees</Label>
        <input
          type="text"
          name="cellphoneReconnect"
          onChange={changeHandler}
          value={relocation.cellphoneReconnect}
        ></input>
        <Label>Moving Truck Rental</Label>
        <input
          type="text"
          name="movingTruck"
          onChange={changeHandler}
          value={relocation.movingTruck}
        ></input>
        <Label>Gas for Moving Truck</Label>
        <input
          type="text"
          name="gasMoving"
          onChange={changeHandler}
          value={relocation.gasMoving}
        ></input>
        <Label>Any Ongoing Mental Health Costs</Label>
        <input
          type="text"
          name="mentalHealth"
          onChange={changeHandler}
          value={relocation.mentalHealth}
        ></input>
        <Label>Any other Security Costs</Label>
        <input
          type="text"
          name="security"
          onChange={changeHandler}
          value={relocation.security}
        ></input>
      </Calc>
      <button type="submit" onClick={submitHandler}>
        Calculate
      </button>
      <div>{resultReloc}</div>
    </div>
  );
};

export default RelocationCalc;
