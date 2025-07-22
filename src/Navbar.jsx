import React, { useState } from "react";
import "./Navbar.css";
import ClickSpark from "./helper/clickSpark";

export default function Navbar() {
  return (

    <nav className="navbar" >
      <div className="navbar-left">
        <span 
        className="navbar-title" 
        onClick={() => window.location.href = "/"}
        style={{cursor: "pointer"}}
        >
          Ishan Sandhu
        </span>
      </div>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}