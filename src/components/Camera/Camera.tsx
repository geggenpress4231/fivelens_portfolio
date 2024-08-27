import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/system';
import RollUp from '../Rollup/Rollup';
import './Camera.css';
import logo from '../../media/explore.png';

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
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const cameraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsPopupVisible(false);
    }
  }, [location.pathname]);

  const handleClick = useCallback(() => {
    console.log('Camera clicked');

    if (location.pathname === '/') {
      navigate('/portfolio');
    } else {
      setIsPopupVisible((prev) => !prev);
    }

    setIsClicked(true);

    setTimeout(() => setIsClicked(false), 1000);
  }, [location.pathname, navigate]);

  const handleClose = useCallback(() => {
    console.log('Closing RollUp');
    setIsPopupVisible(false);
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (cameraRef.current && !cameraRef.current.contains(event.target as Node)) {
      handleClose();
    }
  }, [cameraRef, handleClose]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  const tooltipStyles = {
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
  };

  const renderRollUp = () => {
    if (location.pathname === '/portfolio' && isPopupVisible) {
      return <RollUp isVisible={isPopupVisible} onClose={handleClose} />;
    }
    return null;
  };

  return (
    <>
      <Tooltip title="Explore" placement="top" arrow sx={tooltipStyles}>
        <CameraContainer ref={cameraRef} onClick={handleClick}>
          <img
            src={logo}
            alt="Camera Logo"
            className={`cameraLogo ${isClicked ? 'fast-spin' : ''}`}
          />
          {renderRollUp()}
        </CameraContainer>
      </Tooltip>
    </>
  );
};

export default Camera;
