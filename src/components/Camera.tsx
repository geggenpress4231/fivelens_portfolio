import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import './Camera.css';
import logo from '../media/explore.png'; // Replace with the correct path to your logo

const CameraContainer = styled('div')({
  position: 'absolute',
  bottom: '50px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '80px',
  height: '80px',
  overflow: 'hidden',
  cursor: 'pointer',
});

const Camera: React.FC = () => {
  return (
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
      <CameraContainer>
        <img src={logo} alt="Camera Logo" className="cameraLogo" />
      </CameraContainer>
    </Tooltip>
  );
};

export default Camera;
