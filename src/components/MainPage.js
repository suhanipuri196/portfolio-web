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

// Sophisticated Scroll Indicator Component
const ScrollIndicator = () => {
  return (
    <motion.div 
      className="scroll-indicator"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <motion.div 
        className="scroll-mouse"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="mouse-body">
          <motion.div 
            className="mouse-wheel"
            animate={{ 
              y: [0, 8, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
      <motion.div 
        className="scroll-line"
        initial={{ height: 0 }}
        animate={{ height: 40 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div 
          className="scroll-dot"
          animate={{ y: [0, 30, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      <motion.span 
        className="scroll-text"
        animate={{ 
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        SCROLL
      </motion.span>
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
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/cyberpunk-background.png)` }}
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
        <motion.div className="hero-text">
          {/* Hello, I'm - scrolls vertically downwards */}
          <motion.span 
            className="greeting"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 50,
              damping: 12,
              delay: 0.3,
              duration: 1.5
            }}
          >
            Hello, I'm
          </motion.span>
          {/* Suhani Puri - scrolls horizontally from left to right */}
          <motion.h1
            className="name-title"
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 40,
              damping: 15,
              delay: 0.8,
              duration: 2
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

        {/* Sophisticated Scroll Indicator */}
        <ScrollIndicator />
      </motion.div>
    </section>
  );
};

export default MainPage;
