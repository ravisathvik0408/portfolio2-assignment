import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';


export default function Projects() {
  // F1 - Projects Page: Fetch Projects from Backend API
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  // F2 - Frontend Error State
  const [error, setError] = useState("");


  // F1 - Fetch Project Data from GET /api/projects
    useEffect(() => {
    fetch("http://localhost:5000/api/projects")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to load projects");
    }

    return response.json();
  })
  .then((data) => {
    // F1 - Store API response in React state
    setProjects(data);
    setLoading(false);
  })

     .catch((error) => {
  console.error("Error fetching projects:", error);
  // F2 - Display Error When Backend Is Unavailable
  setError("Unable to load projects. Please try again later.");
  setLoading(false);
});
  }, []);

  // F1 - Loading state while API request is in progress
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
// F2 - Visible frontend error state
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