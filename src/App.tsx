import { Routes, Route, HashRouter, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import RealMemories from './realMemories';
import FakeMemories from './fakeMemories';
import Home from "./home";



const App = () => {
  
  const fairyRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const moveFairy = () => {
      if (fairyRef.current) {
        const maxX = window.innerWidth - fairyRef.current.offsetWidth;
        const maxY = window.innerHeight - fairyRef.current.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        fairyRef.current.style.left = `${randomX}px`;
        fairyRef.current.style.top = `${randomY}px`;
      }
    };

    // Move the fairy initially and then every 3 seconds
    moveFairy();
    const interval = setInterval(moveFairy, 3000);

    return () => clearInterval(interval); // Clean up
  }, []);
 const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="main">
  
         <HashRouter>
      <header className="nav-header">

        <div className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </div>

        <nav className={`cool-navbar ${menuOpen ? "show" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}> Homie</Link>
          <Link to="/fake" onClick={() => setMenuOpen(false)}> Fake Memories</Link>
          <Link to="/real" onClick={() => setMenuOpen(false)}> Real Memories</Link>
         
        </nav>
      </header>
  

        <img
          src={'images/fairy.gif'}
          alt="flying fairy"
          className="fairy"
          ref={fairyRef}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/real" element={<RealMemories />} />
          <Route path="/fake" element={<FakeMemories />} />
        </Routes>
      </HashRouter>

       <footer>
         <img src={"images/footer.PNG"} alt="" />
      </footer>
    </div>
  );
};

export default App;
