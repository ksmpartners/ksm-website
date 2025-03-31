// src/components/Header.js
import React from 'react';
import { Menubar } from 'primereact/menubar';
import './Header.css'; // Import custom styling if needed

const Header = () => {
    const items = [
        { label: 'Home', icon: 'pi pi-home', command: () => window.location.href = '/' },
    ];

    return (
        <header>
            <Menubar model={items} />
        </header>
    );
};

export default Header;
