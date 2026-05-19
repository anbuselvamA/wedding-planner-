import React from 'react';
import './Services.css';
import { Heart, MapPin, Flower2, Camera, Utensils, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Full Wedding Planning',
    description: 'End-to-end planning & management for your perfect day',
    icon: <Heart size={28} strokeWidth={1.5} color="var(--primary)" />,
  },
  {
    id: 2,
    title: 'Venue Selection',
    description: 'Find the perfect venue that matches your dream vision',
    icon: <MapPin size={28} strokeWidth={1.5} color="var(--primary)" />,
  },
  {
    id: 3,
    title: 'Decoration & Styling',
    description: 'Stunning themes, florals & bespoke décor concepts',
    icon: <Flower2 size={28} strokeWidth={1.5} color="var(--primary)" />,
  },
  {
    id: 4,
    title: 'Photography & Video',
    description: 'Capture every precious moment beautifully forever',
    icon: <Camera size={28} strokeWidth={1.5} color="var(--primary)" />,
  },
  {
    id: 5,
    title: 'Catering',
    description: 'Exquisite menus crafted to delight every guest',
    icon: <Utensils size={28} strokeWidth={1.5} color="var(--primary)" />,
  },
  {
    id: 6,
    title: 'Guest Management',
    description: 'Seamless, stress-free handling of all your guests',
    icon: <Users size={28} strokeWidth={1.5} color="var(--primary)" />,
  },
];

const Services = () => {
  return (
    <section className="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-subtitle">OUR SERVICES</p>
          <h2 className="section-title" id="services-heading">
            Everything You Need,<br />Beautifully Planned
          </h2>
          <div className="section-divider">
            <span></span>
            <div className="diamond"></div>
            <span></span>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div
              className="service-card"
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              data-aos-duration="800"
            >
              <div className="service-icon-circle">
                {service.icon}
              </div>
              <div className="service-card-text">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="services-action" data-aos="fade-up" data-aos-delay="200">
          <Link to="/services" className="btn btn-primary" id="services-explore-btn">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
