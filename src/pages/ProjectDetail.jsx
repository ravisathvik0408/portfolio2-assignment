import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProjectDetail() {

  const { projectId } = useParams();

  // F3 - State for project data, loading and error
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  // F3 - Fetch Individual Project
  // GET /api/projects/:id
  useEffect(() => {
    fetch(`http://localhost:5000/api/projects/${projectId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Project not found");
        }

        return response.json();
      })
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching project:", error);
        setError("Project not found");
        setLoading(false);
      });
  }, [projectId]);

  if (loading) {
    return (
      <section style={{ textAlign: 'center' }}>
        <h2>Loading project...</h2>
      </section>
    );
  }

  // F3 - Display "Project Not Found" for invalid project ID
  if (error) {
    return (
      <section style={{ textAlign: 'center' }}>
        <h2>{error}</h2>

        <Link
          to="/projects"
          className="btn btn-primary"
          style={{ marginTop: '1rem' }}
        >
          Back to Projects
        </Link>
      </section>
    );
  }

  return (

    <section className="container">

      <div
        className="card project-detail-card"
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'left'
        }}
      >

        <img
          src={`${import.meta.env.BASE_URL.replace(/\/$/, '')}${project.image}`}
          alt={project.title}
          className="project-detail-image"
          style={{ width: '100px', height: '100px' }}
        />

        <h1
          style={{
            color: 'var(--text-main)',
            margin: '1rem 0'
          }}
        >
          {project.title}
        </h1>

        <p
          style={{
            fontSize: '1.1rem',
            marginBottom: '1rem',
            color: 'var(--text-main)'
          }}
        >
          {project.description}
        </p>

        <h3 style={{ color: 'var(--text-main)' }}>
          Detailed Breakdown
        </h3>

        <p
          style={{
            margin: '1rem 0',
            color: 'var(--text-main)'
          }}
        >
          {project.detailedDescription}
        </p>

        <Link
          to="/projects"
          className="btn btn-primary"
          style={{ marginTop: '1rem' }}
        >
          &larr; Back to Projects
        </Link>

      </div>

    </section>
  );
}