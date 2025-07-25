import React, { useState } from "react";
import "./Navbar.css";
// import ClickSpark from "./helper/clickSpark";

export default function Navbar() {
  return (

    <nav className="navbar" id="navbar">
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
        <a
        onClick={() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
        style={{ cursor: "pointer" }}
        >
          About
        </a>
        <a href="#">Projects</a>
        <a 
        onClick={e => {
          e.preventDefault();
          const expSection = document.getElementById("exp");
          if (expSection) {
            expSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
        href="#">Experience</a>
        <a 
        onClick={e => {
          e.preventDefault();
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
        href="#">Contact</a>
      </div>
    </nav>
  );
}