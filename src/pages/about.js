// src/pages/about.js
import Layout from '../components/Layout/Layout';
import '../styles/aboutPage.css';
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import TechScrollLine from '../components/AboutPage/ScrollLine/TechScroll';
import TiltDeck from '../components/AboutPage/TiltDeck/TiltDeck';
import Rotate from '../components/AboutPage/MotionTest/MotionTest';

const cardsData = [
  {
    section: "about",
    title: "More than just technology",
    //content: "If it's short content, it looks nice. Anything more doesn't work.",
    content:
     "KSM Technology Partners’ mission is to deliver maximum returns on your technology investment and human capital. Our select team of associates blends deep domain expertise with real-world experience leading and executing complex software development projects. We use and recommend cutting-edge tools, frameworks, and methodologies to give you a competitive advantage. We know what works and when, and we help you distinguish hype from reality.",
  },
  {
    section: "about",
    title: "Innovation drives delivery",
    //content: "If it's short content, it looks nice. Anything more doesn't work.",

    content: "Our insights are informed by decades of hands-on success delivering innovative solutions to mission-critical business problems. KSM professionals have delivered large, multifaceted, mission-critical applications for top-tier pharmaceutical, biotechnology, aerospace/defense, health services, telecommunications, and software companies. Our breadth of experience affords us unique insights into the variety of ways which custom software projects succeed. \nWe put our experience to work for you, delivering innovative solutions on time and under budget.",
  },
  {
    section: "history",
    title: "Innovate",
    content: "We cultivate deep expertise in our customers' business domain and blend that with a passion for cutting-edge technology. Thus armed, we identify strategies that yield the highest value for our customers for the least cost.",
  },
  {
    section: "history",
    title: "Execute",
    content: "We are makers at heart and maintain the development infrastructure, tooling, and training programs to continuously refine our ability to convert ideas into working, robust solutions.",
  },
  {
    section: "history",
    title: "Empower",
    content: "We equip our customers with the tools and expertise needed to maintain and evolve the solutions we deliver, with as little or as much of our continued support as they need.",
  },
   {
    section: "history",
    title: "Innovate",
    content: "We cultivate deep expertise in our customers' business domain and blend that with a passion for cutting-edge technology. Thus armed, we identify strategies that yield the highest value for our customers for the least cost.",
  },
  {
    section: "history",
    title: "Execute",
    content: "We are makers at heart and maintain the development infrastructure, tooling, and training programs to continuously refine our ability to convert ideas into working, robust solutions.",
  },
  {
    section: "history",
    title: "Empower",
    content: "We equip our customers with the tools and expertise needed to maintain and evolve the solutions we deliver, with as little or as much of our continued support as they need.",
  },
];

const sectionDescriptions = {
  about:
    "In 2003 the founders created KSM to be the company we always wanted to work for: an independent concern accountable to our clients alone, seeking software engineering challenges that commodity body shops or packaged software cannot solve.",
  history:
    "At KSM Technology Partners, we specialize in identifying, building, and supporting custom solutions to complex business problems. Since our founding in 2003, we have helped top pharmaceutical and utilities customers create technology assets that deliver long-term value, often in the face of (and in full compliance with) regulatory constraints. Our services and values are defined in our motto: Innovate. Execute. Empower.",
};

//Update this value to change rotational position of cards
const PIN_WHEEL_RADIUS = 0; //Default: 140

function AboutPage() {
  const controls = useAnimation();
  const [activeCard, setActiveCard] = useState(null);
  const containerRef = useRef(null);

  // cards rotational positioning
  const cardPositions = cardsData.map((_, i) => {
    const angle = (i / cardsData.length) * 2 * Math.PI - Math.PI / 2;
    return {
      x: Math.cos(angle) * PIN_WHEEL_RADIUS,
      y: Math.sin(angle) * PIN_WHEEL_RADIUS,
      angle: (angle * 180) / Math.PI,
    };
  });

  //  Animate the card focus
  const handleMouseEnter = (index) => setActiveCard(index);
  const handleMouseLeave = () => setActiveCard(null);

  return (
    <Layout>
    <main className="ab-page" ref={containerRef}>

      {/* COOL SIDE VISUAL PROGRESS LINE*/}
  <TechScrollLine/>

  {/* <TiltDeck/> */}

<Rotate/>

      <section className="ab-section ab-about" id="about">
        <h1 className="ab-title">About Us</h1>
        <p className="ab-description">{sectionDescriptions.about}</p>
      </section>

      <section className="ab-pinwheel-container" aria-label="About us cards">
        {cardsData
          .filter((c) => c.section === "about")
          .map((card, i) => (
            <motion.article
              key={card.title}
              className={`ab-card ${
                activeCard === i ? "active" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: 1,
                scale: activeCard === i ? 1.2 : 1,
                x: cardPositions[i].x,
                y: cardPositions[i].y,
                rotate: activeCard === i ? 5 : 0,
                zIndex: activeCard === i ? 10 : 1,
              }}
              transition={{ type: "spring", stiffness: 110, damping: 15 }}
              tabIndex={0}
            >
              <h2 className="ab-subtitle">{card.title}</h2>
              <p className="ab-text">{card.content}</p>
            </motion.article>
          ))}
      </section>

      <section className="ab-section ab-history" id="history">
        <h1 className="ab-title">History & Values</h1>
        <p className="ab-description">{sectionDescriptions.history}</p>
      </section>

      <section className="ab-pinwheel-container2" aria-label="History and values cards">
        {cardsData
          .filter((c) => c.section === "history")
          .map((card, i) => {
            const idx = i + cardsData.filter((c) => c.section === "about").length; 
            return (
              <motion.article
                key={card.title}
                className={`ab-card ${
                  activeCard === idx ? "active" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{
                  opacity: 1,
                  scale: activeCard === idx ? 1.2 : 1,
                  x: cardPositions[idx].x,
                  y: cardPositions[idx].y,
                  rotate: activeCard === idx ? 5 : 0,
                  zIndex: activeCard === idx ? 10 : 1,
                }}
                transition={{ type: "spring", stiffness: 110, damping: 15 }}
                tabIndex={0}
              >
                <h2 className="ab-subtitle">{card.title}</h2>
                <p className="ab-text">{card.content}</p>
              </motion.article>
            );
          })}
      </section>
    </main>
    </Layout>
  );
}

export default AboutPage;
