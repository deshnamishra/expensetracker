import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ showOptions = false }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="brand">
          <div className="logo-container">
            <div className="circle">
              <div className="rupee-sign">₹</div>
            </div>
          </div>
          <div>
            <h1 className="brand-name">eXPENSES</h1>
            <p className="brand-subtitle">manage your expenses</p>
          </div>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          {showOptions ? (
            <div className="dropdown">
              <button className="dropbtn">Options</button>
              <div className="dropdown-content">
                <Link to="/plan-savings">Plan Savings</Link>
                <Link to="/maintain-expense">Maintain Expense</Link>
              </div>
            </div>
          ) : (
            <Link to="/guest">Guest</Link>
          )}
        </div>
      </div>
    </nav>
  );
};