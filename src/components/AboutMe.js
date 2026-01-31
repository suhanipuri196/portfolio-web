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
        {/* Picture Frame - Left Side */}
        <motion.div 
          className="picture-frame-container"
          initial={{ opacity: 0, x: -100, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: -3 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          whileHover={{ rotate: 0, scale: 1.02 }}
        >
          <div className="picture-frame">
            <div className="frame-border">
              <div className="frame-inner">
                <img 
                  src={`${process.env.PUBLIC_URL}/suhani-profile.png`} 
                  alt="Suhani Puri" 
                  className="profile-image"
                />
              </div>
              <div className="frame-corner top-left"></div>
              <div className="frame-corner top-right"></div>
              <div className="frame-corner bottom-left"></div>
              <div className="frame-corner bottom-right"></div>
            </div>
            <motion.div 
              className="frame-glow"
              animate={{ 
                boxShadow: [
                  "0 0 30px rgba(255, 0, 255, 0.5)",
                  "0 0 50px rgba(0, 255, 255, 0.5)",
                  "0 0 30px rgba(255, 0, 255, 0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
          <motion.div 
            className="frame-label"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            SUHANI PURI
          </motion.div>
        </motion.div>

        {/* Text Content - Right Side */}
        <div className="about-text-content">
          {/* Main About Card */}
          <motion.div 
            className="funky-card main-card"
            initial={{ opacity: 0, x: 100, rotate: 3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
          >
            <div className="card-header">
              <span>WHO AM I?</span>
              <div className="header-dots">
                <span className="dot pink"></span>
                <span className="dot cyan"></span>
                <span className="dot yellow"></span>
              </div>
            </div>
            <div className="card-body">
              <h2>HI, I'M SUHANI!</h2>
              <p>
              Hey, I'm Suhani. I study Economics and Mathematics and love exploring data—turning numbers into insights that actually make sense. I'm currently interning with the analytics team at Urban Company, have worked on research at Invest India, and am also working on a research paper of my own. Through HPAIR, I've connected with students from around the world and seen how big ideas take shape. I'm curious, thoughtful, and approach challenges with focus, clarity, and a dash of humor. When I'm not working, you'll find me playing guitar, running or hitting the gym, keeping up with F1 racing, following world affairs, or experimenting with fashion.
              </p>
            </div>
          </motion.div>

          {/* Skills/Traits Card */}
          <motion.div 
            className="funky-card traits-card"
            initial={{ opacity: 0, x: 100, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", delay: 0.4 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
          >
            <div className="card-header purple">
              <span>MY SUPERPOWERS</span>
              <motion.span 
                className="sparkle-emoji"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                ✨
              </motion.span>
            </div>
            <div className="card-body">
              <div className="traits-grid">
                <motion.div 
                  className="trait-item"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="trait-emoji">🎨</span>
                  <span className="trait-text">Creative</span>
                </motion.div>
                <motion.div 
                  className="trait-item"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <span className="trait-emoji">💡</span>
                  <span className="trait-text">Innovative</span>
                </motion.div>
                <motion.div 
                  className="trait-item"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="trait-emoji">🚀</span>
                  <span className="trait-text">Fast Learner</span>
                </motion.div>
                <motion.div 
                  className="trait-item"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <span className="trait-emoji">🤝</span>
                  <span className="trait-text">Team Player</span>
                </motion.div>
              </div>
            </div>
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
