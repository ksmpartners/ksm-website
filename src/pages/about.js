// src/pages/about.js
import React from 'react';
import Layout from '../components/Layout/Layout';
import MyCard from '../components/MyCard';

const AboutPage = () => {
    return (
        <Layout>
            <div className="about-content">
                <h1>About Us</h1>
                <p>testing</p>
                <MyCard />
            </div>
        </Layout>
    );
};

export default AboutPage;
