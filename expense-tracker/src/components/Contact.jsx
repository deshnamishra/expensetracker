import React, { useState } from 'react';
import Navbar from './Navbar.jsx';

const Contact = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Feedback submitted:', feedback);
    // Reset form
    setFeedback({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your feedback!');
  };

  return (
    <>
      <div className="main-content">
        <div className="card">
          <h2 className="card-title">Contact Us</h2>
          <p className="contact-subtitle">We'd love to hear from you!</p>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                value={feedback.name}
                onChange={(e) => setFeedback({...feedback, name: e.target.value})}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                value={feedback.email}
                onChange={(e) => setFeedback({...feedback, email: e.target.value})}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <select
                value={feedback.subject}
                onChange={(e) => setFeedback({...feedback, subject: e.target.value})}
                required
                className="form-input"
              >
                <option value="">Select Subject</option>
                <option value="general">General Inquiry</option>
                <option value="bug">Bug Report</option>
                <option value="feature">Feature Request</option>
                <option value="support">Support</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                placeholder="Your Message"
                value={feedback.message}
                onChange={(e) => setFeedback({...feedback, message: e.target.value})}
                required
                className="form-input message-input"
                rows="5"
              />
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>

          <div className="contact-info">
            <h3>Other Ways to Reach Us</h3>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span>support@expenses.com</span>
            </div>
            <div className="info-item">
              <span className="info-label">Phone:</span>
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact; 