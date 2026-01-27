import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedCat.css';

const AnimatedCat = ({ color = 'white', delay = 0 }) => {
  const isWhite = color === 'white';
  
  return (
    <motion.div
      className={`animated-cat ${isWhite ? 'cat-white' : 'cat-black'}`}
      initial={{ opacity: 0, x: isWhite ? -100 : 100 }}
      animate={{
        opacity: 1,
        x: [0, 50, -50, 0],
        y: [0, -20, 0],
      }}
      transition={{
        x: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        },
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.5,
        },
        opacity: {
          duration: 1,
          delay: delay,
        }
      }}
    >
      <div className="cat-body">
        <div className="cat-head">
          <div className="cat-ears">
            <div className="ear left"></div>
            <div className="ear right"></div>
          </div>
          <div className="cat-face">
            <div className="cat-eyes">
              <motion.div 
                className="eye"
                animate={{
                  scaleY: [1, 0.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: delay + 1,
                }}
              ></motion.div>
              <motion.div 
                className="eye"
                animate={{
                  scaleY: [1, 0.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: delay + 1.1,
                }}
              ></motion.div>
            </div>
            <div className="cat-nose"></div>
            <div className="cat-mouth">
              <div className="whisker left-1"></div>
              <div className="whisker left-2"></div>
              <div className="whisker left-3"></div>
              <div className="whisker right-1"></div>
              <div className="whisker right-2"></div>
              <div className="whisker right-3"></div>
            </div>
          </div>
        </div>
        <motion.div 
          className="cat-legs"
          animate={{
            x: [0, 2, 0],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }}
        >
          <div className="leg front-left"></div>
          <div className="leg front-right"></div>
          <div className="leg back-left"></div>
          <div className="leg back-right"></div>
        </motion.div>
        <motion.div 
          className="cat-tail"
          animate={{
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default AnimatedCat;
