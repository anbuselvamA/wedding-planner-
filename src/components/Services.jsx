import React from 'react';
import './Services.css';
import { Heart, MapPin, Flower2, Camera, Utensils, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Full Wedding Planning',
      description: 'End-to-end planning & management',
      icon: <Heart size={32} strokeWidth={1.5} color="var(--primary-color)" />
    },
    {
      id: 2,
      title: 'Venue Selection',
      description: 'Find the perfect venue for you',
      icon: <MapPin size={32} strokeWidth={1.5} color="var(--primary-color)" />
    },
    {
      id: 3,
      title: 'Decoration & Styling',
      description: 'Stunning themes & decor',
      icon: <Flower2 size={32} strokeWidth={1.5} color="var(--primary-color)" />
    },
    {
      id: 4,
      title: 'Photography & Videography',
      description: 'Capture every special moment',
      icon: <Camera size={32} strokeWidth={1.5} color="var(--primary-color)" />
    },
    {
      id: 5,
      title: 'Catering',
      description: 'Delicious menus crafted for you',
      icon: <Utensils size={32} strokeWidth={1.5} color="var(--primary-color)" />
    },
    {
      id: 6,
      title: 'Guest Management',
      description: 'Hassle-free guest handling',
      icon: <Users size={32} strokeWidth={1.5} color="var(--primary-color)" />
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">OUR SERVICES</p>
          <h2 className="section-title">Everything You Need, Beautifully Planned</h2>
          <div className="section-divider">
            <span></span>
            <div className="diamond"></div>
            <span></span>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-action">
          <button className="btn btn-primary">Explore All Services</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
