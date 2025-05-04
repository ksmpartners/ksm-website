import React from 'react';
import Footer from '../Footer/Footer';
import './Layout.css'; 
import DisplayMainNav from '../MainNav/MainNav';

const Layout = ({ children }) => {
    return (
        <div className='outer-layout'>
        <div className="layout">
            <DisplayMainNav/>
            <main className="content">
                {children}
            </main>
            <Footer />
        </div>
        </div>
    );
};

export default Layout;
