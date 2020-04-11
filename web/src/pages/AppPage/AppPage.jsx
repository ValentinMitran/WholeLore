import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Error404 from "./../ErrorPage/Error404";
import "./AppPage.scss";
import { useMediaQuery } from "react-responsive";
import MobileNav from "../../components/Nav/MobileNav/MobileNav";
import MainNav from "../../components/Nav/MainNav/MainNav";

function AppPage() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <div className="app">
        {isMobile ? <MobileNav /> : <MainNav />}
        <div className="main">
          <Switch>
            <Route exact path="/"></Route>
            <Route path="/norse">NORSE</Route>
            <Route path="/egyptian">Egyptian</Route>
            <Route path="/*">
              <Error404 />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}
export default AppPage;
