import React from "react";
import "./MobileNav.scss";
import { Link } from "react-router-dom";
function MobileSide() {
  return (
    <>
      <div className="sidebar">
        <nav>
          <Link to="/norse">Norse</Link>
          <Link to="/egyptian">Egyptian</Link>
        </nav>
      </div>
    </>
  );
}

export default MobileSide;
