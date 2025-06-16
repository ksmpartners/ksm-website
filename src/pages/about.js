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
        photo="https://mlkf69dsvkey.i.optimole.com/w:300/h:300/q:mauto/ig:avif/f:best/https://www.ksmpartners.com/wp-content/uploads/2022/01/harnish.jpg"
        name="Mike Harnish"
        description="CEO"
        link="https://www.ksmpartners.com/team/mike-harnish/"
      />
            </div>
            
                   
        </Layout>
    );
};

export default AboutPage;
