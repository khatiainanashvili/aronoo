import { useState } from "react";
import "./InfiniteCarousel.css";

const realImages = [
  "images/real/real2.MOV",
  "images/real/real3.MOV",
  "images/real/real4.MOV",
  "images/real/real5.mov",
  "images/real/real6.MOV",
  "images/real/real7.mp4",
];

const RealMemories = () => {
  const [fullscreenVideo, setFullscreenVideo] = useState<string | null>(null);

  return (
    <>
      <div className="masonry-grid">
        {realImages.map((src, index) => (
          <div className="grid-item" key={index}>
            <video
              src={src}
              muted
              loop
              playsInline
              controls
              className="grid-video"
              onClick={() => setFullscreenVideo(src)}
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}
      </div>

      {fullscreenVideo && (
        <div className="fullscreen-overlay" onClick={() => setFullscreenVideo(null)}>
          <span
            className="close-button"
            onClick={(e) => {
              e.stopPropagation();
              setFullscreenVideo(null);
            }}
          >
            ✖
          </span>
          <video
            src={fullscreenVideo}
            autoPlay
            muted
            loop
            controls
            className="fullscreen-video"
          />
        </div>
      )}
    </>
  );
};

export default RealMemories;
