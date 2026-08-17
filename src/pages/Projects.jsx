import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';

export default function Projects() {
  return (
    <section className="services">
      <div className="container">
        <h1 className="services-head">Projects</h1>
        <div className="card-grid">
          {projectsData.map((project) => (
            // Level-1 Prop Drilling
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}