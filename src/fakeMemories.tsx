import { useState } from "react";
import "./InfiniteCarousel.css";

const fackeImages = [
  "images/fake/fake4.JPG",
  "images/fake/fake5.JPG",
  "images/fake/fake2.JPG",
  "images/fake/fake1.JPG",
  "images/fake/fake3.JPG",
  
];

const FakeMemories = () => {
  const [fullscreenSrc, setFullscreenSrc] = useState<string | null>(null);

  return (
    <>
      <div className="masonry-grid">
        {fackeImages.map((src, i) => (
          <div className="grid-item" key={i}>
            <img
              src={src}
              alt={`card-${i}`}
              onClick={() => setFullscreenSrc(src)}
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}
      </div>

      {fullscreenSrc && (
        <div className="fullscreen-overlay" onClick={() => setFullscreenSrc(null)}>
          <span className="close-button" onClick={(e) => { e.stopPropagation(); setFullscreenSrc(null); }}>✖</span>
          <img src={fullscreenSrc} alt="fullscreen" className="fullscreen-image" />
        </div>
      )}
    </>
  );
};

export default FakeMemories;
