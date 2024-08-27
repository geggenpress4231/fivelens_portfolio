import React, { useState } from 'react';
import './Gallery.css';
import { useGalleryContext } from './GalleryContext';
import ImageViewer from '../ImageViewer/ImageViewer';

// Image arrays
const abstractImages = [
    '/abstract/111.jpg',
    '/abstract/155.jpg',
    '/abstract/167.jpg',
    '/abstract/223.jpg',
    '/abstract/343.jpg',
];

const eclipseImages = [
    '/eclipse/282.jpg',
    '/eclipse/283.jpg',
    '/eclipse/289.jpg',
    '/eclipse/291.jpg',
    '/eclipse/293.jpg',
];

const fashionImages = [
    '/fashion/173.jpg',
    '/fashion/175.jpg',
    '/fashion/182.jpg',
    '/fashion/183.jpg',
    '/fashion/184.jpg',
    '/fashion/pt08.jpg',
];

const landscapeImages = [
    '/landscape/27.jpg',
    '/landscape/217.jpg',
    '/landscape/224.jpg',
    '/landscape/294.jpg',
    '/landscape/299.jpg',
    '/landscape/303.jpg',
    '/landscape/306.png',
    '/landscape/317.jpg',
    '/landscape/322.jpg',
    '/landscape/325.jpg',
    '/landscape/337.jpg',
    '/landscape/339.jpg',
    '/landscape/brockville_railway_station.jpg',
    '/landscape/macjohson_conservation_area1.jpg',
    '/landscape/macjohson_conservation_area3.jpg',
    '/landscape/st.lawrence river.jpg',
];

const wildlifeImages = [
    '/wildlife/9.jpg',
    '/wildlife/15.jpg',
    '/wildlife/29.jpg',
    '/wildlife/210.png',
    '/wildlife/319.jpg',
    '/wildlife/321.jpg',
    '/wildlife/331.jpg',
];

const allImages = [
    ...abstractImages,
    ...eclipseImages,
    ...fashionImages,
    ...landscapeImages,
    ...wildlifeImages,
];

const Gallery: React.FC = () => {
  const { category } = useGalleryContext();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const getImagesByCategory = () => {
    switch (category) {
      case 'abstract':
        return abstractImages;
      case 'eclipse':
        return eclipseImages;
      case 'fashion':
        return fashionImages;
      case 'landscape':
        return landscapeImages;
      case 'wildlife':
        return wildlifeImages;
      default:
        return allImages;
    }
  };

  const imagesToRender = getImagesByCategory();

  const handleImageClick = (imgSrc: string) => {
    setSelectedImage(imgSrc);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="gallery">
        {imagesToRender.map((imgSrc, index) => (
          <div className="pics" key={index} onClick={() => handleImageClick(imgSrc)}>
            <img src={imgSrc} alt={`gallery-img-${index}`} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <ImageViewer
          open={Boolean(selectedImage)}
          imageSrc={selectedImage}
          onClose={handleClose}
        />
      )}
    </>
  );
};

export default Gallery;
