import React from 'react';
import './Services.css';
import { Heart, Gift, Music, GlassWater, Gem, Star, Users, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { id: 'wedding', title: 'Wedding', subtitle: 'Luxury Wedding Planning', description: 'We create timeless weddings that reflect your love story.', icon: <Heart size={26} strokeWidth={1.2} color="var(--primary)" />, image: '/images/wedding.jpg' },
  { id: 'birthday', title: 'Birthday', subtitle: 'Memorable Celebrations', description: 'Make birthdays unforgettable with our creative touch.', icon: <Gift size={26} strokeWidth={1.2} color="var(--primary)" />, image: '/images/birthday.jpg' },
  { id: 'party', title: 'Party', subtitle: 'Fun & Energetic Setups', description: 'From theme parties to private celebrations, we do it all.', icon: <Music size={26} strokeWidth={1.2} color="var(--primary)" />, image: '/images/reception.jpg' },
  { id: 'engagement', title: 'Engagement', subtitle: 'Beautiful Beginnings', description: 'Beautiful setups for your most precious beginnings.', icon: <Gem size={26} strokeWidth={1.2} color="var(--primary)" />, image: '/images/engagement.jpg' },
  { id: 'anniversary', title: 'Anniversary', subtitle: 'Celebrate Your Journey', description: 'Celebrate your journey with elegance and style.', icon: <GlassWater size={26} strokeWidth={1.2} color="var(--primary)" />, image: '/images/anniversary.jpg' },
  { id: 'festivals', title: 'Festivals', subtitle: 'Vibrant & Traditional', description: 'Make every festival celebration bright and memorable.', icon: <Star size={26} strokeWidth={1.2} color="var(--primary)" />, image: '/images/house-warming.jpg' },
  { id: 'functions', title: 'Functions', subtitle: 'Professional & Seamless', description: 'We handle corporate & private functions seamlessly.', icon: <Users size={26} strokeWidth={1.2} color="var(--primary)" />, image: '/images/corporate.jpg' },
];

const Services = () => {
  return (
    <section id="services" className="services" aria-labelledby="services-heading">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div className="section-header" data-aos="fade-up">
          <p className="section-subtitle">
            <span className="subtitle-line"></span>
            OUR SERVICES
            <span className="subtitle-line"></span>
          </p>
          <h2 className="section-title" id="services-heading">
            Everything You Need, <span style={{ color: '#bd6a71' }}>Beautifully Planned</span>
          </h2>
          <div className="section-divider-ornate">
            <span></span>
            <div className="ornate-center"><Heart size={14} color="var(--gold)" fill="transparent" strokeWidth={2} /></div>
            <span></span>
          </div>
        </div>

        {/* Unified View */}
        <div className="services-horizontal-layout">
          <div className="services-menu-list">
            {services.map((service, i) => (
              <div
                className="service-menu-item"
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={i * 50}
                data-aos-duration="600"
              >
                <div className="service-menu-icon">
                  {service.icon}
                </div>
                <div className="menu-diamond"></div>
                <span className="service-menu-label">{service.title}</span>
              </div>
            ))}
          </div>

          <div className="services-action-inline" data-aos="fade-left" data-aos-delay="400">
            <Link to="/book-consultation" className="btn btn-primary btn-services-action" id="services-explore-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
              <Calendar size={18} style={{ opacity: 0.9 }} />
              Book Free Consultation
              <ArrowRight size={18} style={{ opacity: 0.9 }} />
            </Link>
          </div>
        </div>


        
      </div>
    </section>
  );
};

export default Services;
