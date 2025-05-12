import React, { useEffect, useState } from 'react';

const DynamicGradient = ({ children, gradients: customGradients }) => {
  useEffect(() => {

    const defaultGradients = [
      { angle: 45, colors: ["#e3ecf1", "#F1F2F3"] },
      { angle: 0, colors: ["#c7d3ec", "#F1F2F3"] },
      { angle: 180, colors: ["#bbd4e5", "#F1F2F3"] },
      { angle: 45, colors: ["#e3ecf1", "#F1F2F3"] },
      { angle: 0, colors: ["#c7d3ec", "#F1F2F3"] },
      { angle: 180, colors: ["#01b4af", "#F1F2F3"] },
    ];

    const gradients = customGradients || defaultGradients; // allows for custom gradients on each page

    const lerp = (a, b, t) => a + (b - a) * t;

    const hexToRgb = (hex) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return { r, g, b };
    };

    const rgbToHex = (r, g, b) => {
      return `#${((1 << 24) | (Math.round(r) << 16) | (Math.round(g) << 8) | Math.round(b))
        .toString(16)
        .slice(1)
        .toUpperCase()}`;
    };

    const lerpColor = (color1, color2, t) => {
      const c1 = hexToRgb(color1);
      const c2 = hexToRgb(color2);
      const r = lerp(c1.r, c2.r, t);
      const g = lerp(c1.g, c2.g, t);
      const b = lerp(c1.b, c2.b, t);
      return rgbToHex(r, g, b);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / maxScroll;

      const angle = lerp(90, 180, scrollPercent);

      const totalStops = gradients.length - 1;
      const scaled = scrollPercent * totalStops;
      const lowerIndex = Math.floor(scaled);
      const upperIndex = Math.min(lowerIndex + 1, totalStops);
      const t = scaled - lowerIndex;

      const g1 = gradients[lowerIndex];
      const g2 = gradients[upperIndex];

      const transitionColors = g1.colors.map((color, i) => {
        const nextColor = g2.colors[i] || color;
        return lerpColor(color, nextColor, t);
      });

      const gradient = `linear-gradient(${angle}deg, ${transitionColors.join(", ")})`;

      document.body.style.transition = 'background 0.2s linear';
      document.body.style.background = gradient;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // without this it can be abrupt the first time you scroll
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [visible, setVisible] = useState(false);

  const scrollToComponent = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      id="mainbody-wrapper"
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {children}
    </div>
  );
};

export default DynamicGradient;