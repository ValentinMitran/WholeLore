import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppPage from "./../pages/AppPage/AppPage";

function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <AppPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
