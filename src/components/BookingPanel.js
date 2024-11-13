import React, { useState } from 'react';
import './BookingPanel.css';

function BookingPanel() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Thank you, ${name}! We will contact you at ${phone} to confirm your booking.`);
    setName('');
    setPhone('');
    setDate('');
  };

  return (
    <div className="booking-panel">
      <h2>Book Your Visit</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p className="confirmation-message">{message}</p>}
    </div>
  );
}

export default BookingPanel;
