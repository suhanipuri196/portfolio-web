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
        {/* Main About Card */}
        <motion.div 
          className="funky-card main-card"
          initial={{ opacity: 0, y: 50, rotate: -3 }}
          whileInView={{ opacity: 1, y: 0, rotate: -2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
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
            <motion.div 
              className="emoji-icon"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              👩‍💻
            </motion.div>
            <h2>HI, I'M SUHANI!</h2>
            <p>
            Hey, I’m Suhani. I study Economics and Mathematics and love exploring data—turning numbers into insights that actually make sense. I’m currently interning with the analytics team at Urban Company, have worked on research at Invest India, and am also working on a research paper of my own. Through HPAIR, I’ve connected with students from around the world and seen how big ideas take shape. I’m curious, thoughtful, and approach challenges with focus, clarity, and a dash of humor. When I’m not working, you’ll find me playing guitar, running or hitting the gym, keeping up with F1 racing, following world affairs, or experimenting with fashion.
            </p>
          </div>
        </motion.div>

        {/* Skills/Traits Card */}
        <motion.div 
          className="funky-card traits-card"
          initial={{ opacity: 0, y: 50, rotate: 3 }}
          whileInView={{ opacity: 1, y: 0, rotate: 2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
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

        {/* Fun Facts Card */}
        <motion.div 
          className="funky-card facts-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="card-header gradient">
            <span>FUN FACTS</span>
            <span className="fact-number">#1</span>
          </div>
          <div className="card-body facts-body">
            <motion.div 
              className="fact-emoji"
              animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🐱
            </motion.div>
            <p className="fact-text">I'm obsessed with cats and everything cute!</p>
          </div>
        </motion.div>
      </div>

      {/* Cute Cats Section */}
      <motion.div 
        className="cats-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="cute-cat"
          initial={{ opacity: 0, x: -100, rotate: -20 }}
          whileInView={{ opacity: 1, x: 0, rotate: -8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          whileHover={{ scale: 1.15, rotate: 0 }}
        >
          <motion.img 
            src={`${process.env.PUBLIC_URL}/cat-black.png`}
            alt="Cute black cat"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        
        <motion.div 
          className="meow-bubble"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          MEOW! 🐾
        </motion.div>
        
        <motion.div 
          className="cute-cat pixel-cat"
          initial={{ opacity: 0, x: 100, rotate: 20 }}
          whileInView={{ opacity: 1, x: 0, rotate: 8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", delay: 0.3 }}
          whileHover={{ scale: 1.15, rotate: 0 }}
        >
          <motion.img 
            src={`${process.env.PUBLIC_URL}/cat-pixel.png`}
            alt="Cute pixel cat"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
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
