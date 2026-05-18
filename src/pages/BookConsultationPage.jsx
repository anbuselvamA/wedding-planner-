import React, { useEffect, useState } from 'react';
import './BookConsultationPage.css';
import { 
  User, Phone, Mail, MapPin, Calendar, 
  ChevronDown, MessageSquare, Lock, Heart,
  Settings, Award, Briefcase, Smile, CheckCircle,
  CalendarCheck, Users, Megaphone, Scissors, ShieldCheck, Shirt, Gift, CalendarDays
} from 'lucide-react';

const BookConsultationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    weddingDate: '',
    weddingLocation: '',
    guestCount: '',
    hearAboutUs: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    alert('Thank you! Your consultation request has been received.');
  };

  return (
    <div className="book-page">
      <img loading="lazy" src="/images/floral_left_edge.webp" alt="" className="book-floral-bottom float-anim" />
      {/* HERO SECTION */}
      <section className="book-hero">
        <div className="book-hero-bg" data-aos="fade-down" data-aos-duration="1500"></div>
        <div className="book-hero-content container">
          <div className="book-hero-text" data-aos="fade-up" data-aos-duration="1200">
            <div className="book-subtitle-wrapper">
              <span className="book-subtitle">BOOK A CONSULTATION</span>
              <Heart size={14} className="book-heart-icon float-anim" fill="#c9a367" color="#c9a367" />
              <div className="book-subtitle-line"></div>
            </div>
            <h1 className="book-title">
              Let's Plan Your<br />
              <span className="book-title-script">Dream Wedding</span>
            </h1>
            <p className="book-hero-desc">
              We'd love to hear from you! Fill in the details below and our expert will get in touch with you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="book-main container">
        <div className="book-grid">
          
          {/* LEFT COLUMN: FORM */}
          <div className="book-form-col" data-aos="fade-right" data-aos-duration="1000">
            <form className="consultation-form hover-lift" onSubmit={handleSubmit}>
              
              {/* YOUR DETAILS */}
              <div className="form-section">
                <div className="form-section-header">
                  <h3>YOUR DETAILS</h3>
                  <Heart size={12} className="section-heart" fill="#c9a367" color="#c9a367" />
                  <div className="section-line"></div>
                </div>
                
                <div className="input-group">
                  <label>Full Name <span className="req">*</span></label>
                  <div className="input-wrapper">
                    <User size={18} className="input-icon" />
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Enter your full name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label>Phone Number <span className="req">*</span></label>
                  <div className="input-wrapper">
                    <Phone size={18} className="input-icon" />
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="Enter your phone number" 
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label>Email Address <span className="req">*</span></label>
                  <div className="input-wrapper">
                    <Mail size={18} className="input-icon" />
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Enter your email address" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label>City <span className="req">*</span></label>
                  <div className="input-wrapper">
                    <MapPin size={18} className="input-icon" />
                    <input 
                      type="text" 
                      name="city" 
                      placeholder="Enter your city" 
                      value={formData.city}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
              </div>

              {/* WEDDING DETAILS */}
              <div className="form-section mt-4">
                <div className="form-section-header">
                  <h3>WEDDING DETAILS</h3>
                  <Heart size={12} className="section-heart" fill="#c9a367" color="#c9a367" />
                  <div className="section-line"></div>
                </div>

                <div className="input-group">
                  <label>Wedding Date</label>
                  <div className="input-wrapper">
                    <Calendar size={18} className="input-icon" />
                    <input 
                      type="date" 
                      name="weddingDate" 
                      value={formData.weddingDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label>Wedding Location</label>
                  <div className="input-wrapper">
                    <MapPin size={18} className="input-icon" />
                    <input 
                      type="text" 
                      name="weddingLocation" 
                      placeholder="Enter your wedding location" 
                      value={formData.weddingLocation}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label>Guest Count (Approx.)</label>
                  <div className="select-wrapper">
                    <div className="input-icon-wrapper">
                      <Users size={18} className="input-icon" />
                    </div>
                    <select 
                      name="guestCount" 
                      value={formData.guestCount}
                      onChange={handleChange}
                    >
                      <option value="" disabled hidden>Select guest count</option>
                      <option value="50-100">50 - 100</option>
                      <option value="100-300">100 - 300</option>
                      <option value="300-500">300 - 500</option>
                      <option value="500+">500+</option>
                    </select>
                    <ChevronDown size={18} className="select-arrow" />
                  </div>
                </div>

                <div className="input-group">
                  <label>How did you hear about us?</label>
                  <div className="select-wrapper">
                    <div className="input-icon-wrapper">
                      <Megaphone size={18} className="input-icon" />
                    </div>
                    <select 
                      name="hearAboutUs" 
                      value={formData.hearAboutUs}
                      onChange={handleChange}
                    >
                      <option value="" disabled hidden>Select an option</option>
                      <option value="instagram">Instagram</option>
                      <option value="facebook">Facebook</option>
                      <option value="google">Google Search</option>
                      <option value="friend">Friend / Family</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown size={18} className="select-arrow" />
                  </div>
                </div>
              </div>

              {/* YOUR MESSAGE */}
              <div className="form-section mt-4">
                <div className="form-section-header">
                  <h3>YOUR MESSAGE</h3>
                  <Heart size={12} className="section-heart" fill="#c9a367" color="#c9a367" />
                  <div className="section-line"></div>
                </div>

                <div className="input-group">
                  <label>Tell us about your dream wedding</label>
                  <div className="textarea-wrapper">
                    <MessageSquare size={18} className="textarea-icon" />
                    <textarea 
                      name="message" 
                      placeholder="Share your ideas, preferences and any special requirements..." 
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <button type="submit" className="book-submit-btn hover-glow hover-lift">
                <CalendarCheck size={20} />
                Book Consultation
              </button>

              <div className="form-privacy">
                <Lock size={14} color="#a0a0a0" />
                <span>Your information is safe with us. We respect your privacy.</span>
              </div>

            </form>
          </div>

          {/* RIGHT COLUMN: INFO PANEL */}
          <div className="book-info-col" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <div className="info-panel-wrapper hover-lift">
              
              {/* WHY BOOK */}
              <div className="why-book-section">
                <div className="card-header-center">
                  <h3>WHY BOOK A CONSULTATION?</h3>
                  <Heart size={12} className="section-heart" fill="#c9a367" color="#c9a367" />
                  <div className="section-line"></div>
                </div>

              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon">
                    <Scissors size={22} color="#bd6a71" />
                  </div>
                  <p>Personalized<br/>Wedding Planning</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <ShieldCheck size={22} color="#bd6a71" />
                  </div>
                  <p>Expert Guidance<br/>from Start to Finish</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <Shirt size={22} color="#bd6a71" />
                  </div>
                  <p>Tailored Solutions<br/>for Your Needs</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <Gift size={22} color="#bd6a71" />
                  </div>
                  <p>Stress-Free<br/>Wedding Experience</p>
                </div>
              </div>
            </div>

            {/* GET IN TOUCH */}
            <div className="contact-section mt-4">
              <div className="card-header-left">
                <h3>GET IN TOUCH</h3>
                <Heart size={12} className="section-heart" fill="#c9a367" color="#c9a367" />
                <div className="section-line"></div>
              </div>

              <ul className="book-contact-list">
                <li>
                  <Phone size={18} color="#bd6a71" />
                  <span>+91 98765 43210</span>
                </li>
                <li>
                  <Mail size={18} color="#bd6a71" />
                  <span>hello@ippowedding.com</span>
                </li>
                <li>
                  <MapPin size={18} color="#bd6a71" />
                  <span>Chennai, Tamil Nadu, India</span>
                </li>
              </ul>

              <div className="talk-banner">
                <div className="talk-icon">
                  <CalendarDays size={24} color="#bd6a71" />
                </div>
                <div className="talk-text">
                  <h4>Prefer to talk?</h4>
                  <p>Call us or drop a message, we're happy to help!</p>
                </div>
              </div>
            </div>
            
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default BookConsultationPage;
