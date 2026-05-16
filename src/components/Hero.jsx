import React from 'react';
import './Hero.css';
import { Play, Star, Award, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <img src="/images/floral_left_edge.png" alt="" className="floral-decoration float-anim" />
        <div className="hero-content">
          <p className="hero-subtitle" data-aos="fade-right" data-aos-duration="1000">WE PLAN. YOU CELEBRATE.</p>
          <h1 className="hero-title" data-aos="fade-up" data-aos-duration="1200">
            Plan Your<br />
            Dream Wedding<br />
            <span className="hero-title-script">Effortlessly</span>
          </h1>
          <p className="hero-description" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            From intimate moments to grand celebrations, we craft beautiful weddings that reflect your love story and leave memories forever.
          </p>
          
          <div className="hero-actions" data-aos="fade-up" data-aos-delay="300">
            <Link to="/book-consultation" className="btn btn-primary hover-glow hover-lift">Book Free Consultation</Link>
            <button className="btn-play hover-lift">
              <span className="play-icon-wrapper">
                <Play size={18} fill="var(--primary-color)" color="var(--primary-color)" />
              </span>
              Watch Our Story
            </button>
          </div>
          
          <div className="hero-stats" data-aos="fade-up" data-aos-delay="500">
            <div className="stat-item hover-lift">
              <div className="stat-icon-wrapper"><Star size={20} color="#c9a367" /></div>
              <div className="stat-text">
                <h4>500+</h4>
                <p>Successful Weddings</p>
              </div>
            </div>
            <div className="stat-item hover-lift">
              <div className="stat-icon-wrapper"><Award size={20} color="#c9a367" /></div>
              <div className="stat-text">
                <h4>5+</h4>
                <p>Years Experience</p>
              </div>
            </div>
            <div className="stat-item hover-lift">
              <div className="stat-icon-wrapper"><MapPin size={20} color="#c9a367" /></div>
              <div className="stat-text">
                <h4>Pan India</h4>
                <p>Services</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-image" data-aos="fade-left" data-aos-duration="1500">
          <img src="/images/hero_couple.png" alt="Happy Indian Couple at Wedding" className="float-anim" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
