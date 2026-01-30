import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './WhenNotWorking.css';

const WhenNotWorking = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform to scroll through all 5 slides horizontally
  // Using pixel values for more precise control
  const x = useTransform(scrollYProgress, [0, 1], ["0px", "-1800px"]);

  const slides = [
    {
      id: 1,
      title: "Playing Guitar",
      subtitle: "Soul & Strings",
      description: "Nothing beats the feeling of strumming my guitar after a long day. Music is my escape and creative outlet.",
      image: `${process.env.PUBLIC_URL}/hobby-guitar.png`,
      color: "#FF1493"
    },
    {
      id: 2,
      title: "Running & Gym",
      subtitle: "Endurance Athlete",
      description: "Long distance running clears my mind. Whether it's a 10K or hitting the gym, fitness keeps me energized.",
      image: `${process.env.PUBLIC_URL}/hobby-running.png`,
      color: "#00FFFF"
    },
    {
      id: 3,
      title: "Formula 1",
      subtitle: "Speed Enthusiast",
      description: "The thrill of F1 racing captivates me. Strategy, engineering, and pure adrenaline - what's not to love?",
      image: `${process.env.PUBLIC_URL}/hobby-f1.png`,
      color: "#FF0000"
    },
    {
      id: 4,
      title: "Fashion",
      subtitle: "Style Maven",
      description: "Fashion is self-expression. I love putting together outfits that tell a story and make a statement.",
      image: `${process.env.PUBLIC_URL}/hobby-fashion.png`,
      color: "#FFD700"
    },
    {
      id: 5,
      title: "Coffee Connoisseur",
      subtitle: "Culinary Explorer",
      description: "From brewing the perfect espresso to experimenting with recipes, the kitchen is my happy place.",
      image: `${process.env.PUBLIC_URL}/hobby-coffee.png`,
      color: "#FF00FF"
    }
  ];

  return (
    <section id="when-not-working" className="when-not-working-section" ref={containerRef}>
      <div className="sticky-container">
        <motion.h2 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          WHEN I'M NOT WORKING
        </motion.h2>
        
        <motion.div className="slides-wrapper" style={{ x }}>
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              className="slide"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ '--slide-color': slide.color }}
            >
              <div className="slide-image-container">
                <img src={slide.image} alt={slide.title} className="slide-image" />
                <div className="image-overlay"></div>
              </div>
              <div className="slide-content">
                <span className="slide-number">0{slide.id}</span>
                <h3 className="slide-title">{slide.title}</h3>
                <span className="slide-subtitle">{slide.subtitle}</span>
                <p className="slide-description">{slide.description}</p>
                <motion.div 
                  className="slide-accent-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="scroll-hint">
          <motion.div 
            className="scroll-hint-content"
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span>SCROLL</span>
            <span className="scroll-arrow">→</span>
          </motion.div>
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
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 0, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Get In Touch
          </motion.button>
        </div>
      </motion.div>

      {/* Scrolling Contact Banner */}
      <div className="contact-banner">
        <div className="banner-track">
          <div className="banner-content">
            <a href="mailto:suhanipuri196@gmail.com" className="banner-item">
              <svg className="banner-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>suhanipuri196@gmail.com</span>
            </a>
            <span className="banner-separator">✦</span>
            <a href="https://www.linkedin.com/in/suhanipuri196" target="_blank" rel="noopener noreferrer" className="banner-item">
              <svg className="banner-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>linkedin.com/in/suhanipuri196</span>
            </a>
            <span className="banner-separator">✦</span>
            <a href="tel:+919310843247" className="banner-item">
              <svg className="banner-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>+91 9310843247</span>
            </a>
            <span className="banner-separator">✦</span>
            <a href="mailto:suhanipuri196@gmail.com" className="banner-item">
              <svg className="banner-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>suhanipuri196@gmail.com</span>
            </a>
            <span className="banner-separator">✦</span>
            <a href="https://www.linkedin.com/in/suhanipuri196" target="_blank" rel="noopener noreferrer" className="banner-item">
              <svg className="banner-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>linkedin.com/in/suhanipuri196</span>
            </a>
            <span className="banner-separator">✦</span>
            <a href="tel:+919310843247" className="banner-item">
              <svg className="banner-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>+91 9310843247</span>
            </a>
            <span className="banner-separator">✦</span>
          </div>
          <div className="banner-content" aria-hidden="true">
            <a href="mailto:suhanipuri196@gmail.com" className="banner-item">
              <svg className="banner-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>suhanipuri196@gmail.com</span>
            </a>
            <span className="banner-separator">✦</span>
            <a href="https://www.linkedin.com/in/suhanipuri196" target="_blank" rel="noopener noreferrer" className="banner-item">
              <svg className="banner-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>linkedin.com/in/suhanipuri196</span>
            </a>
            <span className="banner-separator">✦</span>
            <a href="tel:+919310843247" className="banner-item">
              <svg className="banner-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>+91 9310843247</span>
            </a>
            <span className="banner-separator">✦</span>
            <a href="mailto:suhanipuri196@gmail.com" className="banner-item">
              <svg className="banner-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>suhanipuri196@gmail.com</span>
            </a>
            <span className="banner-separator">✦</span>
            <a href="https://www.linkedin.com/in/suhanipuri196" target="_blank" rel="noopener noreferrer" className="banner-item">
              <svg className="banner-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>linkedin.com/in/suhanipuri196</span>
            </a>
            <span className="banner-separator">✦</span>
            <a href="tel:+919310843247" className="banner-item">
              <svg className="banner-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>+91 9310843247</span>
            </a>
            <span className="banner-separator">✦</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhenNotWorking;
