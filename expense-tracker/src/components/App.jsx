import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Update import extensions to .jsx
import Navbar from './Navbar.jsx';
import Login from './Login.jsx';
import Dashboard from './Dashboard.jsx';
import Contact from './Contact.jsx';
import Guest from './Guest.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/guest" element={<Guest />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App; 