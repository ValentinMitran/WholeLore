import React, { useState } from "react";
import "./MobileNav.scss";
import { MdMenu, MdClose } from "react-icons/md";
import MobileSide from "./MobileSide";

function MobileNav() {
  const [isSideOpen, setIsSideOpen] = useState(false);
  return (
    <>
      <div className="topbar">
        {isSideOpen ? (
          <MdClose id="leftOpener" onClick={() => setIsSideOpen(false)} />
        ) : (
          <MdMenu id="leftOpener" onClick={() => setIsSideOpen(true)} />
        )}
        <span> Whole Lore</span>
      </div>
      {isSideOpen ? <MobileSide setIsSideOpen={setIsSideOpen} /> : null}
    </>
  );
}

export default MobileNav;
