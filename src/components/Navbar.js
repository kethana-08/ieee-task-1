import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/assets/ieee.logo.jpg" alt="" className="navbar-logo" />
        <span className="bootcamp-title">IEEE Web Bootcamp</span>

      </div>

      <div className="navbar-right">
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {menuOpen && (
          <div className="dropdown-menu">
            <Link to="/" onClick={() => setMenuOpen(false)}>🏠Home</Link>
            <Link to="/timeline" onClick={() => setMenuOpen(false)}>📅Timeline</Link>
            <Link to="/faqs" onClick={() => setMenuOpen(false)}>❓ FAQs</Link>
            <Link to="/mentors" onClick={() => setMenuOpen(false)}>🧑‍🏫Mentors</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
