import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import { Dropdown } from 'primereact/dropdown';
import 'primeicons/primeicons.css';
import './NavBar.css'; 
import KSMLogo1 from "../../images/KSM_Logo_2c_White (2).svg";

const NavBar = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    // Menu items for the dropdown (just examples if needed in future)
    const moreItems = [
        { label: 'Contact', value: '/contact' },
        { label: 'Portfolio', value: '/portfolio' },
    ];

    const handleLogoClick = () => {
        navigate("/");
    }

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    return (
        <nav>
            {/* ksm logo */}
            <img src={KSMLogo1} id="nav-logo-main" onClick={handleLogoClick}/>
            
            {/* Navbar Menu */}
            <ul className={`menu ${isMenuActive ? 'active' : ''}`}>
                <li><Link to="/"><i className="pi pi-home"></i> Home</Link></li>
                <li><Link to="/about"><i className="pi pi-info-circle"></i> About Us</Link></li>
                <li><Link to="/services"><i className="pi pi-cogs"></i> Services</Link></li>
                <li><Link to="/blog"><i className="pi pi-cogs"></i> Blog</Link></li>
                <li><Link to="/case-studies"><i className="pi pi-cogs"></i> Case Studies</Link></li>
                <li><Link to="/case-studies"><i className="pi pi-cogs"></i> Contact Us</Link></li>

                {/* More Dropdown */}
                <li className="dropdown-container">
                 
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
