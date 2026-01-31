import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: "Python", icon: "🐍", color: "#3776AB" },
    { name: "R", icon: "📊", color: "#276DC3" },
    { name: "SQL", icon: "🗃️", color: "#F29111" },
    { name: "Tableau", icon: "📈", color: "#E97627" },
    { name: "Power BI", icon: "⚡", color: "#F2C811" },
    { name: "Excel", icon: "📗", color: "#217346" },
    { name: "Google Analytics", icon: "📉", color: "#E37400" },
    { name: "Data Analysis", icon: "🔍", color: "#9C27B0" },
    { name: "Data Visualization", icon: "📊", color: "#00BCD4" },
    { name: "Statistical Analysis", icon: "📐", color: "#FF5722" },
    { name: "Automation", icon: "⚙️", color: "#607D8B" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          SKILLS
        </motion.h2>
        
        <motion.div 
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.08,
                y: -10,
                boxShadow: `0 20px 40px ${skill.color}40`
              }}
              style={{ '--skill-color': skill.color }}
            >
              <motion.span 
                className="skill-icon"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              >
                {skill.icon}
              </motion.span>
              <span className="skill-name">{skill.name}</span>
              <div className="skill-glow" style={{ background: skill.color }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
