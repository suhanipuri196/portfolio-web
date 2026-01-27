import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "🛒",
      color: "#ff6b6b"
    },
    {
      title: "Portfolio Website",
      description: "A stunning portfolio website with animations and responsive design.",
      technologies: ["React", "Framer Motion", "CSS3"],
      image: "💼",
      color: "#4ecdc4"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates.",
      technologies: ["React", "Firebase", "Material-UI"],
      image: "📋",
      color: "#95e1d3"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts and charts.",
      technologies: ["React", "Chart.js", "OpenWeather API"],
      image: "🌤️",
      color: "#f38181"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics and insights.",
      technologies: ["React", "D3.js", "Express"],
      image: "📊",
      color: "#aa96da"
    },
    {
      title: "Fitness Tracker",
      description: "Mobile-first fitness tracking application with workout plans.",
      technologies: ["React Native", "Firebase", "Redux"],
      image: "💪",
      color: "#fcbad3"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          PROJECTS
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div 
                className="project-image"
                style={{ backgroundColor: project.color }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="project-emoji">{project.image}</span>
              </motion.div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <motion.button
                  className="project-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
