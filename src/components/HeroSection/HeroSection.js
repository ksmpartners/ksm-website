import React from 'react';
import AnimatedIcon from "../icons/AnimatedIcon"; // Adjust path as needed

const HeroSection = () => {
  console.log('HeroSection rendered');  // This will help confirm it's rendering

  return (
    <section 
      style={{   // Ensure it is positioned correctly
        height: '100vh',           // Take up full viewport height
        overflow: 'hidden',        // Ensure no overflow is visible
        // zIndex: 9999,              // High z-index to make sure it's on top of everything
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Temporary background color to confirm visibility
      }}
    >
      {/* Rive animation overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',  // Ensure it doesn't block user interactions
          zIndex: 1, // Keep animation layer below the content layer
        }}
      >
        <AnimatedIcon />  {/* Your animated icon (Rive animation) */}
      </div>

      {/* Foreground content */}
      <div 
        style={{ 
          position: 'relative', 
          zIndex: 2, // Foreground content should always be above the animation
          padding: '2rem', 
          color: 'white',
        }}
      >
        <h1>Welcome to Our Site</h1>
        <p>This is our awesome hero section with animation.</p>
      </div>
    </section>
  );
};

export default HeroSection;
