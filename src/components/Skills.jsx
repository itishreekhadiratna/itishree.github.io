import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillsData = [
  { name: 'Core Java', icon: '☕', desc: 'Object-Oriented Programming, multithreading, and robust backend logic.' },
  { name: 'Spring Boot', icon: '🍃', desc: 'Building scalable RESTful APIs and microservices efficiently.' },
  { name: 'React JS', icon: '⚛️', desc: 'Creating dynamic, responsive, and component-driven user interfaces.' },
  { name: '.NET', icon: '🟣', desc: 'Developing high-performance enterprise applications and secure endpoints.' },
  { name: 'Python', icon: '🐍', desc: 'Data structures, automation scripting, and AI/ML backend integration.' },
  { name: 'MySQL', icon: '🗄️', desc: 'Relational database design, complex querying, and data management.' },
  { name: 'Azure Cloud', icon: '☁️', desc: 'Deploying scalable applications, virtual machines, and cloud architecture.' },
  { name: 'Git & Postman', icon: '🛠️', desc: 'Version control workflows and robust API endpoint testing.' },
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
