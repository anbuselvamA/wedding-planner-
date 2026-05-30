import React from 'react';
import './Footer.css';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const StarLogo = () => (
  <svg viewBox="0 0 24 24" width={22} height={22} fill="none">
    <path d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z" fill="#c9a367" />
    <path d="M12 5L14 9H18L15 12L16 16L12 14L8 16L9 12L6 9H10L12 5Z" fill="rgba(255,255,255,0.8)" />
  </svg>
);

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
];

const serviceLinks = [
  'Wedding',
  'Birthday',
  'Party',
  'Anniversary',
  'Engagement',
  'Festivals',
  'Functions',
];

const Footer = () => {
  const handleNewsletter = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container">
        <div className="footer-top">

          {/* Brand Column */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <StarLogo />
              </div>
              <div className="footer-logo-text">
                <h2>
                  <span style={{ fontFamily: 'var(--font-script)', fontSize: '2.4rem', fontWeight: 400, color: 'var(--primary)' }}>Boss</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '3.5px', textTransform: 'uppercase', marginLeft: '8px' }}>Event Decorator</span>
                </h2>
                <span style={{ letterSpacing: '4.5px', color: 'rgba(255, 255, 255, 0.45)', marginLeft: '4px' }}>Wedding Planner</span>
              </div>
            </div>

            <p className="footer-tagline">Crafting Love Stories</p>
            <p className="footer-desc">
              India's most trusted luxury wedding planning studio. Creating unforgettable celebrations since 2019.
            </p>

            <div className="social-links">
              {/* Instagram */}
              <a href="#" className="social-btn" aria-label="Follow us on Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="social-btn" aria-label="Follow us on Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* Pinterest */}
              <a href="#" className="social-btn" aria-label="Follow us on Pinterest">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.78 1.27-5.38 1.27-5.38s-.32-.65-.32-1.61c0-1.51.88-2.63 1.96-2.63.93 0 1.38.7 1.38 1.53 0 .93-.59 2.33-.9 3.63-.26 1.08.53 1.96 1.57 1.96 1.89 0 3.16-2.43 3.16-5.32 0-2.19-1.47-3.83-4.12-3.83-3.01 0-4.9 2.25-4.9 4.77 0 .87.26 1.47.66 1.94.18.21.21.3.14.54l-.24.96c-.08.32-.32.43-.58.31-1.63-.7-2.38-2.57-2.38-4.67 0-3.47 2.93-7.63 8.75-7.63 4.67 0 7.75 3.38 7.75 7.01 0 4.8-2.66 8.37-6.58 8.37-1.32 0-2.56-.71-2.98-1.51l-.82 3.2c-.29 1.11-.9 2.22-1.47 3.01A10 10 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="social-btn" aria-label="Watch us on YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              {quickLinks.map(({ to, label }) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col links-col">
            <h4 className="footer-heading">Our Services</h4>
            <ul>
              {serviceLinks.map((s) => (
                <li key={s}><a href="#">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="contact-info">
              <li>
                <Phone size={15} />
                <span>+91 98765 43210</span>
              </li>
              <li>
                <Mail size={15} />
                <span>hello@rrwedding.com</span>
              </li>
              <li>
                <MapPin size={15} />
                <span>Shakti Nagar, Aladi Road, Virudhachalam</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col newsletter-col">
            <h4 className="footer-heading">Newsletter</h4>
            <p>Get wedding inspiration, tips & exclusive offers in your inbox.</p>
            <form className="newsletter-form" onSubmit={handleNewsletter} aria-label="Newsletter sign up">
              <div className="newsletter-input-wrap">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  aria-label="Email address for newsletter"
                />
                <button type="submit" aria-label="Subscribe to newsletter">
                  <Send size={16} color="#fff" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© 2024 Boss Event Decorator. All Rights Reserved. Made with ♥ in India.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="floating-buttons-wrapper">
        <a
          href="tel:+919876543210"
          className="float-btn phone-float"
          aria-label="Call us"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
        <a
          href="https://wa.me/919876543210"
          className="float-btn whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
