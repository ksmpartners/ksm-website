import React, { useEffect, useState } from "react";
import "./TechScroll.css";

const SECTIONS = [
  { id: "about", label: "About Us" },
  { id: "history", label: "History" },
  { id: "values", label: "Values" },
];

export default function TechScrollLine() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function onScroll() {
      const center = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDist = Infinity;

      SECTIONS.forEach(({ id }, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top + rect.height / 2 - center);
        if (dist < closestDist) {
          closestDist = dist;
          closestIndex = i;
        }
      });

      setActiveIndex(closestIndex);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="ab-scroll-container">
      {SECTIONS.map(({ id, label }, i) => (
        <div key={id} className="ab-scroll-node-wrapper">
          <div
            className={`ab-scroll-dot ${i === activeIndex ? "active" : ""}`}
          />
          {i < SECTIONS.length - 1 && <div className="ab-scroll-line" />}
          <div
            className={`ab-scroll-label ${i === activeIndex ? "active" : ""}`}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
