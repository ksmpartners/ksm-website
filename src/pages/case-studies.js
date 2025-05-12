// Case Studies Page
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import ReactFlowScene from '../components/ReactFlowScene/ReactFlowScene.js';
import 'reactflow/dist/style.css';
import './grids.css';
import React from 'react';
import TopMegaMenu from '../components/TopMegaMenu/TopMegaMenu';
import Footer from '../components/Footer/Footer';
import Layout from '../components/DynamicGradientBackground/DynamicGradientBackground.js';

// Menu Items
import Div1 from '../components/CaseStudy/Div1/Div1.js';
import Div2 from '../components/CaseStudy/Div2/Div2.js';
import Div3 from '../components/CaseStudy/Div3/Div3.js';
import Div4 from '../components/CaseStudy/Div4/Div4.js';
import Div5 from '../components/CaseStudy/Div5/Div5.js';
import Div6 from '../components/CaseStudy/Div6/Div6.js';

// Content Items
import Domino from '../components/CaseStudy/domino-sce-integration.js';
import SelfService from '../components/CaseStudy/web-services-for-self-service-order-managemen.js';
import DataAggregation from '../components/CaseStudy/market-monitoring-data-collection-and-aggregation.js';
import RealTime from '../components/CaseStudy/real-time-power-flow-calculation-engine.js';
import GxPDevOps from '../components/CaseStudy/gxp-delivery-automation-with-azure-devops.js';
import DataPipelining from '../components/CaseStudy/data-engineering-and-pipelining.js';
import AutomatedClinical from '../components/CaseStudy/automated-and-controlled-clinical-data-analysis.js';

// Gradients for THIS Page
const customGradients = [
    { angle: 45, colors: ["#dde6ff", "#eef5ff"] },
    { angle: 0, colors: ["#b7acff", "#0039aa"] },
    { angle: 0, colors: ["#dde6ff", "#e6dad5"] },
    { angle: 180, colors: ["#eef5ff", "#dde6ff"] },
    { angle: 45, colors: ["#dde6ff", "#eef5ff"] },
    { angle: 0, colors: ["#dde6ff", "#e6dad5"] },
    { angle: 180, colors: ["#eef5ff", "#dde6ff"] },
    { angle: 45, colors: ["#dde6ff", "#eef5ff"] },
    { angle: 0, colors: ["#dde6ff", "#e6dad5"] },
    { angle: 180, colors: ["#eef5ff", "#dde6ff"] },
    { angle: 45, colors: ["#dde6ff", "#eef5ff"] },
    { angle: 0, colors: ["#dde6ff", "#e6dad5"] },
    { angle: 180, colors: ["#eef5ff", "#dde6ff"] },
    { angle: 180, colors: ["#0039aa", "#0039aa"] },
  ];


// #e6dad5
// #6176b5


const IndexPage = () => {
  return (
    <div className='background-layer'>
        <Layout gradients={customGradients}>
            <TopMegaMenu />
            <div className='content-layer'>
                <Div1 />
                <Div2 />
                <Div3 />
                <Div4 />
                {/* <Div5 /> */}
                {/* <Div6 /> */}
                {/* <Domino /> */}
                <DataAggregation />
                <SelfService />
                <RealTime  />
                <AutomatedClinical />
                <GxPDevOps />
                <DataPipelining />
            </div>
            <div className="flowchart-layer "><ReactFlowScene /></div>
            <Footer />
        </Layout>
    </div>
  );
};

export default IndexPage;
