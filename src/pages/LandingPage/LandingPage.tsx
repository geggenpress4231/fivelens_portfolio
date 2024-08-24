import React from 'react';
import './LandingPage.css';
import logo from '../../media/logo.png'; // Adjust the path to your logo file

const LandingPage = () => {
  return (
    <div className="landing-container">
      <img src={logo} alt="FiveLens Logo" className="logo" />
      <div className="overlay">
        {/* Other content can go here if needed */}
      </div>
    </div>
  );
};

export default LandingPage;
