import React, { useEffect, useRef, useState } from "react";
import "./HeroHome.css";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import ParticleOptions from "./ParticlesOptions";

import myLogo from "../../../images/KSM_Logo_2c_White (2).svg";

const DisplayHeroHome = () => {
  const terminalRef = useRef(null);


  const [init, setInit] = useState(false);

 

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  useEffect(() => {
    const phrases = [
      "More than just technology.",
      "Built to scale. Styled to inspire.",
      "Innovation drives delivery.",
    ];
  
    const el = document.getElementById("dynamic-subtext");
    if (!el) return;
  
    let current = 0;
    let charIndex = 0;
    let typing = true;
  
    const type = () => {
      if (!typing) return;
  
      if (charIndex < phrases[current].length) {
        el.textContent += phrases[current][charIndex++];
        setTimeout(type, 50);
      } else {
        typing = false;
        setTimeout(() => {
          erase();
        }, 2000); // Pause after typing
      }
    };
  
    const erase = () => {
      if (charIndex > 0) {
        el.textContent = phrases[current].slice(0, --charIndex);
        setTimeout(erase, 30);
      } else {
        current = (current + 1) % phrases.length;
        typing = true;
        setTimeout(type, 300);
      }
    };
  
    type();
  }, []);
  

 
  return (
    <div className="home-container">
      {/* CLICK anywhere in background on the web ui TO ADD MORE
      particles   */}
      {/* <Particles id="tsparticles" options={ParticleOptions} /> */}

      {/* Hero + rest of page (unchanged) */}
      <div className="main-content">

        
        <h1 className="hero-title">Innovate. Execute. Empower</h1>

        <p className="hero-subtext dynamic" id="dynamic-subtext"></p>

        
        <div className="hero-buttons">
          <button className="hero-btn primary">Learn More</button>
          
          <button className="hero-btn secondary">Request Demo</button>
        </div>
      </div>
      {/* <AnimatedTerminal/> */}

      {/* Features & Terminal ... (keep those same as before) */}
    </div>
    
  );
};

export default DisplayHeroHome;