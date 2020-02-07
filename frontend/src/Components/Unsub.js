import React from "react";
import styled from "styled-components";
import API from "../utils/axiosWithAuth"

const Foot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20vh;
  padding: 1%;
  border: 1px solid red;
  align-items: center;
`;

const ButtonDiv = styled.div`
  margin: 2%;
`;
const Button = styled.button`
  background: #fff5ee;
  border-radius: 5px;
  width: 6rem;
  color: red;
  font-weight: old;
  font-style: italic;
`;


function Unsub() {
  const handleSubmit = event => {
    event.preventDefault()
  API()
    .delete("/delete/2")
    .then(res => {
      console.log(res)
      res.send().json({message: "user was deleted"})
    })
    .catch(err => console.log(err))
  };

  return (
    <Foot className="footer">
      If you would like to close your account or unsubscribe from all lists,
      please click the button below:
      <ButtonDiv>
        <Button onClick={handleSubmit}>Unsubscribe</Button>
      </ButtonDiv>
    </Foot>
  );
}

export default Unsub;
