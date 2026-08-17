import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <section style={{ textAlign: 'center' }}>
        <h2>Project Not Found</h2>
        <Link to="/projects" className="btn btn-primary" style={{ marginTop: '1rem' }}>Back to Projects</Link>
      </section>
    );
  }

  return (
    <section className="container">
      <div className="card project-detail-card" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'left' }}>
        <img src={project.image} alt={project.title} className="project-detail-image" style={{ width: '100px', height: '100px' }} />
        <h1 style={{ color: 'var(--text-main)', margin: '1rem 0' }}>{project.title}</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{project.description}</p>
        <h3 style={{ color: 'var(--text-main)' }}>Detailed Breakdown</h3>
        <p style={{ margin: '1rem 0', color: 'var(--text-main)' }}>{project.detailedDescription}</p>
        <Link to="/projects" className="btn btn-primary" style={{ marginTop: '1rem' }}>&larr; Back to Projects</Link>
      </div>
    </section>
  );
}