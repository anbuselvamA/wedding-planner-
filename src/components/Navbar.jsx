import React from 'react';
import './Navbar.css';
import { Menu, Calendar, Home, Scissors, Image, Gift, Users, Mail, ChevronRight, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Sheet, SheetContent } from '@/components/ui/sheet';

// ── Logo SVG ─────────────────────────────────────────────────────────────────
const StarLogo = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none">
    <path d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z" fill="#c9a367" />
    <path d="M12 5L14 9H18L15 12L16 16L12 14L8 16L9 12L6 9H10L12 5Z" fill="#fff" />
  </svg>
);

// ── Nav items ─────────────────────────────────────────────────────────────────
const navItems = [
  { to: '/',         label: 'Home',      icon: <Home      size={19} strokeWidth={1.6} /> },
  { to: '/services', label: 'Services',  icon: <Scissors  size={19} strokeWidth={1.6} />, chevron: true },
  { to: '/gallery',  label: 'Gallery',   icon: <Image     size={19} strokeWidth={1.6} /> },
  { to: '/packages', label: 'Packages',  icon: <Gift      size={19} strokeWidth={1.6} /> },
  { to: '/about',    label: 'About Us',  icon: <Users     size={19} strokeWidth={1.6} /> },
  { to: '/contact',  label: 'Contact',   icon: <Mail      size={19} strokeWidth={1.6} /> },
];

// ── Social circle button ──────────────────────────────────────────────────────
const SocialBtn = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer"
    className="w-[42px] h-[42px] rounded-full border border-[#f0dde0] flex items-center justify-center text-[#bd6a71] hover:bg-[#bd6a71] hover:text-white transition-all duration-200 shrink-0">
    {children}
  </a>
);

// ─────────────────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const closeSheet = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">

        {/* Navbar logo */}
        <NavLink to="/" className="navbar-logo" onClick={closeSheet}>
          <div className="logo-icon"><StarLogo size={24} /></div>
          <div className="logo-text">
            <h2>RR</h2>
            <span>WEDDING PLANNER</span>
          </div>
        </NavLink>

        {/* Desktop links */}
        <ul className="navbar-links">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <NavLink to="/book-consultation" className="btn btn-primary d-none-mobile nav-book-btn">
            <Calendar size={18} /> Book Consultation
          </NavLink>

          {/* Mobile Sheet */}
          <Sheet open={open} onOpenChange={setOpen}>
            <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu">
              <Menu size={28} />
            </button>

            <SheetContent side="right" className="w-[80vw] max-w-[300px] p-0 flex flex-col overflow-y-auto"
              style={{ background: '#fffcfa' }}>

              {/* ── Logo Header ── */}
              <div className="flex flex-col items-center pt-9 pb-5 px-6"
                style={{ borderBottom: '1px solid #f5ebe8' }}>
                <StarLogo size={36} />
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '22px',
                  fontWeight: 500,
                  color: '#1a1a1a',
                  marginTop: '6px',
                  letterSpacing: '2px',
                }}>RR</p>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '9px',
                  letterSpacing: '3px',
                  color: '#bd6a71',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  marginTop: '2px',
                }}>WEDDING PLANNER</p>
                {/* heart divider */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                  <div style={{ width: '36px', height: '1px', background: '#f0dde0' }} />
                  <span style={{ color: '#c9a367', fontSize: '14px', lineHeight: 1 }}>♥</span>
                  <div style={{ width: '36px', height: '1px', background: '#f0dde0' }} />
                </div>
              </div>

              {/* ── Nav Links ── */}
              <nav style={{ flex: 1 }}>
                {navItems.map(({ to, label, icon, chevron }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={closeSheet}
                    style={({ isActive }) => ({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '14px 20px',
                      borderBottom: '1px solid #f5ebe8',
                      textDecoration: 'none',
                      color: isActive ? '#bd6a71' : '#2a2a2a',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '15px',
                      fontWeight: 400,
                      transition: 'color 0.2s',
                    })}
                  >
                    {/* Icon box */}
                    <span style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: '#fdf0f2',
                      border: '1px solid #f5dde0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#bd6a71',
                      flexShrink: 0,
                    }}>
                      {icon}
                    </span>
                    <span style={{ flex: 1 }}>{label}</span>
                    {chevron && (
                      <ChevronRight size={16} style={{ color: '#bd6a71', opacity: 0.7 }} />
                    )}
                  </NavLink>
                ))}
              </nav>

              {/* ── Book a Consultation Card ── */}
              <div style={{ padding: '16px' }}>
                <div style={{
                  background: '#fdf0f2',
                  borderRadius: '16px',
                  padding: '14px',
                  border: '1px solid #f5dde0',
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                    {/* Calendar-heart icon circle */}
                    <div style={{
                      width: '42px', height: '42px', borderRadius: '50%',
                      background: 'white', border: '1px solid #f0dde0',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                    }}>
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#bd6a71" strokeWidth="1.6">
                        <rect x="3" y="4" width="18" height="18" rx="3"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <path d="M12 13.5c0-1.2 2-1.2 2 0s-2 2-2 2-2-.8-2-2 2-1.2 2 0z" fill="#bd6a71" stroke="none"/>
                      </svg>
                    </div>
                    <div>
                      <p style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '14px', fontWeight: 600,
                        color: '#1a1a1a', lineHeight: 1.3,
                      }}>Book a Consultation</p>
                      <p style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '12px', color: '#888',
                        marginTop: '3px', lineHeight: 1.4,
                      }}>Let's plan your dream wedding together.</p>
                    </div>
                  </div>
                  <NavLink
                    to="/book-consultation"
                    onClick={closeSheet}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      gap: '8px', width: '100%', height: '42px',
                      background: '#bd6a71', color: 'white',
                      borderRadius: '10px', textDecoration: 'none',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '14px', fontWeight: 600,
                      transition: 'background 0.2s',
                    }}
                  >
                    Book Now <ArrowRight size={15} />
                  </NavLink>
                </div>
              </div>




              {/* ── Floral bottom image ── */}
              <div style={{ width: '100%', overflow: 'hidden', maxHeight: '90px', marginTop: 'auto' }}>
                <img loading="lazy"
                  src="/images/floral_left_edge.webp"
                  alt=""
                  style={{ width: '100%', objectFit: 'cover', objectPosition: 'top', transform: 'scaleX(-1)', opacity: 0.75 }}
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
