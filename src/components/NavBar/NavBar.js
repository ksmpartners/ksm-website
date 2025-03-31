import React, { useState } from "react";
import { Link } from "gatsby";
import { Dropdown } from 'primereact/dropdown';
import 'primeicons/primeicons.css'; // Importing PrimeIcons
import './NavBar.css'; // Your CSS for styling

const NavBar = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    // Menu items for the dropdown
    const moreItems = [
        { label: 'Contact', value: '/contact' },
        { label: 'Portfolio', value: '/portfolio' },
        { label: 'Blog', value: '/blog' },
    ];

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    return (
        <nav>
            {/* Logo */}
            <Link to="/" className="logo">
                <i className="pi pi-home"></i> {/* Icon for the logo */}
                MySite
            </Link>
            
            {/* Navbar Menu */}
            <ul className={`menu ${isMenuActive ? 'active' : ''}`}>
                <li><Link to="/"><i className="pi pi-home"></i> Home</Link></li>
                <li><Link to="/about"><i className="pi pi-info-circle"></i> About</Link></li>
                <li><Link to="/services"><i className="pi pi-cogs"></i> Services</Link></li>

                {/* More Dropdown */}
                <li className="dropdown-container">
                  <Dropdown 
                      value={null} 
                      options={moreItems} 
                      onChange={(e) => window.location.href = e.value} 
                      placeholder="More"
                      itemTemplate={(item) => (
                          <div className="dropdown-item">
                              <i className={`pi ${item.icon}`} style={{ marginLeft: '40px' }}></i>
                              {item.label}
                          </div>
                      )}
                      className="more-dropdown"
                  />
                </li>
            </ul>

            {/* Hamburger Menu for Mobile */}
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
};

export default NavBar;
