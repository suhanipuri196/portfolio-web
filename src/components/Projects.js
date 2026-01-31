import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "HPAIR",
      subtitle: "Harvard Project for Asian and International Relations",
      role: "Delegate",
      location: "Bangkok, Thailand",
      date: "August 2024",
      icon: "🌏",
      color: "#FF00FF",
      highlights: [
        "Selected from 2,500+ candidates to represent India at Chulalongkorn University, Thailand",
        "Engaged in high-level discussions on global business, economics, and geopolitical issues",
        "Developed cross-cultural insights through workshops and networking with diverse peers",
        "Contributed to international challenges, enhancing expertise in business, policy, and international relations",
        "Recipient of Invitation to HPAIR'25 held at Harvard University in Cambridge, Massachusetts & University of Tokyo"
      ]
    },
    {
      title: "GirlUp Tara",
      subtitle: "Social Impact Organization",
      role: "Research And Project Development",
      location: "New Delhi, India",
      date: "2023 - 2024",
      icon: "💪",
      color: "#00FFFF",
      highlights: [
        "Led background research for 3+ social impact projects, establishing foundational data for innovative insights",
        "Managed a 12-member team to coordinate a donation drive that collected and distributed 250+ clothing and food items",
        "Conducted 3+ education drives at government schools, impacting over 100+ students through awareness and engagement"
      ]
    },
    {
      title: "TEDxVivekananda",
      subtitle: "Independent TED Event",
      role: "Marketing Associate",
      location: "New Delhi, India",
      date: "May 2023 - Sep 2023",
      icon: "🎤",
      color: "#FFD700",
      highlights: [
        "Implemented marketing strategies that increased digital audience reach by 15%",
        "Grew social media followers by 30+ in a 4-month period",
        "Streamlined brand consistency across all marketing channels"
      ]
    },
    {
      title: "Research Paper",
      subtitle: "Building Cities for Equality: How Infrastructure Shapes Women's Workforce Participation in Emerging Urban Hubs",
      role: "Independent Research",
      location: "Ongoing",
      date: "2024",
      icon: "📝",
      color: "#FF1493",
      highlights: [
        "Investigating the relationship between urban infrastructure development and women's workforce participation",
        "Analyzing data from emerging urban hubs to identify key factors affecting gender equality in employment",
        "Developing policy recommendations for inclusive city planning"
      ],
      link: "https://drive.google.com/file/d/1jDzfBEGL4lxPqxIFDkuY4nJyr7MjVAT2/view?usp=sharing",
      linkText: "Read Research Proposal"
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
          PROJECTS & EXTRACURRICULARS
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              style={{ '--accent-color': project.color }}
            >
              <div className="project-header">
                <motion.div 
                  className="project-icon"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {project.icon}
                </motion.div>
                <div className="project-meta">
                  <span className="project-role">{project.role}</span>
                  <span className="project-date">{project.date}</span>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-location">📍 {project.location}</p>
                
                <ul className="project-highlights">
                  {project.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                    >
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
                
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {project.linkText} →
                  </motion.a>
                )}
              </div>
              
              <div className="card-accent-bar" style={{ background: project.color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
