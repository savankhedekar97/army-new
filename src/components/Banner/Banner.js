import React, { useState, useEffect, useRef } from 'react';
import './Banner.css';

const taglines = [
  'Service Before Self',
  'Brave Hearts, Fearless Minds'
];

export default function Banner() {
  const [hovered, setHovered] = useState(false);
  const [idx, setIdx] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (hovered) {
      intervalRef.current = setInterval(() => {
        setIdx(i => (i + 1) % taglines.length);
      }, 4000);
    } else {
      clearInterval(intervalRef.current);
      setIdx(0);
    }
    return () => clearInterval(intervalRef.current);
  }, [hovered]);

  return (
    <div className="banner">
      <div
        className="banner-bg"
        style={{ backgroundImage: 'url(/assets/hero/hero2.jpg)' }}
      />

      <div
        className="brand-box"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src="/assets/images/LOGO NOAI.jpg"
          alt="NOAI Logo"
          className="brand-logo"
        />

        <div className="text-wrapper">
          <h1 className="brand-text">
            National Optimist<br/>
            Association of <span>India</span>
          </h1>

          {hovered && (
            <p key={idx} className="tagline">
              {taglines[idx]}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
