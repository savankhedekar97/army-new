// ✅ src/components/Banner/HomeSlider.js
import React from "react";
import "./HomeSlider.css";

const slides = [
  {
    image: "/assets/gallery/IMG_0031.jpg",
    title: "Ranked Sailing Events",
    description: "Track performance and results across regional competitions.",
    buttonText: "READ MORE +",
  },
  {
    image: "/assets/gallery/IMG_0041.jpg",
    title: "YAI Youth Nationals",
    description: "Explore youth participation and national ranking opportunities.",
    buttonText: "VIEW INFO",
  },
  {
    image: "/assets/gallery/IMG_0059.jpg",
    title: "Training Camps & Coaching",
    description: "Join national sailing camps with professional guidance.",
    buttonText: "JOIN NOW",
  },
];

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div
      className="home-slider"
      style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
      }}
    >
      <div className="overlay-box">
        <h2>{slides[currentSlide].title}</h2>
        <p>{slides[currentSlide].description}</p>
        <button>{slides[currentSlide].buttonText}</button>
      </div>

      <button className="nav-arrow left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="nav-arrow right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default HomeSlider;
