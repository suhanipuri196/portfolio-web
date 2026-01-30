import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className={`navigation ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-container">
        <div className="nav-left">
          <motion.div 
            className="availability-indicator"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="pulse-dot"></span>
            <span>Available for projects</span>
          </motion.div>
        </div>
        
        <div className="nav-center">
          <motion.button 
            onClick={() => scrollToSection('main')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Home
          </motion.button>
          <motion.button 
            onClick={() => scrollToSection('about')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About me
          </motion.button>
          <motion.button 
            onClick={() => scrollToSection('experience')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Experience
          </motion.button>
          <motion.button 
            onClick={() => scrollToSection('education')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Education
          </motion.button>
          <motion.button 
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
          </motion.button>
          <motion.button 
            onClick={() => scrollToSection('skills')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Skills
          </motion.button>
          <motion.button 
            onClick={() => scrollToSection('when-not-working')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Life
          </motion.button>
        </div>
        
        <div className="nav-right">
          <motion.button 
            className="cta-button"
            onClick={() => scrollToSection('when-not-working')}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 0, 0, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            DISCUSS THE PROJECT
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
