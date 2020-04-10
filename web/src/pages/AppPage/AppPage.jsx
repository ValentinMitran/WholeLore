import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Error404 from "./../ErrorPage/Error404";
import "./AppPage.scss";

function AppPage() {
  return (
    <>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Link to="/norse">Norse</Link>
            <Link to="/egyptian">Egyptian</Link>
          </Route>
          <Route path="/norse">NORSE</Route>
          <Route path="/egyptian">Egyptian</Route>
          <Route path="/*">
            <Error404 />
          </Route>
        </Switch>
      </div>
    </>
  );
}
export default AppPage;
