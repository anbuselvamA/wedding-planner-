import React from 'react';
import './Stats.css';
import { Star, Users, Calendar, MapPin } from 'lucide-react';

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container stats-container">
        <div className="stat-block">
          <div className="stat-icon"><Star size={28} color="#c9a367" strokeWidth={1.5} /></div>
          <h3>500+</h3>
          <p>Successful Weddings</p>
        </div>
        
        <div className="stat-divider"></div>
        
        <div className="stat-block">
          <div className="stat-icon"><Users size={28} color="#c9a367" strokeWidth={1.5} /></div>
          <h3>1000+</h3>
          <p>Happy Couples</p>
        </div>
        
        <div className="stat-divider"></div>
        
        <div className="stat-block">
          <div className="stat-icon"><Calendar size={28} color="#c9a367" strokeWidth={1.5} /></div>
          <h3>5+</h3>
          <p>Years Experience</p>
        </div>
        
        <div className="stat-divider"></div>
        
        <div className="stat-block">
          <div className="stat-icon"><MapPin size={28} color="#c9a367" strokeWidth={1.5} /></div>
          <h3>Pan India</h3>
          <p>Services</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
