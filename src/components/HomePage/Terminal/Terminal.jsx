import React, { useEffect, useRef } from "react";
import "./Terminal.css";

const AnimatedTerminal = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    const terminal = terminalRef.current;
    if (!terminal) return;
  
    terminal.innerHTML = ""; // ✅ Clear previous content
  
     const lines = [
      "$ npm install innovation",
      "$ starting AI-integrated engine...",
      "...",
      "✔ Connected to futuristic UI",
      "✔ Deploying features...",
      "🚀 Success: Welcome to KSM Technology.",
    ];
  
    let index = 0;
    let charIndex = 0;
    let currentLine = lines[index];
    let interval;
  
    const typeChar = () => {
      if (index >= lines.length) return;
  
      if (charIndex < currentLine.length) {
        terminal.innerHTML += currentLine[charIndex++];
      } else {
        terminal.innerHTML += "<br/>";
        index++;
        charIndex = 0;
        currentLine = lines[index];
      }
    };
  
    interval = setInterval(() => {
      typeChar();
    }, 30);
  
    return () => {
      clearInterval(interval); // ✅ Clean up on unmount or refresh
    };
  }, []);
  


  return (
    <section className="terminal-section">

      <div className="terminal-box">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <pre className="terminal-output">
          <code ref={terminalRef}></code>
        </pre>
      </div>
    </section>
  );
};

export default AnimatedTerminal;