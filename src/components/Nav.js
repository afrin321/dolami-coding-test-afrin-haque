import React from "react";
import "../styles/nav.css";
import Logo from "../images/logo/logo_avatown_manual_1_basi_inverse.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  return (
    <div className="nav">
      <img src={Logo} className="logo" />
      <div className="link">
        <a href="/">Go to Marketpage</a>
      </div>
      <div className="search-bar">
        <input type="text" className="input-search" placeholder="Search" />
        <span></span>
      </div>
    </div>
  );
}

export default Nav;
