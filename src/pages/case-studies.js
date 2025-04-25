// Case Studies Page
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import ReactFlowScene from '../components/ReactFlowScene/ReactFlowScene.js';
import 'reactflow/dist/style.css';
import React from 'react';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// import Navbar from '../NavBar/NavBar';
// import './Layout.css'; // Layout styles if needed
import TopMegaMenu from '../components/TopMegaMenu/TopMegaMenu';
// import HeroSection from '../HeroSection/HeroSection';
// import AnimatedIcon from "../icons/AnimatedIcon";
// // import LayersIcon from "../icons/LayersIcon";
// import { SettingsGearIcon } from '../icons/SettingsGearIcon';
// import { RocketIcon } from '../icons/RocketIcon';

import Layout from '../components/DynamicGradientBackground/DynamicGradientBackground.js';
import Div1 from '../components/CaseStudy/Div1/Div1.js';
import Div2 from '../components/CaseStudy/Div2/Div2.js';
import Div3 from '../components/CaseStudy/Div3/Div3.js';

const customGradients = [
    { angle: 70, colors: ["#9193FF", "#C0DBFC"] },
    { angle: 0, colors: ["#c7d3ec", "#F1F2F3"] },
    { angle: 180, colors: ["#bbd4e5", "#F1F2F3"] },
    { angle: 45, colors: ["#e3ecf1", "#F1F2F3"] },
    { angle: 0, colors: ["#c7d3ec", "#F1F2F3"] },
    { angle: 180, colors: ["#01b4af", "#F1F2F3"] },
  ];


const IndexPage = () => {
  return (
    <Layout gradients={customGradients}>
    <TopMegaMenu />
    <Div1 />
    <Div2 />
    <Div3 />
    {[...Array(8)].map((_, i) => (
        <div
          key={i}
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '3rem',
            fontWeight: 'bold',
            borderBottom: '1px solid #ccc',
          }}
        >
          Div {i + 1}
        </div>
      ))}
      <ReactFlowScene />
    </Layout>
    
  );
};

export default IndexPage;

