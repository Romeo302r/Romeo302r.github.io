import React, { useState } from "react";
import img from "./logo.png";

export const Header = () => {

  return (
    <>
      <div className="header">
        <div className="image">
          <img src={img}></img>
        </div>

        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Form</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
