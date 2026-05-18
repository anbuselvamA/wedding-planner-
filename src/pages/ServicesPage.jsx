import React, { useState } from 'react';
import SEO from '../components/SEO';
import { BreadcrumbSchema, FAQSchema } from '../components/Schema';
import { Link } from 'react-router-dom';
import './ServicesPage.css';
import { Heart, Building2, Sparkles, Camera, Utensils, Users, Mic2, Palette, MessageCircle, ClipboardList, Brush, HeartHandshake, Star, ChevronUp, ChevronDown, Calendar, ArrowRight } from 'lucide-react';

const faqs = [
  { id: '01', q: 'How far in advance should I book a wedding planner?', a: 'We recommend booking your wedding planner 6–12 months in advance to ensure availability and enough time for perfect planning and execution.' },
  { id: '02', q: 'Do you handle destination weddings outside India?', a: 'Yes! We specialize in destination weddings across India as well as international locations like Bali, Thailand, Sri Lanka, and Dubai. Our team manages all logistics, travel, and coordination on your behalf.' },
  { id: '03', q: 'Can I customize a package based on my budget?', a: 'Absolutely. All our packages are fully customizable. During your free consultation, we will understand your vision and budget, then create a bespoke plan tailored specifically to your needs.' },
  { id: '04', q: 'What does “full wedding planning” include?', a: 'Our full planning package covers venue scouting, vendor coordination, decor design, catering, entertainment, invitations, day-of coordination, and post-wedding support.' },
  { id: '05', q: 'Is the initial consultation really free?', a: 'Yes! Your first consultation is completely free with no obligation. It is simply a friendly conversation to understand your dream wedding and see how we can help make it a reality.' },
];

const FaqSection = () => {
  const [openId, setOpenId] = useState('01');
  return (
    <section style={{ background: '#fdf8f6', padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: '680px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: '#c9a367', marginBottom: '4px' }}>F A Q S</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}><span style={{ color: '#c9a367', fontSize: '14px' }}>♥</span></div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(22px,5vw,30px)', fontWeight: 600, color: '#bd6a71', marginBottom: '10px', lineHeight: 1.2 }}>Frequently Asked Questions</h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '14px', color: '#888', maxWidth: '340px', margin: '0 auto', lineHeight: 1.6 }}>Everything you need to know about our wedding planning services</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} style={{ background: 'white', borderRadius: '16px', border: isOpen ? '1.5px solid #f0dde0' : '1.5px solid #f5f0ee', boxShadow: isOpen ? '0 4px 20px rgba(189,106,113,0.10)' : '0 2px 8px rgba(0,0,0,0.04)', overflow: 'hidden', transition: 'box-shadow 0.3s,border-color 0.3s' }}>
                <button onClick={() => setOpenId(isOpen ? null : faq.id)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '14px', padding: '18px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                  <span style={{ minWidth: '36px', height: '36px', borderRadius: '10px', background: '#fdf0f2', border: '1px solid #f5dde0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display',serif", fontSize: '13px', fontWeight: 600, color: '#bd6a71', flexShrink: 0 }}>{faq.id}</span>
                  <span style={{ flex: 1, fontFamily: "'Inter',sans-serif", fontSize: '15px', fontWeight: 600, color: '#1a1a1a', lineHeight: 1.4 }}>{faq.q}</span>
                  <span style={{ width: '32px', height: '32px', borderRadius: '50%', background: isOpen ? '#bd6a71' : 'transparent', border: isOpen ? 'none' : '1.5px solid #ececec', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: isOpen ? 'white' : '#999', transition: 'all 0.3s' }}>
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </span>
                </button>
                <div style={{ maxHeight: isOpen ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
                  <div style={{ padding: '0 18px 18px', position: 'relative' }}>
                    <div style={{ textAlign: 'center', marginBottom: '10px', color: '#c9a367', fontSize: '13px' }}>✦</div>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '14px', color: '#666', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                    <img src="/images/floral_left_edge.webp" alt="" loading="lazy" style={{ position: 'absolute', bottom: 0, left: 0, width: '70px', opacity: 0.2, pointerEvents: 'none' }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px' }}>
                      <div style={{ flex: 1, height: '1px', background: '#f5dde0' }} />
                      <span style={{ color: '#f0aab0', fontSize: '14px' }}>♥</span>
                      <div style={{ flex: 1, height: '1px', background: '#f5dde0' }} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: '28px', background: 'linear-gradient(135deg,#b85c63 0%,#c97a82 100%)', borderRadius: '18px', padding: '20px 22px', display: 'flex', alignItems: 'center', gap: '14px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Calendar size={22} color="white" strokeWidth={1.5} /></div>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '16px', fontWeight: 700, color: 'white', marginBottom: '2px' }}>Still have questions?</p>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>We’re here to help you!</p>
          </div>
          <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'white', color: '#b85c63', padding: '10px 18px', borderRadius: '50px', fontFamily: "'Inter',sans-serif", fontSize: '13px', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>Contact Us <ArrowRight size={14} /></Link>
          <img src="/images/floral_left_edge.webp" alt="" loading="lazy" style={{ position: 'absolute', right: '-10px', bottom: '-10px', width: '100px', opacity: 0.12, transform: 'scaleX(-1)', pointerEvents: 'none' }} />
        </div>
      </div>
    </section>
  );
};

const serviceCards = [
  {
    id: 1,
    title: 'Full Wedding Planning',
    icon: <Heart size={36} strokeWidth={1.5} color="var(--primary-color)" />,
    image: '/images/svc_full_wedding.webp',
    description: 'End-to-end planning and management for a stress-free wedding experience.',
  },
  {
    id: 2,
    title: 'Venue Selection',
    icon: <Building2 size={36} strokeWidth={1.5} color="var(--primary-color)" />,
    image: '/images/svc_venue.webp',
    description: 'We help you find the perfect venue that matches your style, budget and guest list.',
  },
  {
    id: 3,
    title: 'Decoration & Styling',
    icon: <Sparkles size={36} strokeWidth={1.5} color="var(--primary-color)" />,
    image: '/images/svc_decoration.webp',
    description: 'Beautiful themes and personalized décor that bring your dream wedding to life.',
  },
  {
    id: 4,
    title: 'Photography & Videography',
    icon: <Camera size={36} strokeWidth={1.5} color="var(--primary-color)" />,
    image: '/images/svc_photography.webp',
    description: 'Capture every moment with creativity and turn your memories into timeless stories.',
  },
  {
    id: 5,
    title: 'Catering',
    icon: <Utensils size={36} strokeWidth={1.5} color="var(--primary-color)" />,
    image: '/images/svc_catering.webp',
    description: 'Delicious menu options curated for you and your guests with perfection.',
  },
  {
    id: 6,
    title: 'Bridal Makeup & Styling',
    icon: <Palette size={36} strokeWidth={1.5} color="var(--primary-color)" />,
    image: '/images/svc_bridal_makeup.webp',
    description: 'Professional artists to make you look and feel your best on your big day.',
  },
  {
    id: 7,
    title: 'Entertainment',
    icon: <Mic2 size={36} strokeWidth={1.5} color="var(--primary-color)" />,
    image: '/images/svc_entertainment.webp',
    description: 'From DJs to live performances, we create the perfect vibe for your celebration.',
  },
  {
    id: 8,
    title: 'Guest Management',
    icon: <Users size={36} strokeWidth={1.5} color="var(--primary-color)" />,
    image: '/images/svc_guest_management.webp',
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
      <SEO
        title="Wedding Services & Packages"
        description="Explore our bespoke wedding planning services. From venue selection and decor to photography and catering, we handle every detail of your special day."
        path="/services"
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]} />
      <FAQSchema faqs={faqs} />

      {/* ── HERO BANNER ── */}
      <section className="svc-hero-banner">
        <div className="svc-hero-left" data-aos="fade-right" data-aos-duration="1200">
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
        <div className="svc-hero-right" data-aos="fade-left" data-aos-duration="1500">
          <img loading="lazy" src="/images/svc_hero_banner.webp" alt="Wedding Table Setup" className="float-anim" />
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="services-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <p className="section-subtitle">OUR WEDDING PLANNING SERVICES</p>
            <div className="section-divider">
              <span></span>
              <div className="diamond-gold">♦</div>
              <span></span>
            </div>
          </div>

          <div className="services-grid-new">
            {serviceCards.map((svc, index) => (
              <div className="svc-card hover-lift" key={svc.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="svc-card-icon">{svc.icon}</div>
                <h3 className="svc-card-title">{svc.title}</h3>
                <div className="svc-card-image">
                  <img loading="lazy" src={svc.image} alt={svc.title} />
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
          <div className="section-header" data-aos="fade-up">
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
                <div className="process-step hover-lift" data-aos="fade-up" data-aos-delay={index * 150}>
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

      {/* ── FAQ SECTION ── */}
      <FaqSection />


      {/* ── CTA BANNER ── */}
      <section className="services-cta" data-aos="zoom-in" data-aos-duration="1000">
        <div className="services-cta-inner">
          <h2>Let's Plan Something Beautiful Together</h2>
          <p>Book a free consultation and take the first step towards your dream wedding.</p>
          <Link to="/book-consultation" className="btn btn-cta-white hover-glow hover-lift">Book Free Consultation</Link>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
