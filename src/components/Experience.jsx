import React from 'react';
import './Experience.css';

const experienceData = [
  {
    role: 'SrustiTechHack 2.0 – Top 15 Finalist',
    company: 'Srusti Academy of Management and Technology',
    duration: 'Jan 2026',
    bullets: [
      'Developed Echo Check, an AI-based identity verification and access control web application',
      'Implemented face recognition, liveness detection, and OTP-based multi-factor authentication',
      'Built using React.js and Python (FastAPI) with secure database integration',
      'Designed role-based access control (Admin/User) with a monitoring dashboard'
    ]
  },
  {
    role: 'BPUT Project Exhibition – AI-Based ITR',
    company: 'Biju Patnaik University of Technology',
    duration: 'Dec 2025',
    bullets: [
      'Developed an AI-powered ITR filing system to process financial data and generate summaries',
      'Integrated chatbot support using AI/NLP for user guidance',
      'Built using React.js, Python, and secure database systems'
    ]
  },
  {
    role: 'Trithon Hackathon – Top 45 Finalist',
    company: 'Trident Academy of Technology, Bhubaneswar',
    duration: 'Mar 2025',
    bullets: [
      'Developed a healthcare platform with online consultations and video appointments',
      'Designed diet plan recommendations based on user health analysis'
    ]
  },
  {
    role: 'SrustiTechHack 1.0 – 2nd Runner-Up',
    company: 'Srusti Academy of Management and Technology',
    duration: 'Jan 2025',
    bullets: [
      'Built an innovative solution Swasthya Setu (fast healthcare solution) and secured 2nd position',
      'Demonstrated strong problem-solving and teamwork in a competitive hackathon environment'
    ]
  },
  {
    role: 'Intern (Full-Time)',
    company: 'Asteris Solution, Bhubaneswar',
    duration: 'Aug 2024 – Jan 2025',
    bullets: [
      'Developed .NET 8-based employee management system.',
      'Worked on UI design and MongoDB integration.',
      'Gained exposure to cloud functions and virtual machines.'
    ]
  },
  {
    role: 'Intern (Part-Time)',
    company: 'Asteris Solution, Bhubaneswar',
    duration: 'June 2024 – July 2024',
    bullets: [
      'Designed responsive cafe website using HTML, CSS, and JavaScript.',
      'Performed API testing using Postman and coordinated tasks via Jira.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Work Experience</h2>
      <div className="timeline">
        {experienceData.map((exp, index) => (
          <div key={index} className="timeline-item slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="timeline-dot"></div>
            <div className="timeline-content glass">
              <div className="exp-header">
                <h3>{exp.role}</h3>
                <span className="duration">{exp.duration}</span>
              </div>
              <h4 className="company">{exp.company}</h4>
              <ul className="exp-bullets">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
