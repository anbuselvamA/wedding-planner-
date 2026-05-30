import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { BreadcrumbSchema } from '../components/Schema';
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
    eventType: '',
    eventDate: '',
    eventLocation: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const waMessage = `🎉 *Pudhu ${formData.eventType || 'Event'} Consultation Request*

👤 *Client Name:* ${formData.name}
📞 *Mobile Number:* ${formData.phone}
✉️ *Email:* ${formData.email}
📍 *City:* ${formData.city}

💍 *Event Type:* ${formData.eventType || 'Not specified'}
📅 *Event Date:* ${formData.eventDate || 'Not specified'}
📍 *Event Location:* ${formData.eventLocation || 'Not specified'}

💬 *Message:*
${formData.message || 'No message provided'}

Indha client website moolama Book Consultation form anupirukanga.
📞 Seekiram contact panni details discuss pannunga.`;

      const waUrl = `https://wa.me/919600654784?text=${encodeURIComponent(waMessage)}`;
      
      // Small delay for UI feedback
      await new Promise(resolve => setTimeout(resolve, 800));
      window.open(waUrl, '_blank');
      
      setFormData({
        name: '', phone: '', email: '', city: '',
        eventType: '', eventDate: '', eventLocation: '', message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an issue sending your request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="book-page">
      <SEO
        title="Book a Free Wedding Consultation"
        description="Book your free wedding planning consultation with Boss Event Decorator. Tell us about your dream wedding and we’ll craft a bespoke plan just for you."
        path="/book-consultation"
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Book Consultation', path: '/book-consultation' }]} />
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

              {/* EVENT DETAILS */}
              <div className="form-section mt-4">
                <div className="form-section-header">
                  <h3>EVENT DETAILS</h3>
                  <Heart size={12} className="section-heart" fill="#c9a367" color="#c9a367" />
                  <div className="section-line"></div>
                </div>

                <div className="input-group">
                  <label>Event Type</label>
                  <div className="select-wrapper">
                    <Award size={18} className="input-icon" />
                    <select 
                      name="eventType" 
                      value={formData.eventType}
                      onChange={handleChange}
                    >
                      <option value="" disabled hidden>Select event type</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Party">Party</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Engagement">Engagement</option>
                      <option value="Festivals">Festivals</option>
                      <option value="Corporate/Functions">Corporate / Functions</option>
                    </select>
                    <ChevronDown size={18} className="select-arrow" />
                  </div>
                </div>

                <div className="input-group">
                  <label>Event Date</label>
                  <div className="input-wrapper">
                    <Calendar size={18} className="input-icon" />
                    <input 
                      type="date" 
                      name="eventDate" 
                      value={formData.eventDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label>Event Location</label>
                  <div className="input-wrapper">
                    <MapPin size={18} className="input-icon" />
                    <input 
                      type="text" 
                      name="eventLocation" 
                      placeholder="Enter your event location" 
                      value={formData.eventLocation}
                      onChange={handleChange}
                    />
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
              <button type="submit" className="book-submit-btn hover-glow hover-lift" disabled={isSubmitting}>
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <CalendarCheck size={20} />
                    Book Consultation
                  </>
                )}
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
                  <span>hello@rrwedding.com</span>
                </li>
                <li>
                  <MapPin size={18} color="#bd6a71" />
                  <span>Virudhachalam, Tamil Nadu, India</span>
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
