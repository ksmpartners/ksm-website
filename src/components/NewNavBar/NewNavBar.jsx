import React, { useState } from "react";
import "./NewNavBar.css";
import KSMLogo1 from "../../images/KSM_Logo_Horiz_2c_Blue.svg";
import { navigate } from "gatsby";


const LeftSidebar = () => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menuKey) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo"><img src={KSMLogo1} id="nav-logo"/></div>

      <nav className="sidebar-nav">
        <div className="nav-group">
          <button className="nav-main" onClick={() => toggleMenu("menu1")}>
            About Us
            <span className="arrow">{openMenus["menu1"] ? "▾" : "▸"}</span>
          </button>
          {openMenus["menu1"] && (
            <div className="dropdown">
              <a href="#">Our Team</a>
            </div>
          )}
        </div>

        <div className="nav-group">
          <button className="nav-main" onClick={() => toggleMenu("menu2")}>
            Services
            <span className="arrow">{openMenus["menu2"] ? "▾" : "▸"}</span>
          </button>
          {openMenus["menu2"] && (
            <div className="dropdown">
              <a href="#">Software Engineering</a>
              <a href="#">Test Automation</a>
              <a href="#">Delivery Automation</a>
              <a href="#">Cloud Migration</a>
              <a href="#">Systems Integration</a>
              <a href="#">Project Management</a>

            </div>
          )}
        </div>

        <a href="/blog" className="single-nav-link">Blog</a>


        <a href="/case-studies" className="single-nav-link">Case Studies</a>

        <a href="/contact-us" className="single-nav-link">Contact Us</a>
      </nav>

      <div className="sidebar-footer">
        <a href="#" className="logout-link">Logout</a>
      </div>
    </aside>
  );
};

export default LeftSidebar;