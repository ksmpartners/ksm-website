import React, { useState, useRef, useEffect } from "react";
import myLogo from "../../images/src/images/KSM_Logo_2c_White (2).svg";
import "./MainNav.css";

const mainMenuItems = [
  { label: "Home" },
  { label: "Services", mega: true },
  { label: "About" },
  { label: "Resources", mega: true },
  { label: "Contact" },
];

const DisplayMainNav = () => {
  const mainNavRef = useRef();
  const [mainActiveMenu, setMainActiveMenu] = useState(null);
  const [mainMobileOpen, setMainMobileOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mainNavRef.current && !mainNavRef.current.contains(e.target)) {
        setMainActiveMenu(null);
        setMainMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const mainToggleMenu = (label) => {
    setMainActiveMenu((prev) => (prev === label ? null : label));
  };

  const mainCloseAll = () => {
    setMainActiveMenu(null);
    setMainMobileOpen(false);
  };

  return (
    <nav className="main-nav">
      <div className="main-nav__container" ref={mainNavRef}>
        <div className="main-nav__logo">
          <img src={myLogo} alt="Logo" className="main-nav__logo-img" />
          <span>MySite</span>
        </div>

        <div className={`main-nav__links ${mainMobileOpen ? "main-open" : ""}`}>
          {mainMenuItems.map(({ label, mega }) => (
            <div
            key={label}
              className="main-nav__dropdown-wrapper"
              onMouseEnter={() => mega && setMainActiveMenu(label)}
              onMouseLeave={() => mega && setMainActiveMenu(null)}
            >
              <div className="main-nav__item">
                <button
                  className={`main-nav__link ${
                    mainActiveMenu === label ? "main-active" : ""
                  }`}
                  onClick={() => mega ? mainToggleMenu(label) : mainCloseAll()}
                >
                  {label}
                  <span className="main-nav__underline" />
                </button>
              </div>

              {mega && mainActiveMenu === label && (
                <div className="main-mega__menu">
                  <div className="main-mega__section">
                    <h4>Category 1</h4>
                    <ul>
                      <li>Option A</li>
                      <li>Option B</li>
                    </ul>
                  </div>
                  <div className="main-mega__section">
                    <h4>Category 2</h4>
                    <ul>
                      <li>Option C</li>
                      <li>Option D</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className="main-nav__hamburger"
          onClick={() => setMainMobileOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
};

export default DisplayMainNav;