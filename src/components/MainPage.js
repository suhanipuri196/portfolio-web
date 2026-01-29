import React from 'react';
import { motion } from 'framer-motion';
import './MainPage.css';

// Hanging Lamp Component
const HangingLamp = ({ color, size, right, delay, duration, cordLength }) => {
  return (
    <motion.div
      className="hanging-lamp"
      style={{
        '--lamp-color': color,
        '--lamp-size': size,
        '--cord-length': cordLength,
        right: right,
      }}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: delay,
        duration: 1,
        type: "spring",
        stiffness: 50,
        damping: 10
      }}
    >
      <div className="lamp-cord" />
      <motion.div 
        className="lamp-body"
        animate={{ rotate: [0, 2, -2, 0] }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="lamp-fixture" />
        <div className="lamp-bulb">
          <motion.div 
            className="lamp-glow"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: duration * 0.7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const MainPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const slideInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }
  };

  const popIn = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: -1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <section id="main" className="main-page">
      <div 
        className="background-image"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/landing-background.png)` }}
      ></div>
      <div className="background-overlay"></div>
      
      {/* Hanging Lamps */}
      <div className="lamps-container">
        <HangingLamp 
          color="#FFD700" 
          size="65px" 
          right="8%" 
          delay={0.5} 
          duration={4} 
          cordLength="200px" 
        />
        <HangingLamp 
          color="#FFA500" 
          size="50px" 
          right="20%" 
          delay={0.8} 
          duration={5} 
          cordLength="280px" 
        />
      </div>

      <motion.div 
        className="main-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-text" variants={slideInLeft}>
          <motion.span 
            className="greeting"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 120,
              delay: 0.5 
            }}
          >
            Hello, I'm
          </motion.span>
          <motion.h1
            className="name-title"
            initial={{ opacity: 0, x: -150, skewX: 10 }}
            animate={{ opacity: 1, x: 0, skewX: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 60,
              damping: 12,
              delay: 0.7
            }}
          >
            SUHANI PURI
          </motion.h1>
        </motion.div>

        <motion.div 
          className="info-box"
          variants={popIn}
          whileHover={{ 
            scale: 1.03, 
            rotate: 0,
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          <div className="info-box-header">
            <span>ABOUT ME</span>
            <div className="header-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
          </div>
          <div className="info-box-content">
            <p>
              A passionate developer and creative thinker who loves building 
              beautiful digital experiences. I blend creativity with code to 
              bring ideas to life and make the web a more interesting place.
            </p>
            <div className="barcode"></div>
          </div>
        </motion.div>

        <motion.div 
          className="year-indicator"
          variants={slideInUp}
          whileHover={{ 
            scale: 1.1, 
            rotate: 0,
            transition: { type: "spring", stiffness: 400 }
          }}
        >
          2026
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MainPage;
