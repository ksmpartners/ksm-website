// src/pages/about.js
import Layout from '../components/Layout/Layout';
import MyCard from '../components/MyCard';
import AboutCard from '../components/AboutCard/Aboutcard';
import '../styles/aboutPage.css';
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import TechScrollLine from '../components/AboutPage/ScrollLine/TechScroll';

const cardsData = [
  {
    section: "about",
    title: "Who We Are",
    content:
      "We're a team of visionaries building next-gen experiences that feel alive and intuitive.",
  },
  {
    section: "about",
    title: "What We Do",
    content: "We craft digital interfaces that feel like magic and empower users.",
  },
  {
    section: "history",
    title: "Our Journey",
    content: "From a humble garage startup to a global digital pioneer.",
  },
  {
    section: "history",
    title: "Core Values",
    content: "Integrity. Innovation. Intentionality. Everything we live by.",
  },
];

const sectionDescriptions = {
  about:
    "We build digital products that push boundaries. Combining design, engineering, and strategy into seamless, futuristic experiences.",
  history:
    "Our history is one of curiosity, grit, and relentless experimentation, guided by timeless values.",
};

const PIN_WHEEL_RADIUS = 140;

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

      <section className="ab-pinwheel-container" aria-label="History and values cards">
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
