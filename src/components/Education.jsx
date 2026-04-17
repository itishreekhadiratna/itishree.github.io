import React from 'react';
import './Education.css';

const educationData = [
  {
    examination: 'B.Tech (CSE)',
    institution: 'College of Engineering, Bhubaneswar',
    board: 'BPUT',
    year: '2026',
    score: '8.6 CGPA'
  },
  {
    examination: '12th',
    institution: 'Govt. Junior Autonomous College, Angul',
    board: 'CHSE',
    year: '2021',
    score: '88.33%'
  },
  {
    examination: '10th',
    institution: 'Sri Aurobindo Institute of Integral Education, Bhubaneswar',
    board: 'HSE',
    year: '2019',
    score: '81.33%'
  }
];

export default function Education() {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Academic Qualification</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div key={index} className="edu-card glass slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="edu-header">
              <h3>{edu.examination}</h3>
              <span className="year">{edu.year}</span>
            </div>
            <h4 className="institution">{edu.institution}</h4>
            <div className="edu-footer">
              <span className="board">Board/University: {edu.board}</span>
              <span className="score badge">{edu.score}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
