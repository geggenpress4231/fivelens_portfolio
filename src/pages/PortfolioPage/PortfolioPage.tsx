import React, { useState } from 'react';
import './PortfolioPage.css';
import Logo from '../../components/Logo';
import Camera from '../../components/Camera';
import RollUp from '../../components/Rollup';

const PortfolioPage: React.FC = () => {
  const [isRollUpVisible, setIsRollUpVisible] = useState(false);

  const handleCameraClick = () => {
    setIsRollUpVisible(true); // Show the roll-up component when the camera is clicked
  };

  const handleClose = () => {
    setIsRollUpVisible(false); // Hide the roll-up component
  };

  return (
    <div className="portfolio-container">
      <Logo />
      <div className="camera-wrapper">
        <Camera onClick={handleCameraClick} />
      </div>
      {isRollUpVisible && <RollUp isVisible={isRollUpVisible} onClose={handleClose} />}
    </div>
  );
};

export default PortfolioPage;
