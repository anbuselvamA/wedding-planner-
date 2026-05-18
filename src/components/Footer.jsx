import React from 'react';
import './Footer.css';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col brand-col">
            <div className="footer-logo">
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
            </div>
            <div className="social-links">
              <a href="#"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
              <a href="#"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
              <a href="#"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 7v10"/><path d="M12 7a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3"/></svg></a>
              <a href="#"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
            </div>
          </div>

          <div className="footer-col links-col">
            <h4 className="footer-heading">QUICK LINKS</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/packages">Packages</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col links-col">
            <h4 className="footer-heading">OUR SERVICES</h4>
            <ul>
              <li><a href="#">Full Wedding Planning</a></li>
              <li><a href="#">Venue Selection</a></li>
              <li><a href="#">Decoration & Styling</a></li>
              <li><a href="#">Photography & Video</a></li>
              <li><a href="#">Catering</a></li>
              <li><a href="#">Guest Management</a></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h4 className="footer-heading">CONTACT US</h4>
            <ul className="contact-info">
              <li>
                <Phone size={16} color="var(--primary-color)" />
                <span>+91 98765 43210</span>
              </li>
              <li>
                <Mail size={16} color="var(--primary-color)" />
                <span>hello@ippowedding.com</span>
              </li>
              <li>
                <MapPin size={16} color="var(--primary-color)" />
                <span>Chennai, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>

          <div className="footer-col newsletter-col">
            <h4 className="footer-heading">NEWSLETTER</h4>
            <p>Get wedding inspiration and tips in your inbox.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">
                <Send size={16} color="#fff" />
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Ippo Wedding Planner. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
      
      <button className="whatsapp-float">
        <MessageCircle size={30} color="#fff" />
      </button>
    </footer>
  );
};

export default Footer;
