import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav>
        <a href="https://sharp-turing-48e911.netlify.com">Home(AC)</a>
        <a href="https://freedomcalculatorfromfreefrom.netlify.com/">
          Home(JW)
        </a>
        <Link to="/Login">Login</Link>
        <Link to="/Register">Register</Link>
        <Link to="/Unsub">Unsubscribe</Link>
        <Link to="/SavedUsers">Users</Link>
      </nav>
    </div>
  );
};

export default Navigation;
