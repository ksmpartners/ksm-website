// src/pages/about.js
import React from 'react';
import Layout from '../components/Layout/Layout';
import MyCard from '../components/MyCard';
import AboutCard from '../components/AboutCard/Aboutcard';

const AboutPage = () => {
    return (
        <Layout>
            <div className="about-content">
                <h1>About Us</h1>
                <AboutCard
        photo="Myname.jpg"
        name="My Name"
        description="CEO"
        link="http://www.MyName.com"
      />
            </div>
        </Layout>
    );
};

export default AboutPage;
