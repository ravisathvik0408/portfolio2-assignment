import React, { useState } from 'react';

export default function Contact() {
  // Requirement 2.2: Controlled input state & validation state
  const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (name, value) => {
    let err = { ...errors };
    if (name === 'fullName') err.fullName = value.trim() ? '' : 'Full name is required.';
    if (name === 'email') {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      err.email = regex.test(value) ? '' : 'Valid email address is required.';
    }
    if (name === 'message') err.message = value.trim() ? '' : 'Message cannot be empty.';
    setErrors(err);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validate(name, value);
  };

  const isFormValid =
    formData.fullName.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.message.trim() !== '' &&
    !errors.fullName && !errors.email && !errors.message;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) setSubmitted(true);
  };

  return (
    <section className="contact-section">
      <div className="contact-intro">
        <h2>Send A Message</h2>
        <p>Have a project or question? Feel free to drop a message below.</p>
      </div>

      {submitted ? (
        <div className="contact-form" style={{ textAlign: 'center' }}>
          <h3>Message Sent!</h3>
          <p>Thank you, {formData.fullName}. I will get back to you soon.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Name"
            />
            {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@gmail.com"
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
            ></textarea>
            {errors.message && <span className="error-msg">{errors.message}</span>}
          </div>

          <button type="submit" className="btn btn-primary" disabled={!isFormValid}>
            SEND MESSAGE
          </button>
        </form>
      )}
    </section>
  );
}