import React from 'react';
import './Hero.css';
import { Play, Star, Award, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero-container">
        {/* Floral decoration */}
        <img
          loading="lazy"
          src="/images/floral_left_edge.webp"
          alt=""
          aria-hidden="true"
          className="floral-decoration"
        />

        {/* ── Content ── */}
        <div className="hero-content">
          {/* Gold pill badge */}
          <div className="hero-badge" data-aos="fade-right" data-aos-duration="800">
            <span className="hero-badge-dot" />
            <span className="hero-badge-text">We Plan. You Celebrate.</span>
          </div>

          {/* Title */}
          <h1 className="hero-title" data-aos="fade-up" data-aos-duration="1000">
            Plan Your<br />
            Dream Wedding
            <span className="hero-title-script">Effortlessly</span>
          </h1>

          {/* Description */}
          <p className="hero-description" data-aos="fade-up" data-aos-delay="150" data-aos-duration="900">
            From intimate moments to grand celebrations, we craft beautiful weddings that reflect your love story and leave memories forever.
          </p>

          {/* Actions */}
          <div className="hero-actions" data-aos="fade-up" data-aos-delay="250" data-aos-duration="900">
            <Link to="/book-consultation" className="btn btn-primary hover-glow" id="hero-book-btn">
              Book Free Consultation
            </Link>
            <Link to="/about" className="btn-play">
              <span className="play-icon-wrapper">
                <Play size={18} fill="var(--primary)" color="var(--primary)" />
              </span>
              Watch Our Story
            </Link>
          </div>

          {/* Stats */}
          <div className="hero-stats" data-aos="fade-up" data-aos-delay="400" data-aos-duration="900">
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <Star size={18} color="var(--gold)" strokeWidth={1.5} />
              </div>
              <div className="stat-text">
                <h4>500+</h4>
                <p>Weddings Planned</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <Award size={18} color="var(--gold)" strokeWidth={1.5} />
              </div>
              <div className="stat-text">
                <h4>5+</h4>
                <p>Years Experience</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <MapPin size={18} color="var(--gold)" strokeWidth={1.5} />
              </div>
              <div className="stat-text">
                <h4>Pan India</h4>
                <p>Services Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Image ── */}
        <div className="hero-image" data-aos="fade-left" data-aos-duration="1200">
          <img
            loading="eager"
            src="/images/hero_couple.webp"
            alt="Happy Indian Couple at Their Dream Wedding by Boss Event Decorator"
            className="float-anim-slow"
          />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <div className="scroll-mouse" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
