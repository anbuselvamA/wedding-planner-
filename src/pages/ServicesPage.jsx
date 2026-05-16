import React from 'react';
import './ServicesPage.css';
import { Heart, Building2, Sparkles, Camera, Utensils, Users, Mic2, Palette, MessageCircle, ClipboardList, Brush, HeartHandshake, Star } from 'lucide-react';

const serviceCards = [
  {
    id: 1,
    title: 'Full Wedding Planning',
    icon: <Heart size={36} strokeWidth={1.5} color="var(--primary-color)" />,
    image: '/images/svc_full_wedding.png',
    description: 'End-to-end planning and management for a stress-free wedding experience.',
  },
  {
    id: 2,
    title: 'Venue Selection',
    icon: <Building2 size={36} strokeWidth={1.5} color="var(--primary-color)" />,
    image: '/images/svc_venue.png',
    description: 'We help you find the perfect venue that matches your style, budget and guest list.',
  },
  {
    id: 3,
    title: 'Decoration & Styling',
    icon: <Sparkles size={36} strokeWidth={1.5} color="var(--primary-color)" />,
    image: '/images/svc_decoration.png',
    description: 'Beautiful themes and personalized décor that bring your dream wedding to life.',
  },
  {
    id: 4,
    title: 'Photography & Videography',
    icon: <Camera size={36} strokeWidth={1.5} color="var(--primary-color)" />,
    image: '/images/svc_photography.png',
    description: 'Capture every moment with creativity and turn your memories into timeless stories.',
  },
  {
    id: 5,
    title: 'Catering',
    icon: <Utensils size={36} strokeWidth={1.5} color="var(--primary-color)" />,
    image: '/images/svc_catering.png',
    description: 'Delicious menu options curated for you and your guests with perfection.',
  },
  {
    id: 6,
    title: 'Bridal Makeup & Styling',
    icon: <Palette size={36} strokeWidth={1.5} color="var(--primary-color)" />,
    image: '/images/svc_bridal_makeup.png',
    description: 'Professional artists to make you look and feel your best on your big day.',
  },
  {
    id: 7,
    title: 'Entertainment',
    icon: <Mic2 size={36} strokeWidth={1.5} color="var(--primary-color)" />,
    image: '/images/svc_entertainment.png',
    description: 'From DJs to live performances, we create the perfect vibe for your celebration.',
  },
  {
    id: 8,
    title: 'Guest Management',
    icon: <Users size={36} strokeWidth={1.5} color="var(--primary-color)" />,
    image: '/images/svc_guest_management.png',
    description: 'We handle your guests with care, ensuring a smooth and joyful experience.',
  },
];

const planningSteps = [
  { num: '01', title: 'Consultation', desc: 'We understand your vision and needs', icon: <MessageCircle size={28} strokeWidth={1.5} color="var(--primary-color)" /> },
  { num: '02', title: 'Planning', desc: 'We plan every detail with perfection', icon: <ClipboardList size={28} strokeWidth={1.5} color="var(--primary-color)" /> },
  { num: '03', title: 'Design & Execution', desc: 'We bring your dream to life', icon: <Brush size={28} strokeWidth={1.5} color="var(--primary-color)" /> },
  { num: '04', title: 'Coordination', desc: 'We manage everything seamlessly', icon: <HeartHandshake size={28} strokeWidth={1.5} color="var(--primary-color)" /> },
  { num: '05', title: 'You Celebrate', desc: 'Relax and enjoy your beautiful moments', icon: <Star size={28} strokeWidth={1.5} color="var(--primary-color)" /> },
];

const ServicesPage = () => {
  return (
    <div className="services-page">

      {/* ── HERO BANNER ── */}
      <section className="svc-hero-banner">
        <div className="svc-hero-left">
          <p className="svc-hero-subtitle">OUR SERVICES</p>
          <h1 className="svc-hero-title">
            We Handle Every Detail,<br />
            <span className="svc-hero-script">You Enjoy Every Moment</span>
          </h1>
          <div className="svc-hero-divider">
            <span></span>
            <div className="svc-diamond"></div>
            <span></span>
          </div>
          <p className="svc-hero-desc">
            From the first consultation to the final farewell, we take care of everything so you can focus on celebrating love.
          </p>
        </div>
        <div className="svc-hero-right">
          <img src="/images/svc_hero_banner.png" alt="Wedding Table Setup" />
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">OUR WEDDING PLANNING SERVICES</p>
            <div className="section-divider">
              <span></span>
              <div className="diamond-gold">♦</div>
              <span></span>
            </div>
          </div>

          <div className="services-grid-new">
            {serviceCards.map((svc) => (
              <div className="svc-card" key={svc.id}>
                <div className="svc-card-icon">{svc.icon}</div>
                <h3 className="svc-card-title">{svc.title}</h3>
                <div className="svc-card-image">
                  <img src={svc.image} alt={svc.title} />
                </div>
                <p className="svc-card-desc">{svc.description}</p>
                <a href="#" className="svc-card-link">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLANNING PROCESS ── */}
      <section className="planning-process">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">OUR PLANNING PROCESS</p>
            <div className="section-divider">
              <span></span>
              <div className="diamond-gold">♦</div>
              <span></span>
            </div>
          </div>

          <div className="process-steps">
            {planningSteps.map((step, index) => (
              <React.Fragment key={step.num}>
                <div className="process-step">
                  <div className="process-icon-wrap">{step.icon}</div>
                  <p className="process-num">{step.num}</p>
                  <h4 className="process-title">{step.title}</h4>
                  <p className="process-desc">{step.desc}</p>
                </div>
                {index < planningSteps.length - 1 && (
                  <div className="process-connector">
                    <span className="connector-line"></span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="services-cta">
        <div className="services-cta-inner">
          <h2>Let's Plan Something Beautiful Together</h2>
          <p>Book a free consultation and take the first step towards your dream wedding.</p>
          <button className="btn btn-cta-white">Book Free Consultation</button>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
