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
  { to: '/services', label: 'Services',  icon: <Scissors  size={18} strokeWidth={1.6} /> },
  { to: '/gallery',  label: 'Gallery',   icon: <Image     size={18} strokeWidth={1.6} /> },
  { to: '/packages', label: 'Packages',  icon: <Gift      size={18} strokeWidth={1.6} /> },
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
          <div className="logo-icon-ring">
            <StarLogo size={24} />
          </div>
          <div className="logo-text-block">
            <span className="logo-brand">Boss Event Decorator</span>
            <span className="logo-tagline">Wedding Planner</span>
          </div>
        </NavLink>

        {/* Desktop Links */}
        <ul className="navbar-links" role="list">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={({ isActive }) => isActive ? 'active' : ''}>
                {label}
              </NavLink>
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
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
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
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                  <div style={{
                    width: '54px', height: '54px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #fdf0f2, #f9f3ee)',
                    border: '1.5px solid rgba(201,163,103,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 14px rgba(189,106,113,0.15)',
                  }}>
                    <StarLogo size={30} />
                  </div>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 600, color: '#c9a367', letterSpacing: '3px', lineHeight: 1 }}>
                    Boss Event Decorator
                  </p>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.52rem', letterSpacing: '3.5px', color: '#bd6a71', fontWeight: 600, textTransform: 'uppercase' }}>
                    Wedding Planner
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                    <div style={{ width: '32px', height: '1px', background: 'linear-gradient(90deg, transparent, #f0dde0)' }} />
                    <span style={{ color: '#c9a367', fontSize: '12px' }}>♥</span>
                    <div style={{ width: '32px', height: '1px', background: 'linear-gradient(90deg, #f0dde0, transparent)' }} />
                  </div>
                </div>
              </div>

              {/* Nav Links */}
              <nav style={{ flex: 1 }}>
                {navItems.map(({ to, label, icon }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={closeSheet}
                    style={({ isActive }) => ({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '15px 20px',
                      borderBottom: '1px solid #f5ebe8',
                      textDecoration: 'none',
                      color: isActive ? '#bd6a71' : '#2a2320',
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '0.9rem',
                      fontWeight: isActive ? 600 : 400,
                      background: isActive ? 'rgba(253, 240, 242, 0.6)' : 'transparent',
                      transition: 'all 0.2s ease',
                      borderLeft: isActive ? '3px solid #bd6a71' : '3px solid transparent',
                    })}
                  >
                    <span style={{
                      width: '34px', height: '34px',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, #fdf0f2, #fff)',
                      border: '1px solid #f0dde0',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#bd6a71', flexShrink: 0,
                      boxShadow: '0 2px 6px rgba(189,106,113,0.08)',
                    }}>
                      {icon}
                    </span>
                    <span style={{ flex: 1 }}>{label}</span>
                    <ArrowRight size={14} style={{ color: '#bd6a71', opacity: 0.5 }} />
                  </NavLink>
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
