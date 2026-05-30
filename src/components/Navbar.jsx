import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Calendar, Home, Scissors, Image, Gift, Users, Mail, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Sheet, SheetContent } from '@/components/ui/sheet';

/* ── Logo SVG ─────────────────────────────────────────────────────────── */
const StarLogo = ({ size = 26 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none">
    <path d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z" fill="#c9a367" />
    <path d="M12 5L14 9H18L15 12L16 16L12 14L8 16L9 12L6 9H10L12 5Z" fill="#fff" opacity="0.9" />
  </svg>
);

/* ── Nav items ─────────────────────────────────────────────────────────── */
const navItems = [
  { to: '/',         label: 'Home',      icon: <Home      size={18} strokeWidth={1.6} /> },
  { to: '/gallery',  label: 'Gallery',   icon: <Image     size={18} strokeWidth={1.6} /> },
  { to: '/about',    label: 'About Us',  icon: <Users     size={18} strokeWidth={1.6} /> },
  { to: '/contact',  label: 'Contact',   icon: <Mail      size={18} strokeWidth={1.6} /> },
];

/* ─────────────────────────────────────────────────────────────────────── */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeSheet = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [open]);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-inner">

        {/* Logo */}
        <NavLink to="/" className="navbar-logo" onClick={closeSheet} aria-label="Boss Event Decorator - Home">
          <div className="brand-logo-wrapper" style={{ position: 'relative', display: 'flex' }}>
            <div className="b-logo-ring">
              <span className="b-logo-text">&B</span>
            </div>
          </div>
          <div className="logo-text-block">
            <div className="logo-brand-row">
              <span className="boss-script">Boss</span>
              <span className="event-decorator">EVENT DECORATOR</span>
            </div>
            <div className="logo-tagline-row">
              <div className="tagline-line"></div>
              <span className="logo-tagline">WEDDING PLANNER</span>
              <div className="tagline-line"></div>
            </div>
          </div>
        </NavLink>

        {/* Desktop Links */}
        <ul className="navbar-links" role="list">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              {to.startsWith('/#') ? (
                <a href={to} className="nav-link" onClick={closeSheet}>
                  {label}
                </a>
              ) : (
                <NavLink to={to} className={({ isActive }) => isActive ? 'active' : ''}>
                  {label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="navbar-actions">
          <NavLink
            to="/book-consultation"
            className="nav-book-btn d-none-mobile"
            aria-label="Book a consultation"
          >
            <Calendar size={15} />
            Book Consultation
          </NavLink>

          {/* Mobile Sheet Trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <button
              className={`menu-btn${open ? ' open' : ''}`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
            >
              <span className="menu-btn-bar" />
              <span className="menu-btn-bar" />
              <span className="menu-btn-bar" />
            </button>

            <SheetContent
              side="right"
              className="p-0 flex flex-col overflow-y-auto"
              style={{
                width: 'min(82vw, 320px)',
                background: 'linear-gradient(180deg, #fffcfa 0%, #fdf8f5 100%)',
                border: 'none',
              }}
            >
              {/* Sheet Header */}
              <div style={{
                padding: '2rem 1.5rem 1.5rem',
                borderBottom: '1px solid #f5ebe8',
                background: 'linear-gradient(135deg, #fdf0f2 0%, #fffcfa 100%)',
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="brand-logo-wrapper" style={{ position: 'relative', display: 'flex', marginBottom: '12px' }}>
                    <div className="b-logo-ring" style={{ width: '54px', height: '54px', borderWidth: '1.5px', borderColor: '#a6824a', boxShadow: '0 4px 14px rgba(189,106,113,0.15)', background: '#fff' }}>
                      <span className="b-logo-text" style={{ fontSize: '1.8rem', color: '#a6824a', textShadow: '0 1px 1px rgba(0,0,0,0.05)' }}>&B</span>
                    </div>
                  </div>
                  <div className="logo-text-block" style={{ alignItems: 'center' }}>
                    <div className="logo-brand-row" style={{ justifyContent: 'center' }}>
                      <span className="boss-script" style={{ fontSize: '1.8rem', color: '#a6824a', fontWeight: 600, textShadow: '0 1px 1px rgba(0,0,0,0.05)' }}>Boss</span>
                      <span className="event-decorator" style={{ fontSize: '1.1rem', color: '#a6824a', fontWeight: 700 }}>EVENT DECORATOR</span>
                    </div>
                    <div className="logo-tagline-row" style={{ justifyContent: 'center', marginTop: '6px' }}>
                      <div className="tagline-line" style={{ background: '#f0dde0' }}></div>
                      <span className="logo-tagline" style={{ color: '#bd6a71' }}>WEDDING PLANNER</span>
                      <div className="tagline-line" style={{ background: '#f0dde0' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nav Links */}
              <nav style={{ flex: 1, padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {navItems.map(({ to, label, icon }) => (
                  <li key={to} style={{ width: '100%', listStyle: 'none' }}>
                    {to.startsWith('/#') ? (
                      <a
                        href={to}
                        onClick={closeSheet}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '14px',
                          padding: '12px 16px', borderRadius: '12px',
                          textDecoration: 'none', color: '#333',
                          fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', fontWeight: 500,
                          background: 'white', border: '1px solid #f5ebe8',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                        }}
                      >
                        <div style={{ color: '#bd6a71', display: 'flex' }}>{icon}</div>
                        {label}
                      </a>
                    ) : (
                      <NavLink
                        to={to}
                        onClick={closeSheet}
                        style={({ isActive }) => ({
                          display: 'flex', alignItems: 'center', gap: '14px',
                          padding: '12px 16px', borderRadius: '12px',
                          textDecoration: 'none', color: isActive ? '#bd6a71' : '#333',
                          fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', fontWeight: 500,
                          background: isActive ? '#fdf0f2' : 'white',
                          border: isActive ? '1px solid #f5dde0' : '1px solid #f5ebe8',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                        })}
                      >
                        <div style={{ color: '#bd6a71', display: 'flex' }}>{icon}</div>
                        {label}
                      </NavLink>
                    )}
                  </li>
                ))}
              </nav>
              {/* Book Consultation Card */}
              <div style={{ padding: '16px' }}>
                <div style={{
                  background: 'linear-gradient(135deg, #bd6a71 0%, #d4808a 100%)',
                  borderRadius: '16px',
                  padding: '18px 16px',
                  boxShadow: '0 8px 24px rgba(189,106,113,0.3)',
                }}>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', marginBottom: '4px' }}>
                    Ready to begin?
                  </p>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 500, color: '#fff', lineHeight: 1.3, marginBottom: '14px' }}>
                    Book a Free Consultation
                  </p>
                  <NavLink
                    to="/book-consultation"
                    onClick={closeSheet}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      gap: '8px', width: '100%', height: '46px',
                      background: 'rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255,255,255,0.4)',
                      color: '#fff',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      transition: 'background 0.2s',
                    }}
                  >
                    <Calendar size={15} /> Book Now <ArrowRight size={14} />
                  </NavLink>
                </div>
              </div>

              {/* Floral decoration */}
              <div style={{ width: '100%', overflow: 'hidden', maxHeight: '80px', marginTop: 'auto' }}>
                <img
                  loading="lazy"
                  src="/images/floral_left_edge.webp"
                  alt=""
                  aria-hidden="true"
                  style={{ width: '100%', objectFit: 'cover', objectPosition: 'top', transform: 'scaleX(-1)', opacity: 0.6 }}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
