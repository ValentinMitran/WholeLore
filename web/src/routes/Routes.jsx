import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AppPage from "./../pages/AppPage/AppPage";
import PrivateRoute from "./PrivateRoute";

function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute path="/*">
            <AppPage />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
