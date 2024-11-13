import React from 'react';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>Home</li>
        <li>Places to Visit</li>
        <li>Plan Your Trip</li>
        <li>Transport</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
