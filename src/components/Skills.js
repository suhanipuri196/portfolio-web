import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "JavaScript", level: 90, icon: "📜" },
        { name: "TypeScript", level: 85, icon: "📘" },
        { name: "HTML/CSS", level: 95, icon: "🎨" },
        { name: "Vue.js", level: 75, icon: "💚" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 88, icon: "🟢" },
        { name: "Express", level: 85, icon: "🚂" },
        { name: "Python", level: 80, icon: "🐍" },
        { name: "MongoDB", level: 82, icon: "🍃" },
        { name: "PostgreSQL", level: 78, icon: "🐘" }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90, icon: "🔀" },
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "AWS", level: 70, icon: "☁️" },
        { name: "Figma", level: 85, icon: "🎭" },
        { name: "Webpack", level: 80, icon: "📦" }
      ]
    }
  ];

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
        
        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <motion.div
                        className="skill-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIndex * 0.2 + skillIndex * 0.1, ease: "easeOut" }}
                        style={{
                          background: `linear-gradient(90deg, #ff0000, #ff6b6b)`
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
