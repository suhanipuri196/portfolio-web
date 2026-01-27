import React from 'react';
import { motion } from 'framer-motion';
import './Hobbies.css';

const Hobbies = () => {
  const hobbies = [
    {
      name: "Long Distance Running",
      icon: "🏃",
      description: "Running long distances and exploring different trails.",
      color: "#ff6b6b"
    },
    {
      name: "Badminton Player",
      icon: "🏸",
      description: "Playing badminton and improving my skills.",
      color: "#4ecdc4"
    },
    {
      name: "Traveling",
      icon: "✈️",
      description: "Exploring new places, cultures, and finding inspiration around the world.",
      color: "#95e1d3"
    },
    {
      name: "Gaming",
      icon: "🎮",
      description: "Enjoying video games and appreciating game design and storytelling.",
      color: "#f38181"
    },
    {
      name: "Cooking",
      icon: "👨‍🍳",
      description: "Experimenting with recipes and creating delicious meals.",
      color: "#aa96da"
    },
    {
      name: "Guitarist",
      icon: "�",
      description: "Playing soul wrenching songs on guitar ",
      color: "#fcbad3"
    }
  ];

  return (
    <section id="hobbies" className="hobbies-section">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          HOBBIES
        </motion.h2>
        
        <div className="hobbies-grid">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              className="hobby-card"
              initial={{ opacity: 0, rotateY: -90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1, 
                rotateZ: 5,
                zIndex: 10
              }}
              style={{ 
                '--hobby-color': hobby.color 
              }}
            >
              <motion.div 
                className="hobby-icon"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              >
                {hobby.icon}
              </motion.div>
              <h3 className="hobby-name">{hobby.name}</h3>
              <p className="hobby-description">{hobby.description}</p>
              <motion.div 
                className="hobby-accent"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.div 
        className="footer-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="footer-content">
          <motion.p
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Let's create something amazing together!
          </motion.p>
          <motion.button
            className="contact-button"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 0, 0, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Get In Touch
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hobbies;
