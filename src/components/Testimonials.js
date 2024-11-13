import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'The trip to Varanasi was incredible! The services provided made it easy to explore the city and enjoy every moment.',
      location: 'New York, USA'
    },
    {
      name: 'Aditi Sharma',
      feedback: 'Amazing experience! The guided tour was well-organized, and the support on WhatsApp was quick and helpful.',
      location: 'Mumbai, India'
    },
    {
      name: 'Liam O\'Connor',
      feedback: 'A memorable journey! The hotel and transport bookings were seamless, and Varanasi is a must-visit destination.',
      location: 'Dublin, Ireland'
    }
  ];

  return (
    <div className="testimonials-section">
      <h2>What Our Visitors Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
            <p className="testimonial-location">{testimonial.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
