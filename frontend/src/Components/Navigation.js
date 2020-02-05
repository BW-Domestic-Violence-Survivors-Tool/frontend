import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav>
        <Link to="/">Home</Link>
        <Link to="#">Login</Link>
        <Link to="#">About</Link>
        <Link to="#">Unsubscribe</Link>
      </nav>
    </div>
  );
};

export default Navigation;
