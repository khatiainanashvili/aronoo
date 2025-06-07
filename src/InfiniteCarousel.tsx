import React, { useState } from "react";
import "./InfiniteCarousel.css";

interface CarouselProps {
  images: string[];
  width?: number;
  height?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={{ position: "relative"}} className="caroucel">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
         }}
      />
      <button
        onClick={prev}
        style={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "white",
          border: "none",
          padding: "0.5rem 1rem",
          cursor: "pointer",
        }}
      >
        ‹
      </button>
      <button
        onClick={next}
        style={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "white",
          border: "none",
          padding: "0.5rem 1rem",
          cursor: "pointer",
        }}
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
