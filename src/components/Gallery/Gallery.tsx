import React from 'react';
import './Gallery.css';

// Abstract images
const abstractImages = [
    '/abstract/111.jpg',
    '/abstract/155.jpg',
    '/abstract/167.jpg',
    '/abstract/223.jpg',
    '/abstract/343.jpg',
];

// Eclipse images
const eclipseImages = [
    '/eclipse/282.jpg',
    '/eclipse/283.jpg',
    '/eclipse/289.jpg',
    '/eclipse/291.jpg',
    '/eclipse/293.jpg',
];

// Fashion images
const fashionImages = [
    '/fashion/173.jpg',
    '/fashion/175.jpg',
    '/fashion/182.jpg',
    '/fashion/183.jpg',
    '/fashion/184.jpg',
    '/fashion/pt08.jpg',
];

// Landscape images
const landscapeImages = [
    '/landscape/27.jpg',
    '/landscape/217.jpg',
    '/landscape/224.jpg',
    '/landscape/294.jpg',
    '/landscape/299.jpg',
    '/landscape/303.jpg',
    '/landscape/306.jpg',
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

// Wildlife images
const wildlifeImages = [
    '/wildlife/9.jpg',
    '/wildlife/15.jpg',
    '/wildlife/29.jpg',
    '/wildlife/210.jpg',
    '/wildlife/319.jpg',
    '/wildlife/321.jpg',
    '/wildlife/331.jpg',
];

// Combine all image URLs into one array
const allImages = [
    ...abstractImages,
    ...eclipseImages,
    ...fashionImages,
    ...landscapeImages,
    ...wildlifeImages,
];

const Gallery: React.FC = () => {
    return (
        <div className="gallery">
            {allImages.map((imgSrc, index) => (
                <div className="pics" key={index}>
                    <img src={imgSrc} alt={`gallery-img-${index}`} />
                </div>
            ))}
        
        </div>
    );
};

export default Gallery;
