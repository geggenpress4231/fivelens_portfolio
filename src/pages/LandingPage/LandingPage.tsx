import React from 'react';
import './LandingPage.css';
import Logo from '../../components/Logo'; // Import the new Logo Component
import Camera from '../../components/Camera'; // Import the Camera Component

const LandingPage = () => {
  return (
    <div className="landing-container">
      <Logo /> 
      <div className="camera-wrapper">
        <Camera />
      </div>
      <div className="overlay">
    
      </div>
    </div>
  );
};

export default LandingPage;
