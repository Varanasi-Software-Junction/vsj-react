import React from 'react';
import './PlacesGrid.css';

function PlacesGrid() {
  const places = ['Ganges Ghats', 'Kashi Vishwanath Temple', 'Sarnath', 'Local Markets'];

  return (
    <div className="places-grid">
      {places.map((place, index) => (
        <div key={index} className="place-card">
          <h3>{place}</h3>
          <p>Explore the beauty and history of {place}.</p>
        </div>
      ))}
    </div>
  );
}

export default PlacesGrid;
