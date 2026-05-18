import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { BreadcrumbSchema } from '../components/Schema';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  MapPin, 
  Award, 
  ThumbsUp, 
  Gem, 
  ClipboardCheck, 
  Users, 
  Clock, 
  IndianRupee, 
  HeartHandshake,
  ArrowRight
} from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <SEO
        title="About Us – IPPO Wedding Planner"
        description="Learn about IPPO Wedding Planner – a Chennai-based luxury wedding planning company. Over 500 weddings crafted with love, precision, and elegance across India."
        path="/about"
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' }]} />
      {/* ── ABOUT HERO ── */}
      <section className="about-hero">
        <img loading="lazy" src="/images/floral_left_edge.webp" alt="" className="about-floral left-floral float-anim" />
        <img loading="lazy" src="/images/floral_left_edge.webp" alt="" className="about-floral right-floral float-anim" style={{ transform: 'scaleX(-1)' }} />
        
        <div className="container" data-aos="zoom-in" data-aos-duration="1200">
          <div className="about-hero-content">
            <div className="about-subtitle">ABOUT US</div>
            <div className="about-divider">
              <span className="diamond-gold">♥</span>
            </div>
            
            <h1 className="about-title">
              We Plan. You Celebrate.<br />
              <span className="about-script">We Make It Magical!</span>
            </h1>
            
            <div className="about-divider">
              <span className="diamond-gold">♥</span>
            </div>
            
            <p className="about-desc">
              At IPPO Wedding Planner, we believe every love story deserves 
              a celebration as unique and beautiful as the couple themselves.
              <br /><br />
              From the smallest details to the grandest dreams, 
              we are here to turn your vision into unforgettable memories.
            </p>
            
            <div className="about-hero-action">
              <Link to="/book-consultation" className="btn btn-primary about-btn hover-glow hover-lift">
                Book Free Consultation
              </Link>
              <svg className="heart-trail" width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 10C10 20 20 0 35 10" stroke="#c97a82" strokeWidth="1" strokeDasharray="2 2" fill="none"/>
                <path d="M35 10C35 10 38 7 39 10C40 13 35 15 35 15C35 15 30 13 31 10C32 7 35 10 35 10Z" stroke="#c97a82" strokeWidth="1" fill="none"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="about-story">
        <div className="container">
          <div className="story-header" data-aos="fade-up">
            <div className="about-subtitle">OUR STORY <span className="feather-icon">✒</span></div>
            <h2 className="story-title">A Passion That Turned Into A Promise</h2>
            <div className="about-divider">
              <span className="diamond-gold">♥</span>
            </div>
            
            <p className="story-desc">
              IPPO was born from a simple idea – to create stress-free, joyful and 
              seamless weddings that reflect your personality and love story.
              <br /><br />
              With creativity, precision and heart, we take care of everything 
              so you can cherish every moment of your special day.
            </p>
          </div>
          
          <div className="story-stats">
            <div className="story-stat-item hover-lift" data-aos="fade-up" data-aos-delay="100">
              <div className="stat-icon-circle">
                <Heart size={28} strokeWidth={1.5} color="#c97a82" />
              </div>
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Successful Weddings</p>
            </div>
            
            <div className="story-stat-item hover-lift" data-aos="fade-up" data-aos-delay="200">
              <div className="stat-icon-circle">
                <MapPin size={28} strokeWidth={1.5} color="#c97a82" />
              </div>
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Cities Across India</p>
            </div>
            
            <div className="story-stat-item hover-lift" data-aos="fade-up" data-aos-delay="300">
              <div className="stat-icon-circle">
                <Award size={28} strokeWidth={1.5} color="#c97a82" />
              </div>
              <h3 className="stat-number">5+</h3>
              <p className="stat-label">Years of Experience</p>
            </div>
            
            <div className="story-stat-item hover-lift" data-aos="fade-up" data-aos-delay="400">
              <div className="stat-icon-circle">
                <ThumbsUp size={28} strokeWidth={1.5} color="#c97a82" />
              </div>
              <h3 className="stat-number">100%</h3>
              <p className="stat-label">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="about-features">
        <div className="container">
          <div className="features-header" data-aos="fade-up">
            <div className="about-subtitle">WHY CHOOSE US?</div>
            <div className="about-divider">
              <span className="diamond-gold">♥</span>
            </div>
          </div>
          
          <div className="features-grid">
            <div className="feature-card hover-lift" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-icon-wrapper">
                <Gem size={32} strokeWidth={1.5} color="#c97a82" />
              </div>
              <h4>Personalized<br/>Planning</h4>
              <p>Customized solutions<br/>for your unique needs.</p>
            </div>
            
            <div className="feature-card hover-lift" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-icon-wrapper">
                <ClipboardCheck size={32} strokeWidth={1.5} color="#c97a82" />
              </div>
              <h4>Attention to<br/>Detail</h4>
              <p>Every detail matters,<br/>and we perfect it.</p>
            </div>
            
            <div className="feature-card hover-lift" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-icon-wrapper">
                <Users size={32} strokeWidth={1.5} color="#c97a82" />
              </div>
              <h4>Trusted<br/>Network</h4>
              <p>We work with the best<br/>vendors in the industry.</p>
            </div>
            
            <div className="feature-card hover-lift" data-aos="fade-up" data-aos-delay="400">
              <div className="feature-icon-wrapper">
                <Clock size={32} strokeWidth={1.5} color="#c97a82" />
              </div>
              <h4>On-Time<br/>Delivery</h4>
              <p>Timely execution for a<br/>stress-free experience.</p>
            </div>
            
            <div className="feature-card hover-lift" data-aos="fade-up" data-aos-delay="500">
              <div className="feature-icon-wrapper">
                <IndianRupee size={32} strokeWidth={1.5} color="#c97a82" />
              </div>
              <h4>Transparent<br/>Pricing</h4>
              <p>No hidden costs,<br/>just honest pricing.</p>
            </div>
            
            <div className="feature-card hover-lift" data-aos="fade-up" data-aos-delay="600">
              <div className="feature-icon-wrapper">
                <HeartHandshake size={32} strokeWidth={1.5} color="#c97a82" />
              </div>
              <h4>End-to-End<br/>Support</h4>
              <p>We're with you at every<br/>step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="about-cta" data-aos="zoom-in" data-aos-duration="1000">
        <div className="about-cta-bg">
          <img loading="lazy" src="/images/svc_catering.webp" alt="" className="cta-bg-left" />
          <img loading="lazy" src="/images/svc_catering.webp" alt="" className="cta-bg-right" />
        </div>
        <div className="container about-cta-content">
          <h2>Let's Create Your Unforgettable Story</h2>
          <p>Book a free consultation and let's start planning your dream wedding.</p>
          <Link to="/book-consultation" className="btn btn-cta-white hover-glow hover-lift">
            Book Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
