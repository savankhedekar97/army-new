// 📁 File: src/pages/Event/Results.js
import React, { useEffect, useState } from 'react';
import './Results.css';
import { Link } from 'react-router-dom';

const galleryImages = [
  '/assets/gallery/IMG_0031.jpg',
  '/assets/gallery/IMG_0179.jpg',
  '/assets/gallery/IMG_0248.jpg',
  '/assets/gallery/IMG_0288.jpg',
];

function Results() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="result-page glassy-overlay"
      style={{ backgroundImage: `url(${galleryImages[currentImage]})` }}
    >
      <div className="overlay">
        <Link to="/results/youth-national-2025" className="animated-link">
          YAI Youth National – 2025
        </Link>
      </div>
    </div>
  );
}

export default Results;
