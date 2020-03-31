import React from "react";
import "./AppPage.scss";
import { Switch, Route, Link } from "react-router-dom";
import Error404 from "./../ErrorPage/Error404";
import "./AppPage.scss";

function AppPage() {
  return (
    <>
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
    </>
  );
}
export default AppPage;
