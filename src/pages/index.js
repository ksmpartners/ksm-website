import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import DisplayDiv2 from '../components/HomePage/Div2Home/Div2Home';
import '../styles/HomePage.css';
import '../styles/global.css';
import "primereact/resources/themes/lara-light-blue/theme.css"
import TickerBelt from '../components/TickerBelt/TickerBelt';
import AnimatedTerminal from '../components/HomePage/Terminal/Terminal';
import DisplayHeroHome from '../components/HomePage/HeroHome/HeroHome';
import ShowColorTester from '../components/HomePage/ColorTester/ColorTester';

// THIS IS THE HOMEPAGE JS (GATSBY NEEDS IT NAMED INDEX.JS)
const HomePage = () => {

    //logos for TICKER BELT (these should be later stored somewhere else like assets move this out of here)
    const allLogos = [
        // TypeScript
        "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
        // Node.js
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        // npm
        "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",
        // Bootstrap
        "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
        // Socket.IO
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/800px-Kubernetes_logo_without_workmark.svg.png",
        "https://cdn.worldvectorlogo.com/logos/docker.svg",
        "https://static-00.iconduck.com/assets.00/terraform-icon-1803x2048-hodrzd3t.png",
        
        "https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png"
      ];





    return (
        
        <Layout>

   

            <motion.div
                className="landing-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <DisplayHeroHome/>

                {/* <header className="hero-section">
                    <div className="hero-text">
                        <h1 className="clean-reveal">Innovate. Execute. Empower.</h1>
                        <p>Serving clients since 2003</p>
                        <Link to="/about" className="cta-button">Learn More</Link>
                    </div>

                </header> */}
                <ShowColorTester/>

                <AnimatedTerminal/>
                <DisplayDiv2/>
                <TickerBelt logos={allLogos}/>
                


              

            </motion.div>
        </Layout>
    );
};

export default HomePage;
