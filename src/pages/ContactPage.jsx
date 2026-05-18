import React, { useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight
} from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      {/* Background floral edges */}
      <img loading="lazy" src="/images/floral_left_edge.webp" alt="" className="contact-floral-left" />
      <img loading="lazy" src="/images/floral_left_edge.webp" alt="" className="contact-floral-right" />

      {/* ── HERO SECTION ── */}
      <section className="contact-hero">
        <div className="container contact-hero-container">
          <div className="contact-header">
            <div className="contact-subtitle-wrapper">
              <span className="contact-subtitle">CONTACT US</span>
              <div className="heart-divider-small">
                <span>♥</span>
              </div>
            </div>
            
            <h1 className="contact-title">We'd Love to Hear From You!</h1>
            <p className="contact-desc">
              Have questions or ready to start planning your dream wedding?<br />
              We're here to help make your special day unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION ── */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-card">
            
            {/* GET IN TOUCH (LEFT) */}
            <div className="contact-info-section">
              <div className="section-title-wrapper">
                <h2 className="section-title">Get In Touch</h2>
                <div className="heart-divider-small">
                  <span>♥</span>
                </div>
              </div>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-icon-circle">
                    <Phone size={18} strokeWidth={1.5} />
                  </div>
                  <div className="contact-info-text">
                    <h4>Phone</h4>
                    <p>+91 98765 43210</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-circle">
                    <Mail size={18} strokeWidth={1.5} />
                  </div>
                  <div className="contact-info-text">
                    <h4>Email</h4>
                    <p>hello@ippowedding.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-circle">
                    <MapPin size={18} strokeWidth={1.5} />
                  </div>
                  <div className="contact-info-text">
                    <h4>Location</h4>
                    <p>Chennai, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-circle">
                    <Clock size={18} strokeWidth={1.5} />
                  </div>
                  <div className="contact-info-text">
                    <h4>Office Hours</h4>
                    <p>Mon - Sat: 10:00 AM – 7:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="follow-us-section">
                 <h3 className="follow-us-title">Follow Us</h3>
                 <div className="contact-social">
                  <a href="#" className="social-icon-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                  <a href="#" className="social-icon-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                  <a href="#" className="social-icon-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.25 2.66 7.88 6.44 9.34-.1-.78-.18-1.98.04-2.84l1.32-5.6s-.34-.68-.34-1.68c0-1.58.92-2.76 2.06-2.76.96 0 1.42.72 1.42 1.58 0 .96-.62 2.4-.94 3.74-.26 1.12.56 2.04 1.66 2.04 2 0 3.52-2.1 3.52-5.14 0-2.7-1.94-4.58-4.7-4.58-3.18 0-5.06 2.38-5.06 4.86 0 .96.38 2 .84 2.56.1.1.1.22.08.34l-.28 1.14c-.04.14-.14.18-.3.1-1.12-.52-1.82-2.16-1.82-3.48 0-2.84 2.06-5.46 5.96-5.46 3.14 0 5.58 2.24 5.58 5.24 0 3.12-1.96 5.64-4.68 5.64-1.14 0-2.2-.6-2.56-1.3l-.7 2.66c-.26 1-.72 2.24-1.08 3 1.18.36 2.44.56 3.74.56 5.52 0 10-4.48 10-10S17.52 2 12 2z"></path></svg>
                  </a>
                  <a href="#" className="social-icon-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
                </div>
              </div>
            </div>

            {/* SEND MESSAGE FORM (RIGHT) */}
            <div className="contact-form-section">
              <div className="section-title-wrapper">
                <h2 className="section-title">Send Us a Message</h2>
                <div className="heart-divider-small">
                  <span>♥</span>
                </div>
              </div>

              <form className="contact-form">
                <div className="form-row">
                  <input type="text" placeholder="Your Name" className="form-input" />
                  <input type="email" placeholder="Your Email" className="form-input" />
                </div>
                <div className="form-row">
                  <input type="tel" placeholder="Phone Number" className="form-input" />
                  <input type="date" placeholder="Event Date" className="form-input date-input" />
                </div>
                <input type="text" placeholder="Wedding Location" className="form-input full-width" />
                <textarea placeholder="Tell us about your dream wedding..." rows="5" className="form-input form-textarea full-width"></textarea>
                
                <div className="form-actions">
                  <button type="submit" className="btn-send-message">
                    Send Message <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
