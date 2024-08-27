import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logo.css';
import logo from '../../media/logo.png';

const Logo: React.FC = () => {
  const navigate = useNavigate(); // Hook to navigate between routes

  const handleClick = () => {
    navigate('/'); // Navigate to the homepage
  };

  return (
    <div className="logo-container" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={logo} alt="FiveLens Logo" className="logo" />
  
    </div>
  );
};

export default Logo;
