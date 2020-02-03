import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import styled from "styled-components";

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

const RelocationCalc = () => {
  const [relocation, setRelocation] = useState({
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
        <LabelHandler>
          <Label>
            Hotel Cost per Day <span className="rightOrient"> $</span>
          </Label>
          <input
            type="text"
            name="hotelCosts"
            onChange={changeHandler}
            value={relocation.hotelCosts}
          ></input>
        </LabelHandler>

        <LabelHandler>
          <Label>
            New Rental Deposit <span className="rightOrient"> $</span>
          </Label>
          <input
            type="text"
            name="newRental"
            onChange={changeHandler}
            value={relocation.newRental}
          ></input>
        </LabelHandler>

        <LabelHandler>
          <Label>
            Utility Connection Fee <span className="rightOrient"> $</span>
          </Label>
          <input
            type="text"
            name="utilityConnection"
            onChange={changeHandler}
            value={relocation.utilityConnection}
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
            value={relocation.storageUnit}
          ></input>
        </LabelHandler>

        <LabelHandler>
          <Label>
            New Monthly Rent/Mortgage <span className="rightOrient"> $</span>
          </Label>
          <input
            type="text"
            name="mortgageRent"
            onChange={changeHandler}
            value={relocation.mortgageRent}
          ></input>
        </LabelHandler>

        <LabelHandler>
          <Label>
            Car Rental and Gas expenditures{" "}
            <span className="rightOrient"> $</span>
          </Label>
          <input
            type="text"
            name="carRental"
            onChange={changeHandler}
            value={relocation.carRental}
          ></input>
        </LabelHandler>

        <LabelHandler>
          <Label>
            Cell Phone Disconnect/Reconnect Fees{" "}
            <span className="rightOrient"> $</span>
          </Label>
          <input
            type="text"
            name="cellphoneReconnect"
            onChange={changeHandler}
            value={relocation.cellphoneReconnect}
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
            value={relocation.movingTruck}
          ></input>
        </LabelHandler>

        <LabelHandler>
          <Label>
            Gas for Moving Truck <span className="rightOrient"> $</span>
          </Label>
          <input
            type="text"
            name="gasMoving"
            onChange={changeHandler}
            value={relocation.gasMoving}
          ></input>
        </LabelHandler>

        <LabelHandler>
          <Label>
            Any Ongoing Mental Health Costs{" "}
            <span className="rightOrient"> $</span>
          </Label>
          <input
            type="text"
            name="mentalHealth"
            onChange={changeHandler}
            value={relocation.mentalHealth}
          ></input>
        </LabelHandler>

        <LabelHandler>
          <Label>
            Any other Security Costs <span className="rightOrient"> $</span>
          </Label>
          <input
            type="text"
            name="security"
            onChange={changeHandler}
            value={relocation.security}
          ></input>
        </LabelHandler>
      </Calc>
      <Button type="submit" onClick={submitHandler}>
        Calculate
      </Button>
      <div className="results">Total: {resultReloc}</div>
    </div>
  );
};

export default RelocationCalc;
