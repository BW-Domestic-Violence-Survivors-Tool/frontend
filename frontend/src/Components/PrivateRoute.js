import React from "react";
import { Route, Redirect } from "react-router-dom";

//Requirements:
// 1. It has the same API as <Route />. (same props as Route)
// 2. It renders a <Route /> component and passes all the props through it.
// 3. It checks if the user is authenticated, if they are, it renders.
//the "component" prop. If not, it redirects the suer to /login

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
