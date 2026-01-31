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
      title: "Research and Data Analyst Intern",
      company: "Invest India",
      period: "December 2024 - February 2025",
      description: "Analyzed data and conducted research to support FDI decision-making and investment strategy.",
      achievements: [
        "Analyzed large-scale labor market and education-sector data to evaluate historical performance and identify trends impacting FDI decision-making",
        "Built interactive Power BI dashboards to assess operational feasibility and identify 12+ strategic hotspots across 9+ states, supporting investment planning",
        "Translated complex datasets into clear insights and recommendations for internal stakeholders to guide policy and investment strategy",
        "Conducted exploratory data analysis on 3 global markets (India, USA, Europe) to identify future growth opportunities",
        "Synthesized findings into a comprehensive report for internal stakeholders to guide policy and investment strategy"
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
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.3,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div 
                className="timeline-dot"
                whileHover={{ scale: 1.5, rotate: 180 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(255, 0, 255, 0.8)",
                    "0 0 40px rgba(0, 255, 255, 0.8)",
                    "0 0 20px rgba(255, 0, 255, 0.8)"
                  ]
                }}
                transition={{ 
                  boxShadow: { duration: 2, repeat: Infinity },
                  scale: { type: "spring", stiffness: 300 }
                }}
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
