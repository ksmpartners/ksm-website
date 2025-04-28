import React from 'react';
import Footer from '../Footer/Footer';
import './Layout.css'; 

const Layout = ({ children }) => {
    return (
        <div className='outer-layout'>
        <div className="layout">
            <main className="content">
                {children}
            </main>
            <Footer />
        </div>
        </div>
    );
};

export default Layout;
