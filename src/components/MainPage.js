import React from 'react';
import { motion } from 'framer-motion';
import './MainPage.css';

const MainPage = () => {
  return (
    <section id="main" className="main-page">
      <div className="grid-background"></div>
      
      <div className="main-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            BE REMEMBERED BY THE WEBSITE
          </motion.h1>
          <motion.span 
            className="name-highlight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            YULIA LI
          </motion.span>
        </motion.div>

        <motion.div 
          className="info-box"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="info-box-header">
            <span>INFO</span>
            <button className="close-btn">×</button>
          </div>
          <div className="info-box-content">
            <p>
              I create websites that reflect your brand. It is important to me to showcase 
              your story and values so that your customers hear, feel, and choose you.
            </p>
            <div className="barcode"></div>
          </div>
        </motion.div>

        <motion.div 
          className="year-indicator"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          2025
        </motion.div>

        <motion.div 
          className="hero-illustration"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="illustration-placeholder">
            <motion.div
              className="illustration-glow"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255, 100, 100, 0.5)",
                  "0 0 40px rgba(255, 100, 100, 0.8)",
                  "0 0 20px rgba(255, 100, 100, 0.5)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="checkerboard-divider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="checkerboard-pattern"></div>
      </motion.div>
    </section>
  );
};

export default MainPage;
