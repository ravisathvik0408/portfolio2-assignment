import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1>404 - Page Not Found</h1>
      <p style={{ margin: '1rem 0' }}>The requested route does not exist.</p>
      <Link to="/" className="btn btn-primary">Return Home</Link>
    </section>
  );
}