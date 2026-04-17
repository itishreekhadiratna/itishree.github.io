import React from 'react';
import './Experience.css';

const experienceData = [
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
