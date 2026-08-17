import React from 'react';
import aboutImg from '../assets/Portfolio.jpeg';

export default function About() {
  return (
    <section className="about">
      <div className="container flex items-centre">
        <div className="left flex-1 justify-right flex">
          <img src={aboutImg} height="400" alt="About Profile" style={{ borderRadius: '12px' }} />
        </div>
        <div className="right flex-1" style={{ paddingLeft: '2rem' }}>
          <h1>About <span>Me</span></h1>
          <h3>Hello! I'm Ravisathvik.</h3>
          <p>
            Currently pursuing Computer Science, I focus on full-stack development, database architecture, and algorithmic performance. My goal is to craft efficient, clean code that translates into seamless visual experiences.
            <br /><br />
            When I'm not writing code, I actively participate in competitive programming and explore system architecture.
          </p>
          <div className="skills-card">
            <h3>Core Technical Skills</h3>
            <ul className="skills-list">
              <li>HTML5 & CSS3 / React</li>
              <li>C++ & Algorithms</li>
              <li>SQL & Relational DBs</li>
              <li>Systems & OS Fundamentals</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}