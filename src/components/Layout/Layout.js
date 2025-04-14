// src/components/Layout.js
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navbar from '../NavBar/NavBar';
import VerticalNavbar from '../NewNavBar/NewNavBar';
import './Layout.css'; // Layout styles if needed


const Layout = ({ children }) => {
    return (
        <div className='outer-layout'>
              <VerticalNavbar/>
        <div className="layout">
        <Header />

      

            {/* <Navbar /> */}
            <main className="content">
                {children}
            </main>
            <Footer />
        </div>
        </div>
    );
};

export default Layout;
