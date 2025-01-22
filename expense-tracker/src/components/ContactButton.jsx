import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactButton = () => {
  const navigate = useNavigate();

  return (
    <button 
      className="contact-button"
      onClick={() => navigate('/contact')}
    >
      Contact Us
    </button>
  );
};

export default ContactButton; 