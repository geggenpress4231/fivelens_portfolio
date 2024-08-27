
import React, { createContext, useContext, useState } from 'react';

interface GalleryContextProps {
  category: string | null;
  setCategory: (category: string | null) => void;
}

const GalleryContext = createContext<GalleryContextProps | undefined>(undefined);

export const GalleryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [category, setCategory] = useState<string | null>(null);

  return (
    <GalleryContext.Provider value={{ category, setCategory }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGalleryContext = () => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error('useGalleryContext must be used within a GalleryProvider');
  }
  return context;
};
