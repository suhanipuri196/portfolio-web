import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.css';
import AnimatedCat from './AnimatedCat';

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <div className="about-background"></div>
      
      {/* Animated Stars */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          ✦
        </motion.div>
      ))}

      <div className="about-content">
        <motion.div 
          className="about-card reliability-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="card-image">
            <div className="illustration-placeholder-about">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                👩‍💻
              </motion.div>
            </div>
          </div>
          <div className="card-content">
            <h2>I AM RELIABLE TO WORK WITH. I SEE PROJECTS THROUGH TO COMPLETION AM ALWAYS AVAILABLE TO COMMUNICATE.</h2>
            <p>
              I take charge of the process from concept to final implementation, coordinating each important stage 
              with you to ensure that the result is as expected and satisfactory. I develop each solution on the 
              website individually, incorporating associations and meanings that reflect your uniqueness and your business. 
              The website will remain relevant and stylish even a year from now. You will be proud of it and happy to 
              show it to your customers.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="about-card personal-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="card-label">ABOUT ME</div>
          <div className="card-content">
            <h2>MY NAME IS YULIA LI. I USED TO DESIGN BUILDINGS, BUT NOW I DESIGN WEBSITES.</h2>
            <div className="profile-section">
              <div className="profile-image">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  👤
                </motion.div>
              </div>
              <p>
                Working with me is comfortable and easy. Clients note the smooth processes and human touch in my work.
              </p>
            </div>
            <div className="facts-section">
              <div className="fact-label">FACT 01</div>
              <div className="facts-title">TOP-5 FACTS ABOUT ME</div>
              <div className="fact-illustration">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🌸
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Cats Section */}
      <div className="cats-section">
        <AnimatedCat color="white" delay={0} />
        <AnimatedCat color="black" delay={0.5} />
        <motion.div
          className="pixel-fish"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🐟
        </motion.div>
        <motion.div
          className="pixel-donut"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          🍩
        </motion.div>
      </div>

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
