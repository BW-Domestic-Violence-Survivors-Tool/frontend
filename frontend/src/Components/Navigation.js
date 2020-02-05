import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";

const Navigation = () => {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="#">Login</Link>
      <Link to="#">About</Link>
      <Link to="/Unsub">Unsubscribe</Link>
    </Router>
  );
};

export default Navigation;
