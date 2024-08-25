import React from 'react';
import './LandingPage.css';
import Logo from '../../components/Logo'; // Import the new Logo Component
import Camera from '../../components/Camera'; // Import the Camera Component

const LandingPage = () => {
  return (
    <div className="landing-container">
      <Logo /> {/* Use the Logo component */}
      <div className="camera-wrapper">
        <Camera />
      </div>
      <div className="overlay">
        {/* Other content can go here if needed */}
      </div>
    </div>
  );
};

export default LandingPage;
