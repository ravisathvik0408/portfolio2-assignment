import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../assets/Portfolio.jpeg';
import resumeFile from '../assets/VRS_Resume.pdf';

export default function Navbar({ theme, toggleTheme }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Requirement 2.3: Cleanup listener for memory leaks
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      <div className="container">
        <nav className="flex items-centre justify-between">
          <div className="left flex justify-right items-centre">
            <div className="logo">
              <img src={logoImg} width="50" height="50" alt="Logo" style={{ borderRadius: '50%' }} />
            </div>
            <div>
              <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
              <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
            </div>
          </div>
          <div className="right flex items-centre">
            <a href={resumeFile} download="VRS_Resume.pdf" className="btn btn-primary">DOWNLOAD CV</a>
            <button onClick={toggleTheme} className="theme-btn">
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}