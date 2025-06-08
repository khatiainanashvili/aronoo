import { useNavigate } from "react-router-dom";
import Carousel from "./InfiniteCarousel";
import "./InfiniteCarousel.css";
const images = [
  "images/flying_unicorn.gif",
  "images/IMG_0810.GIF"
  
];

const fackeImages = [
  "images/fake/fake1.JPG",
  "images/fake/fake2.JPG",
  "images/fake/fake3.JPG",
  "images/fake/fake4.JPG",
];

const realImages = [
  "images/real/real2.MOV",
  "images/real/real3.MOV",
  "images/real/real4.MOV",
  "images/real/real5.mov",
  "images/real/real6.MOV",

];
const Home = () => {

  const navigate = useNavigate();
  return <>
  <div className='caroucel_main'>
       <Carousel images={images} />
  </div>


  <div className="facke_home" onClick={() => navigate("/fake")} style={{ cursor: "pointer" }}>
  <h2>FAKE MEMORIES</h2>
   
    <div className="poker-hand">
  {fackeImages.map((src, i) => {
    const offset = i - (fackeImages.length - 1) / 2;
    return (
      <img
        key={i}
        src={src}
        alt={`card-${i}`}
        className="poker-card"
        style={{
          left: '50%',
          top: '50%',
          transform: `
            translate(-50%, -50%)
            rotate(${offset * 8}deg)
            translateX(${offset * 30}px)
          `,
          zIndex: i,
        }}
      />
    );
  })}
</div>
</div>

<div className="real-home"  onClick={() => navigate("/real")} style={{ cursor: "pointer" }}>

  <h2>REAL MEMORIES</h2>
   <div className="poker-hand">
  {realImages.map((src, i) => {
    const offset = i - (realImages.length - 1) / 2;
    return (
      <div
        key={i}
        className="poker-card-wrapper"
        style={{
          position: 'absolute',
          left: '40%',
          top: '25%',
          zIndex: i,
          transform: `
            translate(-50%, -50%)
            rotate(${offset * 8}deg)
            translateX(${offset * 30}px)
          `,
        }}
      >
        <video
          src={src}
          className="poker-card"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    );
  })}
</div>



</div>

  </>
};
  
export default Home;
