import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <div className="about-background"></div>
      
      {/* Floating Sparkles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="sparkle-star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${12 + Math.random() * 20}px`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          ✦
        </motion.div>
      ))}

      {/* Section Title */}
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h1 className="funky-title">GET TO KNOW ME</h1>
        <div className="title-underline"></div>
      </motion.div>

      <div className="about-content">
        {/* Picture - Left Side */}
        <motion.div 
          className="picture-frame-container"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.div 
            className="picture-frame"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src={`${process.env.PUBLIC_URL}/suhani-profile.png`} 
              alt="Suhani Puri" 
              className="profile-image"
            />
            <div className="frame-accent" />
          </motion.div>
        </motion.div>

        {/* Text Content - Right Side */}
        <div className="about-text-content">
          <motion.div 
            className="about-card"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
          >
            <h2 className="about-greeting">Hi, I'm Suhani</h2>
            <div className="about-divider" />
            <p className="about-text">
              I study <span className="highlight">Economics</span> and <span className="highlight">Mathematics</span> and love exploring data—turning numbers into insights that actually make sense.
            </p>
            <p className="about-text">
              I'm currently interning with the analytics team at <span className="highlight">Urban Company</span>, have worked on research at <span className="highlight">Invest India</span>, and am also working on a research paper of my own. Through <span className="highlight">HPAIR</span>, I've connected with students from around the world and seen how big ideas take shape.
            </p>
            <p className="about-text">
              I'm curious, thoughtful, and approach challenges with focus, clarity, and a dash of humor. When I'm not working, you'll find me playing guitar, running or hitting the gym, keeping up with F1 racing, following world affairs, or experimenting with fashion.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Cute Cat Section */}
      <motion.div 
        className="cats-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="cute-cat pixel-cat"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <motion.img 
            src={`${process.env.PUBLIC_URL}/cat-pixel.png`}
            alt="Cute pixel cat"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      <motion.div 
        className="checkerboard-divider-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="checkerboard-pattern"></div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
