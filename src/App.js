import React from 'react';
import './styles/App.css';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import PlacesGrid from './components/PlacesGrid';
import BookingPanel from './components/BookingPanel';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeroSection />
      <PlacesGrid />
      <BookingPanel />
      <Testimonials />
    </div>
  );
}

export default App;
