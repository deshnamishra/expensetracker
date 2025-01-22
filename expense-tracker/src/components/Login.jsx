import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MarketingSection from './MarketingSection';
import ContactButton from './ContactButton';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <>
      <Navbar />
      <div className="forms-section">
        <div className="wrapper">
          <div className="card-switch">
            <label className="switch">
              <input 
                className="toggle" 
                type="checkbox"
                onChange={() => setIsSignUp(!isSignUp)}
                checked={isSignUp}
              />
              <span className="slider"></span>
              <span className="card-side"></span>
              <div className="flip-card__inner">
                <div className="flip-card__front">
                  <div className="title">Log in</div>
                  <form onSubmit={handleSubmit} className="flip-card__form">
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit" className="flip-card__btn">Let's go!</button>
                  </form>
                </div>
                <div className="flip-card__back">
                  <div className="title">Sign up</div>
                  <form onSubmit={handleSubmit} className="flip-card__form">
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit" className="flip-card__btn">Confirm!</button>
                  </form>
                </div>
              </div>
            </label>
          </div>
        </div>
        <MarketingSection />
        <div className="contact-button-container">
          <ContactButton />
        </div>
      </div>
    </>
  );
};

export default Login;