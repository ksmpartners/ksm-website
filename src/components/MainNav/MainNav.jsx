import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import myLogo from "../../images/KSM_Logo_2c_White (2).svg";
import "./MainNav.css";

const mainMenuItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", mega: true, path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Contact Us", path: "/contact-us" },
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
          {/* <span>KSM Technology Partners</span> */}
        </div>

        <div className={`main-nav__links ${mainMobileOpen ? "main-open" : ""}`}>
          {mainMenuItems.map(({ label, mega, path }) => (
            <div
            key={label}
              className="main-nav__dropdown-wrapper"
              onMouseEnter={() => mega && setMainActiveMenu(label)}
              onMouseLeave={() => mega && setMainActiveMenu(null)}
            >
              <div className="main-nav__item">
                <Link
                  to={path}
                  className={`main-nav__link ${
                    mainActiveMenu === label ? "main-active" : ""
                  }`}
                  onClick={() => mega ? mainToggleMenu(label) : mainCloseAll()}
                >
                  {label}
                  <span className="main-nav__underline" />
                </Link>
              </div>

              {mega && mainActiveMenu === label && (
                <div className="main-mega__menu">
                  <div className="main-mega__section">
                    <h4>Software</h4>
                    <ul>
                      <li><Link to="/services/custom" className="main-nav_link">Custom Solutions</Link></li>
                      <li><Link to="/services/sce" className="main-nav_link">Domino SCE Integration</Link></li>
                      <li><Link to="/services/integration" className="main-nav_link">Systems Integration</Link></li>
                    </ul>
                  </div>
                  <div className="main-mega__section">
                    <h4>Operations</h4>
                    <ul>
                    <li><Link to="/operations/test" className="main-nav_link">Test Automation</Link></li>
                    <li><Link to="/operations/delivery" className="main-nav_link">Delivery Automation</Link></li>
                    <li><Link to="/operations/cloud" className="main-nav_link">Cloud Migration</Link></li>
                    <li><Link to="/operations/management" className="main-nav_link">Project Management</Link></li>
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