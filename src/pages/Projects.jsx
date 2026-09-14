import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';


export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

    useEffect(() => {
    fetch("http://localhost:5000/api/projects")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to load projects");
    }

    return response.json();
  })
  .then((data) => {
    setProjects(data);
    setLoading(false);
  })

     .catch((error) => {
  console.error("Error fetching projects:", error);
  setError("Unable to load projects. Please try again later.");
  setLoading(false);
});
  }, []);

    if (loading) {
    return (
      <section className="services">
        <div className="container">
          <h1 className="services-head">Projects</h1>
          <p>Loading projects...</p>
        </div>
      </section>
    );
  }

  if (error) {
  return (
    <section className="services">
      <div className="container">
        <h1 className="services-head">Projects</h1>
        <p>{error}</p>
      </div>
    </section>
  );
}

  return (
    <section className="services">
      <div className="container">
        <h1 className="services-head">Projects</h1>
        <div className="card-grid">
          {projects.map((project) => (
            // Level-1 Prop Drilling
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}