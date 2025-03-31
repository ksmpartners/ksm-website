// src/pages/about.js
import React from 'react';
import Layout from '../components/Layout';
import MyCard from '../components/MyCard';

const AboutPage = () => {
    return (
        <Layout>
            <div className="about-content">
                <h1>About Us</h1>
                <MyCard />
            </div>
        </Layout>
    );
};

export default AboutPage;
