// src/components/Footer.js
import React from 'react';
import './Footer.css';
import Div1 from './Div1-Nav.js'
import Div2 from './Div2-Services.js'
import Div3 from './Div3-Address.js'

const Footer = () => {
    return (
        <footer>
            <div id="Footer">
                <div>Message Area</div>
                <div className="nested-grid">
                    <div className="grid-item nested"><Div1 /></div>
                    <div className="grid-item nested"><Div2 /></div>
                    <div className="grid-item nested"><Div3 /></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
