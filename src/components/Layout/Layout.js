// src/components/Layout.js
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navbar from '../NavBar/NavBar';
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
