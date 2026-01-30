import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "Urban Company",
      period: "February 2026-Present",
      description: "Analyzing data and providing insights to the team to improve the customer experience.",
      achievements: [
        "Developed a data analysis tool",
        "Led a team of 5 developers",
        "Improved performance by 40%"
      ] 
    },
    {
      title: "Research and Data Analyst Intern ",
      company: "Invest India",
      period: "December 2024 - February 2025",
      description: "Built custom websites and web applications for various clients.",
      achievements: [
        "Analyzed large-scale labor market and education-sector data to evaluate historical performance and identify trends impacting FDI decision-making",
        "Implemented modern design patterns",
        "Collaborated with designers"
      ]
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          EXPERIENCE
        </motion.h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div 
                className="timeline-dot"
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div className="experience-content">
                <motion.h3 
                  className="experience-title"
                  whileHover={{ x: 10 }}
                >
                  {exp.title}
                </motion.h3>
                <div className="experience-meta">
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
                <ul className="achievements">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
