import React, { useState, useEffect } from 'react';
import './Rollup.scss';
import { useGalleryContext } from '../Gallery/GalleryContext';

interface RollUpProps {
  isVisible: boolean;
  onClose?: () => void;
}

const RollUp: React.FC<RollUpProps> = ({ isVisible, onClose }) => {
  const [initialized, setInitialized] = useState(false);
  const { setCategory } = useGalleryContext();

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      console.log('RollUp initialized');
    }
  }, [initialized]);

  useEffect(() => {
    console.log('RollUp visibility changed:', isVisible);
  }, [isVisible]);

  console.log('RollUp rendering:', { isVisible, initialized });

  if (!initialized) {
    console.log('RollUp not initialized yet');
    return null; // Don't render until initialized
  }

  const handleSelect = (category: string) => {
    setCategory(category);
    if (onClose) onClose(); // Close the RollUp after selection
  };

  return (
    <div className={`RollUpContainer ${isVisible ? 'isVisible' : 'isHidden'}`}>
      <ul className="GenreList">
        <li onClick={() => handleSelect('abstract')}>Abstract</li>
        <li onClick={() => handleSelect('eclipse')}>Eclipse</li>
        <li onClick={() => handleSelect('wildlife')}>Wildlife</li>
        <li onClick={() => handleSelect('fashion')}>Fashion</li>
        <li onClick={() => handleSelect('landscape')}>Landscape</li>
        <li onClick={() => handleSelect('all')}>All</li>
      </ul>
    </div>
  );
};

export default RollUp;
