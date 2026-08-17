import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/Portfolio.jpeg';

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Requirement 2.3: Simulated loading sequence on mount with timer cleanup
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section style={{ textAlign: 'center', padding: '100px 0' }}>
        <h2>Loading Portfolio...</h2>
      </section>
    );
  }

  return (
    <div className="hero flex items-centre justify-between container">
      <div className="left flex-1 justify-center flex">
        <img src={heroImg} alt="Hero Profile" />
      </div>
      <div className="right flex-1">
        <h6>Ravisathvik</h6>
        <h1>
          I'm a Web<br />
          <span>Developer</span>
        </h1>
        <p>
          I build accessible, responsive web applications and solve complex algorithmic challenges.
        </p>
        <Link to="/projects" className="btn btn-primary">View Projects</Link>
      </div>
    </div>
  );
}