import React from "react";
import { withRouter } from "react-router-dom";
import "./LandingPage.scss";
import "./../../fonts/OldStamper.ttf";

function LandingPage({ history }) {
  function enter() {
    localStorage.entered = true;
    history.go(0);
  }

  return (
    <>
      <div className="lp">
        <h1>Whole Lore</h1>
        <span>Where all the legends are true</span>
        <button onClick={() => enter()}>ENTER</button>
      </div>
    </>
  );
}
export default withRouter(LandingPage);
