// src/components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './NavBar';
import './Layout.css'; // Layout styles if needed

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <Navbar />
            <main className="content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
