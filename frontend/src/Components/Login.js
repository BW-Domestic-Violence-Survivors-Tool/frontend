import React from "react";
import styled from "styled-components";
import axios from "../../node_modules/axios";
<<<<<<< HEAD
import API from "../utils/axiosWithAuth"
import { __values } from "tslib";
=======
import API from "../utils/axiosWithAuth";
>>>>>>> f04a2644ea24f10810ffea6c4e4ca013d28c33e1

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
  padding: 2%;
  margin: 5%;
  align-items: center;
  text-align: left;
  justify-content: flex-start;
  font-weight: 500;
`;

const LabelHandler = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  margin-bottom: 2%;

  border-radius: 10px;
`;
const Button = styled.button`
  width: 30%;
  margin: 5%;
  border-radius: 5px;
  background: gray;
  color: lightgray;
`;
const Div = styled.div`
  width: 1005;
`;

const Input = styled.input`
  width: 100%;
  height: 2rem;
`;

const P = styled.h1`
  display: flex;
  justify-content: center;
  text-algin: center;
  border-bottom: 1px solid black;
  padding-bottom: 5%;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

<<<<<<< HEAD
  const handleSubmit = event => {
    event.preventDefault();
    let auth = {username: values.username, password: values.password};
    
    API()
      .post(
        "https://domestic-violence-build-week.herokuapp.com/login",
        auth)
      .then(res => {
        console.log(res.data.token)
        localStorage.setItem("token", res.data.token)
    })
    .catch(err => {
        console.log(err);
    });
};
=======
class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    console.log(this.state.credentials);
    API()
      .post("/login", this.state.credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/BudgetReview");
      })
      .catch(err => console.log(err));
  };
>>>>>>> f04a2644ea24f10810ffea6c4e4ca013d28c33e1

  render() {
    return (
      <>
        <Month>
          <h1>Welcome to the Domestic Violence Survivors Tool!!</h1>
          <Calc onSubmit={this.login}>
            <P>Please Sign In.</P>
            <p>
              {" "}
              if You haven't registered yet, please click the register button on
              the top of the page!
            </p>
            <Div>
              <LabelHandler>
                <Label>Please Enter Your Username</Label>
                <Input
                  type="text"
                  name="username"
                  value={this.state.credentials.username}
                  onChange={this.handleSubmit}
                />
                <Label>Please Enter Your Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={this.state.credentials.password}
                  onChange={this.handleSubmit}
                />
              </LabelHandler>
<<<<<<< HEAD
              <Button>Log in</Button>
=======
              <ButtonContainer>
                <Button type="submit">Log in</Button>
              </ButtonContainer>
>>>>>>> f04a2644ea24f10810ffea6c4e4ca013d28c33e1
            </Div>
          </Calc>
        </Month>
      </>
    );
  };
};
export default Login;
