import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import echoImg from '../assets/echo_check.png';
import employeeImg from '../assets/employee_dash.png';
import movieImg from '../assets/movie_app.png';
import tourismImg from '../assets/tourism_app.png';

// 🔴 PROJECT LINKS INSTRUCTIONS 🔴
// To update the links for your projects, simply replace the 'link' URL below 
// with your actual GitHub repository link or live hosted website link!

const projectsData = [
  {
    title: 'Echo Check (Hackathon)',
    description: 'AI-driven identity verification system with face recognition and liveness detection. Integrated OTP multi-factor authentication and role-based access.',
    tags: ['AI', 'Security', 'Authentication', 'Python'],
    image: echoImg,
    link: 'https://github.com/itishreekhadiratna/echo-check' // <-- UPDATE YOUR LINK HERE
  },
  {
    title: 'Employee Management System',
    description: 'Developed a robust backend system during internship at Asteris Solution using .NET 8, integrated with a MongoDB database for analytics.',
    tags: ['.NET 8', 'MongoDB', 'Backend'],
    image: employeeImg,
    link: 'https://github.com/itishreekhadiratna/employee-management' // <-- UPDATE YOUR LINK HERE
  },
  {
    title: 'Movie Information App',
    description: 'React-based application using external APIs with dynamic modern UI.',
    tags: ['React JS', 'API', 'Frontend'],
    image: movieImg,
    link: 'https://github.com/itishreekhadiratna/movie-app' // <-- UPDATE YOUR LINK HERE
  },
  {
    title: 'Odisha Tourism Website',
    description: 'Static website using HTML5 and CSS3 to promote regional tourism.',
    tags: ['HTML5', 'CSS3', 'Web Design'],
    image: tourismImg,
    link: 'https://github.com/itishreekhadiratna/odisha-tourism' // <-- UPDATE YOUR LINK HERE
  },
  {
    title: 'Hotel Booking System',
    description: 'Informative hotel website using HTML enabling detailed reservations.',
    tags: ['HTML', 'Web Design', 'Hospitality'],
    image: tourismImg,
    link: '#' // <-- UPDATE YOUR LINK HERE
  },
  {
    title: 'Exercise/Fitness Tracking App',
    description: 'CRUD-based workout tracking application designed to help users monitor routines.',
    tags: ['CRUD', 'Tracking', 'App'],
    image: echoImg, // Placeholder image
    link: '#' // <-- UPDATE YOUR LINK HERE
  },
  {
    title: 'Personal Resume Website',
    description: 'Portfolio website showcasing projects, skills, and resume details seamlessly.',
    tags: ['React JS', 'Portfolio', 'Frontend'],
    image: employeeImg, // Placeholder image
    link: '#' // <-- UPDATE YOUR LINK HERE
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card glass"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -15, scale: 1.02 }}
          >
            <div className="project-img-container">
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-overlay">
                <a href={project.link} className="btn btn-primary">Live Demo</a>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links-bottom">
                <a href={project.link} target="_blank" rel="noreferrer" className="bottom-link">
                  View Project <span className="arrow">↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
