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
          maxWidth: '90%',
          maxHeight: '90%',
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
          }}
        >
          <CardMedia
            component="img"
            image={imageSrc}
            alt="Selected Image"
            sx={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </Card>
      </Box>
    </Modal>
  );
};

export default ImageViewer;
