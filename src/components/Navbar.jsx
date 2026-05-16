import React from 'react';
import './Navbar.css';
import { Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <NavLink to="/" className="navbar-logo" style={{ textDecoration: 'none' }}>
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z" fill="#c9a367" stroke="none" />
              <path d="M12 5L14 9H18L15 12L16 16L12 14L8 16L9 12L6 9H10L12 5Z" fill="#fff" stroke="none" />
            </svg>
          </div>
          <div className="logo-text">
            <h2>IPPO</h2>
            <span>WEDDING PLANNER</span>
          </div>
        </NavLink>
        
        <ul className="navbar-links">
          <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
          <li><NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>Services</NavLink></li>
          <li><NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : '')}>Gallery</NavLink></li>
          <li><NavLink to="/packages" className={({ isActive }) => (isActive ? 'active' : '')}>Packages</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
        </ul>
        
        <div className="navbar-actions">
          <button className="btn btn-primary">Book Consultation</button>
          <button className="menu-btn">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
