import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Arts in Economics and Mathematics",
      institution: "University of Delhi",
      period: "2022 - 2026",
      description: "Key Courses: ",
      highlights: [
        "Econometrics",
        "Graduated with honors",
        "Relevant coursework in React, Node.js, and Design"
      ]
    },
   
  ];

  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          EDUCATION
        </motion.h2>
        
        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 80, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.3,
                type: "spring",
                stiffness: 80
              }}
              whileHover={{ 
                scale: 1.03, 
                y: -15,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.div 
                className="card-icon"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              >
                🎓
              </motion.div>
              <h3 className="degree">{edu.degree}</h3>
              <div className="education-meta">
                <span className="institution">{edu.institution}</span>
                <span className="period">{edu.period}</span>
              </div>
              <p className="education-description">{edu.description}</p>
              <ul className="highlights">
                {edu.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                  >
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
