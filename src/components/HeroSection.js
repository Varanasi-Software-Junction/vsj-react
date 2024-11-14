import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section">
      {/* <video autoPlay loop muted>
        <source src="/path/to/varanasi-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/3wbasUJJ74E?autoplay=1&mute=1&loop=1&playlist=3wbasUJJ74E"
        title="Varanasi Tour Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="hero-text">
        <h1>Discover the Spiritual Heart of India</h1>
        <p>Plan your journey through the cultural richness of Varanasi.</p>
      </div>
    </div>
  );
}

export default HeroSection;
