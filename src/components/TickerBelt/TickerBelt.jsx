import React from "react";
import "./TickerBelt.css";

const TickerBelt = ({ logos = [] }) => {
  const duplicatedLogos = [...logos, ...logos]; // loop effect

  return (
    <div className="ticker-wrapper">
      <div className="ticker-track">
      {duplicatedLogos.map((logo, i) => (
  <div
    className="ticker-item"
    key={i}
    style={{ animationDelay: `${Math.random() * 3}s` }}
  >
    {typeof logo === "string" ? (
      <img src={logo} alt={`logo-${i}`} />
    ) : (
      logo
    )}
  </div>
))}
      </div>
    </div>
  );
};

export default TickerBelt;