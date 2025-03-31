// src/pages/index.js
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import './HomePage.css';

const HomePage = () => {
    return (
        <Layout>
            <motion.div
                className="landing-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <header className="hero-section">
                    <div className="hero-text">
                        <h1>Welcome to My Landing Page!</h1>
                        <p>We are glad to have you here.</p>
                        <Link to="/about" className="cta-button">Learn More</Link>
                    </div>
                </header>
                
                <section className="features-section">
                    <div className="feature">
                        <h3>Our Services</h3>
                        <p>Explore our range of services that can help you grow your business.</p>
                    </div>
                    <div className="feature">
                        <h3>Portfolio</h3>
                        <p>See the amazing work we've done for our clients.</p>
                    </div>
                </section>

                <section className="image-section">
                    <motion.img
                        src="https://via.placeholder.com/1200x500"
                        alt="Placeholder"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1 }}
                    />
                </section>
            </motion.div>
        </Layout>
    );
};

export default HomePage;
