import React from 'react';
import './Hero.css';
import Hero3DObject from './Hero3DObject';
import profileImg from '../assets/real_profile.png';

export default function Hero() {

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">

        <h2 className="greeting fade-in">Hello, world!</h2>
        <h1 className="title slide-up">
          I'm <span className="highlight">Itishree Khadiratna</span>
        </h1>
        <h3 className="role slide-up" style={{ animationDelay: '0.2s' }}>
          Software Developer & CSE Student
        </h3>
        <p className="description slide-up" style={{ animationDelay: '0.4s' }}>
          Final-year BTech student with strong proficiency in Core Java, OOP principles, SQL and Data Structures. Passionate about developing robust backend systems and contributing to enterprise-level applications.
        </p>
        <div className="cta-buttons slide-up" style={{ animationDelay: '0.6s' }}>
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
      <div className="hero-graphic slide-up" style={{ animationDelay: '0.8s' }}>
        <div className="hero-profile-container">
          <img 
            src={profileImg} 
            alt="Itishree Khadiratna" 
            className="hero-main-image" 
          />
        </div>
        <Hero3DObject />
      </div>
    </section>
  );
}
