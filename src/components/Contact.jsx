import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { SiUpwork, SiFiverr } from 'react-icons/si';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container slide-up">
        <div className="contact-info glass">
          <h3>Let's talk about your next project</h3>
          <p>Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <span className="icon">📧</span>
              <p>Itishreekhadiratna@gmail.com</p>
            </div>
            <div className="contact-item">
              <span className="icon">📱</span>
              <p>+91 9078534369</p>
            </div>
            <div className="contact-item">
              <span className="icon">📍</span>
              <p>Rajib Nagar, Patia, Bhubaneswar</p>
            </div>
          </div>
          
          <div className="social-links">
            {/* Github & LinkedIn */}
            <a href="https://github.com/itishreekhadiratna" className="social-icon" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/itishree" className="social-icon" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            
            {/* 👇 UPDATE THESE NEW LINKS WITH YOUR ACTUAL URLS 👇 */}
            
            {/* YouTube Channel */}
            <a href="https://youtube.com/@YourChannelName" className="social-icon" target="_blank" rel="noreferrer"><FaYoutube /></a>
            
            {/* Freelancing Accounts (Upwork, Fiverr, etc) */}
            <a href="https://upwork.com/freelancers/~yourprofile" className="social-icon" target="_blank" rel="noreferrer"><SiUpwork /></a>
            <a href="https://fiverr.com/yourprofile" className="social-icon" target="_blank" rel="noreferrer"><SiFiverr /></a>
          </div>
        </div>
        
        <form className="contact-form glass" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input type="text" id="name" placeholder="Your Name" required />
            <label htmlFor="name">Your Name</label>
          </div>
          
          <div className="form-group">
            <input type="email" id="email" placeholder="Your Email" required />
            <label htmlFor="email">Your Email</label>
          </div>
          
          <div className="form-group">
            <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
            <label htmlFor="message">Your Message</label>
          </div>
          
          <button type="submit" className="btn btn-primary submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
