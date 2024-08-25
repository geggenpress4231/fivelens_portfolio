import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/system';
import RollUp from '../components/Rollup';
import './Camera.css';
import logo from '../media/explore.png';

const CameraContainer = styled('div')({
  position: 'relative',
  width: '80px',
  height: '80px',
  cursor: 'pointer',
  zIndex: 10,
});

interface CameraProps {
  onClick?: () => void;
}

const Camera: React.FC<CameraProps> = ({ onClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const cameraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset state when the page changes
    const handlePageChange = () => {
      if (location.pathname !== '/') {
        setIsPopupVisible(false);
      }
    };

    handlePageChange(); // Initial check

    return () => {
      handlePageChange(); // Cleanup on page change
    };
  }, [location.pathname]);

  const handleClick = () => {
    console.log('Camera clicked');

    if (location.pathname === '/') {
      // If on home page, navigate to the portfolio page
      navigate('/portfolio');
    } else {
      // Toggle popup visibility if already on portfolio page
      setIsPopupVisible((prev) => !prev);
    }

    setIsClicked(true);

    // Reset the clicked state after 1 second
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  const handleClose = () => {
    console.log('Closing RollUp');
    setIsPopupVisible(false);
  };

  // Close the popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cameraRef.current && !cameraRef.current.contains(event.target as Node)) {
        handleClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cameraRef]);

  return (
    <>
      <Tooltip
        title="Explore"
        placement="top"
        arrow
        sx={{
          '& .MuiTooltip-tooltip': {
            backgroundColor: '#555',
            color: 'white',
            fontSize: '16px',
            fontWeight: 'bold',
            padding: '10px',
          },
          '& .MuiTooltip-arrow': {
            color: '#555',
          },
        }}
      >
        <CameraContainer ref={cameraRef} onClick={handleClick}>
          <img
            src={logo}
            alt="Camera Logo"
            className={`cameraLogo ${isClicked ? 'fast-spin' : ''}`}
          />
          {location.pathname === '/portfolio' && isPopupVisible && (
            <RollUp isVisible={isPopupVisible} onClose={handleClose} />
          )}
        </CameraContainer>
      </Tooltip>
    </>
  );
};

export default Camera;
