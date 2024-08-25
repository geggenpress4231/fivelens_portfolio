import React from 'react';
import './Logo.css';
import logo from '../media/logo.png'; // Adjust the path to your logo file

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="FiveLens Logo" className="logo" />
      <div className="logo-text">𝓟𝓱𝓸𝓽𝓸𝓰𝓻𝓪𝓹𝓱𝔂</div>
    </div>
  );
};

export default Logo;
