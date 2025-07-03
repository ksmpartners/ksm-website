import React, { useEffect, useState } from "react";
import "./DarkToggle.css";

function DarkModeButton() {
   const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.body.classList.contains('web-page-dark');
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('web-page-dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('web-page-dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="button-parent-night-mode">
    <button
      className="darkToggleButton"
      data-state={isDark ? "dark" : "light"}
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      type="button"
    >
      <span className="toggleThumb">
        {isDark ? (
          /* the MOON icon SVG (can I get this abstracted later?) */
          <svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 0112.21 3 7 7 0 1021 12.79z" />
          </svg>
        ) : (
          /* the SUN icon SVG */
          <svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        )}
      </span>
    </button>
    </div>
  );
}

export default DarkModeButton;
