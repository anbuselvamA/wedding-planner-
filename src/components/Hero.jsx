import React from 'react';
import './Hero.css';
import { Play, Star, Award, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <img src="/images/floral_left_edge.png" alt="" className="floral-decoration" />
        <div className="hero-content">
          <p className="hero-subtitle">WE PLAN. YOU CELEBRATE.</p>
          <h1 className="hero-title">
            Plan Your<br />
            Dream Wedding<br />
            <span className="hero-title-script">Effortlessly</span>
          </h1>
          <p className="hero-description">
            From intimate moments to grand celebrations, we craft beautiful weddings that reflect your love story and leave memories forever.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary">Book Free Consultation</button>
            <button className="btn-play">
              <span className="play-icon-wrapper">
                <Play size={18} fill="var(--primary-color)" color="var(--primary-color)" />
              </span>
              Watch Our Story
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon-wrapper"><Star size={20} color="#c9a367" /></div>
              <div className="stat-text">
                <h4>500+</h4>
                <p>Successful Weddings</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper"><Award size={20} color="#c9a367" /></div>
              <div className="stat-text">
                <h4>5+</h4>
                <p>Years Experience</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon-wrapper"><MapPin size={20} color="#c9a367" /></div>
              <div className="stat-text">
                <h4>Pan India</h4>
                <p>Services</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <img src="/images/hero_couple.png" alt="Happy Indian Couple at Wedding" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
