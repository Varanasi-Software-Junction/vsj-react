import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section">
      <video autoPlay loop muted>
        <source src="/path/to/varanasi-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-text">
        <h1>Discover the Spiritual Heart of India</h1>
        <p>Plan your journey through the cultural richness of Varanasi.</p>
      </div>
    </div>
  );
}

export default HeroSection;
