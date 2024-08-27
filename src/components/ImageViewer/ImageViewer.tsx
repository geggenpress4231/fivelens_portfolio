import React from 'react';
import { Modal, Box, Card, CardMedia } from '@mui/material';

interface ImageViewerProps {
  open: boolean;
  imageSrc: string;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ open, imageSrc, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="image-viewer-title"
      aria-describedby="image-viewer-description"
      closeAfterTransition
      BackdropProps={{
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)', 
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'auto',
          maxWidth: '90vw',  // 90% of the viewport width
          maxHeight: '90vh', // 90% of the viewport height
          boxShadow: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Card
          sx={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden', // Ensure no overflow
          }}
        >
          <CardMedia
            component="img"
            image={imageSrc}
            alt="Selected Image"
            sx={{
              width: '100%',
              height: '100%',
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain', // Ensure the image scales to fit within the constraints
            }}
          />
        </Card>
      </Box>
    </Modal>
  );
};

export default ImageViewer;
