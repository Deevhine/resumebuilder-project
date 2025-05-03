import "../files/index.css";
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Templates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const images = [
    'src/assets/Homepage-1-New.webp',
    'src/assets/Homepage-10.webp',
    'src/assets/Homepage-9-New-2.webp',
    'src/assets/Homepage-8.webp',
    'src/assets/Homepage-7-New-2.webp',
    'src/assets/Homepage-6.webp',
    'src/assets/Homepage-5.webp',
    'src/assets/Homepage-4-New.webp',
    'src/assets/Homepage-3.webp',
    'src/assets/Homepage-2.webp',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // adjust the time according to your needs

    return () => clearTimeout(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 3));
  };

  return (
    <>
      {loading ? (
        <div className="loader-holder">
          <div className="loader"></div>
          <div className="loader-text">Loading...</div>
        </div>
      ) : (
        <div className="card-0001">
          <div className="amination-1">
            <button className="prev-button" onClick={handlePrevious}>&#10094;</button>
            {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
              <div key={index} className="image-slider2">
                <div className="image-container">
                  <img src={image} alt="" />
                  <div className="overlay">
                    <NavLink to='/form'>
                      <button className='view-button-1'>Use template</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
            <button className="next-button" onClick={handleNext}>&#10095;</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Templates;



