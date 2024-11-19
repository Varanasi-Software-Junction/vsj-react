import React from "react";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">Logo</div>
      <nav className="menu">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
