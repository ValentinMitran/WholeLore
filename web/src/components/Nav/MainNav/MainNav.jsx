import React from "react";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    <>
      <nav>
        <Link to="/norse">Norse</Link>
        <Link to="/egyptian">Egyptian</Link>
      </nav>
    </>
  );
}

export default MainNav;
