import React, { useState } from 'react';
import SEO from '../components/SEO';
import { BreadcrumbSchema, FAQSchema } from '../components/Schema';
import { Link } from 'react-router-dom';
import './ServicesPage.css';
import { Heart, Gift, Music, GlassWater, Gem, Star, Users, Building2, Sparkles, Camera, Utensils, Palette, Mic2, MessageCircle, ClipboardList, Brush, HeartHandshake, ChevronUp, ChevronDown, Calendar, ArrowRight } from 'lucide-react';

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
    title: 'Wedding',
    subtitle: 'Luxury Wedding Planning',
    icon: <Heart size={20} strokeWidth={1.5} color="var(--gold)" />,
    image: '/images/wedding.jpg',
    description: 'Complete planning and coordination for your dream wedding.',
  },
  {
    id: 2,
    title: 'Birthday',
    subtitle: 'Memorable Celebrations',
    icon: <Gift size={20} strokeWidth={1.5} color="var(--gold)" />,
    image: '/images/birthday.jpg',
    description: 'Make birthdays unforgettable with our creative touch.',
  },
  {
    id: 3,
    title: 'Party',
    subtitle: 'Fun & Energetic Setups',
    icon: <Music size={20} strokeWidth={1.5} color="var(--gold)" />,
    image: '/images/reception.jpg',
    description: 'From theme parties to private celebrations, we do it all.',
  },
  {
    id: 4,
    title: 'Engagement',
    subtitle: 'Beautiful Beginnings',
    icon: <Gem size={20} strokeWidth={1.5} color="var(--gold)" />,
    image: '/images/engagement.jpg',
    description: 'Beautiful setups for your most precious beginnings.',
  },
  {
    id: 5,
    title: 'Anniversary',
    subtitle: 'Celebrate Your Journey',
    icon: <Star size={20} strokeWidth={1.5} color="var(--gold)" />,
    image: '/images/anniversary.jpg',
    description: 'Celebrate your milestones with romantic and elegant setups.',
  },
  {
    id: 6,
    title: 'Festivals',
    subtitle: 'Vibrant & Traditional',
    icon: <Star size={20} strokeWidth={1.5} color="var(--gold)" />,
    image: '/images/house-warming.jpg',
    description: 'Make every festival celebration bright and memorable.',
  },
  {
    id: 7,
    title: 'Functions',
    subtitle: 'Professional & Seamless',
    icon: <Users size={20} strokeWidth={1.5} color="var(--gold)" />,
    image: '/images/corporate.jpg',
    description: 'We handle corporate & private functions seamlessly.',
  },
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

          <div className="services-bento-grid">
            {serviceCards.map((svc, index) => (
              <div
                className={`service-bento-card ${index === 0 ? 'bento-large' : 'bento-small'}`}
                key={svc.id}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="bento-bg-image" style={{ backgroundImage: `url(${svc.image})` }}></div>
                <div className="bento-content">
                  <div className="bento-icon-wrapper">
                    {svc.icon}
                  </div>
                  <h3 className="bento-title">{svc.title}</h3>
                  <h4 className="bento-subtitle">{svc.subtitle}</h4>
                  <div className="bento-divider">
                    <span></span><div className="bento-diamond"></div><span></span>
                  </div>
                  <p className="bento-desc">{svc.description}</p>
                  <Link to="/contact" className="bento-btn">View Details →</Link>
                </div>
              </div>
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
