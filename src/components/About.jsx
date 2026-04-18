import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="about" className="about-section">
      <motion.div 
        className="spotify-bio-card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bio-video-container">
          {/* 
            =============================================================
            🔴 VIDEO REPLACEMENT INSTRUCTIONS 🔴
            1. Drag your mp4 file (e.g. 'intro-video.mp4') into your src/assets folder.
            2. Add this line at the top of this file: import myVideo from '../assets/intro-video.mp4';
            3. Change the <source src="..."> attribute below to: <source src={myVideo} type="video/mp4" />
            ============================================================= 
          */}
          <video 
            className="intro-video" 
            controls 
            autoPlay 
            muted 
            loop 
            poster="https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80"
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay-gradient"></div>

          <div className="about-audio-wrapper">
            <button className={`audio-btn ${isPlaying ? 'playing' : ''}`} onClick={toggleAudio}>
              <span className="audio-icon">{isPlaying ? '⏸' : '🎙️'}</span>
              <span className="audio-text">{isPlaying ? 'Pause Voice Message' : 'Play Voice Message'}</span>
              {isPlaying && <div className="sound-wave"><span></span><span></span><span></span></div>}
            </button>
            <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" onEnded={() => setIsPlaying(false)} />
          </div>
        </div>
        
        <div className="bio-content">
          <h2 className="spotify-title">Professional Developer</h2>
          <div className="objective">
            <h3>My Introduction</h3>
            <p>
              Hey there! I am a final-year BTech student with strong proficiency in Core Java, OOP 
              principles, SQL, and Data Structures. I am currently seeking a challenging entry-level role to develop robust 
              backend systems and contribute to enterprise-level applications!
            </p>
          </div>
          
          <div className="about-details">
            <div className="strengths">
              <h3>My Toolkit</h3>
              <ul>
                <li><span className="bullet">⚡</span> Analytical Thinking</li>
                <li><span className="bullet">🤝</span> Leadership & Team Management</li>
                <li><span className="bullet">🧩</span> Problem-Solving Skills</li>
                <li><span className="bullet">🚀</span> Quick Learner</li>
                <li><span className="bullet">🎨</span> UI/UX Sensibility</li>
              </ul>
            </div>
            
            <div className="personal">
              <h3>Vitals</h3>
              <p><strong>Location:</strong> Bhubaneswar, Odisha</p>
              <p><strong>Languages:</strong> English, Hindi, Odia, German (Learning)</p>
              <p><strong>Hobbies:</strong> Graphic Design, Teaching, Cooking, Anchoring, Dance, Casual Rapping</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
