import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Grandchild Component (Level-2 Prop Drilling)
function TechBadge({ techName }) {
  return <span className="tech-tag">{techName}</span>;
}

export default function ProjectCard({ project }) {
  // Requirement 2.2: Independent state scoped per card instance
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="card">
      <img src={project.image} alt={project.title} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      
      <div>
        {project.techStack.map((tech, idx) => (
          <TechBadge key={idx} techName={tech} />
        ))}
      </div>

      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
        <button className="btn-toggle" onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Hide View' : 'Quick View'}
        </button>
        <Link to={`/projects/${project.id}`} className="btn btn-primary" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}>
          Details
        </Link>
      </div>

      {showDetails && (
        <div style={{ marginTop: '0.8rem', fontSize: '0.85rem', color: 'var(--white)', textAlign: 'left' }}>
          <hr style={{ margin: '0.5rem 0', borderColor: 'rgba(255,255,255,0.25)' }} />
          <p>{project.detailedDescription}</p>
        </div>
      )}
    </div>
  );
}