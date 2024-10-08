import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import { GalleryProvider } from './components/Gallery/GalleryContext'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/portfolio" 
            element={
              <GalleryProvider>
                <PortfolioPage />
              </GalleryProvider>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
