import React, { useState } from 'react';
import './PortfolioPage.css';
import Logo from '../../components/Logo/Logo';
import Camera from '../../components/Camera/Camera';
import RollUp from '../../components/Rollup/Rollup';
import Gallery from '../../components/Gallery/Gallery';

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
      <div className="gallery-wrapper">
      <Gallery/>
    </div>
    </div>
   
  );
};

export default PortfolioPage;
