import React from "react";
import styled from "styled-components";
import axios from "axios";

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

const P = styled.p`
  display: flex;
  justify-content: center;
  text-algin: center;
  border-bottom: 1px solid black;
  padding-bottom: 5%;
`;

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
    axios
      .post(
        "https://domestic-violence-build-week.herokuapp.com/login",
        this.state.credentials
      )
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <Month>
          <h1>Welcome to the Domestic Violence Survivors Tool!!</h1>
          <Calc>
            <P>Please Sign In</P>
            <Div>
              <LabelHandler>
                <Label>Please Enter Your Username</Label>
                <Input
                  type="text"
                  name="username"
                  value={this.state.credentials.username}
                  onChange={this.handleChange}
                />
                <Label>Please Enter Your Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={this.state.credentials.password}
                  onChange={this.handleChange}
                />
              </LabelHandler>
              <Button>Log in</Button>
            </Div>
          </Calc>
        </Month>
      </>
    );
  }
}
export default Login;
