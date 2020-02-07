import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav>
        <Link to="https://sharp-turing-48e911.netlify.com">Home(AC)</Link>
        <Link to="https://5e38b974657d47000b713c54--freedomcalculatorfromfreefrom.netlify.com/">
          Home(JW)
        </Link>
        <Link to="/Login">Login</Link>
        <Link to="/Register">Register</Link>
        <Link to="/Unsub">Unsubscribe</Link>
      </nav>
    </div>
  );
};

export default Navigation;
