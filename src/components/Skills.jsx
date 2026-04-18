import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillsData = [
  { name: 'Core Languages', icon: '☕', desc: 'Proficient in Java and JavaScript for building robust applications.' },
  { name: 'Frontend', icon: '⚛️', desc: 'HTML, CSS, React.js, and Angular for dynamic user interfaces.' },
  { name: 'Backend', icon: '🍃', desc: 'Spring Boot, Spring MVC, and REST API Development.' },
  { name: 'Database', icon: '🗄️', desc: 'MySQL for scalable relational database design and management.' },
  { name: 'Cloud & DevOps', icon: '☁️', desc: 'Microsoft Azure, Docker, and seamless CI/CD pipelines.' },
  { name: 'Test & Security', icon: '🛡️', desc: 'JUnit, Mockito for testing, and secure JWT Authentication.' },
  { name: 'Core Concepts', icon: '🧩', desc: 'OOPs, Data Structures, Microservices, and Agile methodologies.' },
  { name: 'AI & Source Control', icon: '🤖', desc: 'Git, GitHub, GitHub Copilot, and Claude AI integration.' },
  { name: 'Utilities', icon: '🔧', desc: 'Postman, Jira, and Canva for API testing, tracking, and design.' }
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <motion.div 
            key={index} 
            className="skill-card glass" 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="skill-content-front">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
            <div className="skill-content-back">
              <p className="skill-desc">{skill.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
