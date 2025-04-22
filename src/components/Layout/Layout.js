// src/components/Layout.js
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navbar from '../NavBar/NavBar';
import './Layout.css'; // Layout styles if needed
import TopMegaMenu from '../TopMegaMenu/TopMegaMenu';
import HeroSection from '../HeroSection/HeroSection';
import AnimatedIcon from "../icons/AnimatedIcon";
// import LayersIcon from "../icons/LayersIcon";
import { SettingsGearIcon } from '../icons/SettingsGearIcon';
import { RocketIcon } from '../icons/RocketIcon';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            
            {/* <Navbar /> */}
            <TopMegaMenu />
            {/* <HeroSection /> */}
            {/* <AnimatedIcon /> */}
            {/* <SettingsGearIcon /> */}
            {/* <RocketIcon /> */}
            {/* <LayersIcon /> */}
            <main className="content">
                {children}
            </main>
            
            <Footer />
        </div>
    );
};

export default Layout;


