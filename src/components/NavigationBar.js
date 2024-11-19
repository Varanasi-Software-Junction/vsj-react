import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./NavigationBar.css";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="navbar-container">
      <div className="logo">Logo</div>
      <button className="menu-button" onClick={toggleMenu}>
        <FaBars />
      </button>
      <nav className={`menu ${isOpen ? "menu-open" : ""}`}>
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
