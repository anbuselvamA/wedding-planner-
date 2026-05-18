import React, { useState } from 'react';
import './Footer.css';
import { Phone, Mail, MapPin, Send, MessageCircle, Link2, Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletter = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer style={{ background: '#fffcfa', borderTop: '1px solid #f5ebe8' }}>

      {/* ── Logo + Social ── */}
      <div style={{ textAlign: 'center', padding: '40px 20px 24px' }}>
        {/* Star icon */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
            <path d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z" fill="#c9a367" />
            <path d="M12 5L14 9H18L15 12L16 16L12 14L8 16L9 12L6 9H10L12 5Z" fill="#fff" />
          </svg>
        </div>

        {/* IPPO wordmark */}
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '32px', fontWeight: 600,
          color: '#c9a367', letterSpacing: '6px',
          lineHeight: 1, marginBottom: '4px',
        }}>IPPO</p>

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '10px', fontWeight: 600,
          letterSpacing: '4px', textTransform: 'uppercase',
          color: '#bd6a71', marginBottom: '12px',
        }}>WEDDING PLANNER</p>

        {/* Gold diamond divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
          <div style={{ width: '50px', height: '1px', background: '#f0dde0' }} />
          <span style={{ color: '#c9a367', fontSize: '12px' }}>◆</span>
          <div style={{ width: '50px', height: '1px', background: '#f0dde0' }} />
        </div>

        {/* Social icons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
          {[
            {
              href: 'https://instagram.com',
              icon: <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>,
            },
            {
              href: 'https://facebook.com',
              icon: <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
            },
            {
              href: 'https://pinterest.com',
              icon: <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.641 1.267 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.135-1.867 3.135-4.562 0-2.387-1.716-4.057-4.163-4.057-2.836 0-4.5 2.127-4.5 4.326 0 .856.33 1.774.741 2.276a.3.3 0 0 1 .069.286c-.076.315-.244 1.002-.277 1.14-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>,
            },
            {
              href: 'https://youtube.com',
              icon: <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>,
            },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                border: '1.5px solid #f0dde0',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#bd6a71', textDecoration: 'none',
                transition: 'background 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#bd6a71'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#bd6a71'; }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{ height: '1px', background: '#f5ebe8', margin: '0 20px' }} />

      {/* ── 3-Column Links Grid ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '8px',
        padding: '24px 16px',
        maxWidth: '680px',
        margin: '0 auto',
      }}>

        {/* Quick Links */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '12px' }}>
            <Link2 size={13} color="#bd6a71" />
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#bd6a71' }}>QUICK LINKS</p>
          </div>
          {[['/', 'Home'], ['/services', 'Services'], ['/gallery', 'Gallery'], ['/packages', 'Packages'], ['/about', 'About Us'], ['/contact', 'Contact']].map(([to, label]) => (
            <Link key={to} to={to} style={{ display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none', marginBottom: '8px', fontFamily: "'Inter',sans-serif", fontSize: '13px', color: '#555', lineHeight: 1.3 }}>
              <ChevronRight size={12} color="#bd6a71" style={{ flexShrink: 0 }} />
              {label}
            </Link>
          ))}
        </div>

        {/* Our Services */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '12px' }}>
            <Calendar size={13} color="#bd6a71" />
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#bd6a71' }}>OUR SERVICES</p>
          </div>
          {['Full Wedding Planning', 'Venue Selection', 'Decoration & Styling', 'Photography & Video', 'Catering', 'Guest Management'].map((s) => (
            <Link key={s} to="/services" style={{ display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none', marginBottom: '8px', fontFamily: "'Inter',sans-serif", fontSize: '13px', color: '#555', lineHeight: 1.3 }}>
              <ChevronRight size={12} color="#bd6a71" style={{ flexShrink: 0 }} />
              {s}
            </Link>
          ))}
        </div>

        {/* Contact Us */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '12px' }}>
            <Phone size={13} color="#bd6a71" />
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#bd6a71' }}>CONTACT US</p>
          </div>
          {[
            { icon: <Phone size={13} color="#bd6a71" />, text: '+91 98765 43210' },
            { icon: <Mail size={13} color="#bd6a71" />, text: 'hello@ippowedding.com' },
            { icon: <MapPin size={13} color="#bd6a71" />, text: 'Chennai, Tamil Nadu, India' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', marginBottom: '10px' }}>
              <span style={{ marginTop: '1px', flexShrink: 0 }}>{item.icon}</span>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '12px', color: '#555', lineHeight: 1.4 }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{ height: '1px', background: '#f5ebe8', margin: '0 20px' }} />

      {/* ── Newsletter ── */}
      <div style={{ padding: '20px 20px', maxWidth: '680px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
          <Mail size={14} color="#bd6a71" />
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#bd6a71' }}>NEWSLETTER</p>
        </div>
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '15px', color: '#1a1a1a', marginBottom: '14px', lineHeight: 1.4 }}>
          Get wedding inspiration and tips in your inbox.
        </p>
        <form onSubmit={handleNewsletter}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{
              width: '100%', padding: '14px 16px',
              border: '1.5px solid #f0dde0', borderRadius: '10px',
              fontFamily: "'Inter',sans-serif", fontSize: '14px',
              color: '#333', background: 'white',
              outline: 'none', boxSizing: 'border-box',
              marginBottom: '10px',
            }}
          />
          <button type="submit" style={{
            width: '100%', height: '48px',
            background: 'linear-gradient(135deg, #bd6a71, #c97a82)',
            border: 'none', borderRadius: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(189,106,113,0.3)',
          }}>
            <Send size={18} color="white" />
          </button>
        </form>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ padding: '16px 20px 24px', textAlign: 'center', borderTop: '1px solid #f5ebe8' }}>
        {/* Heart icon */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#f0aab0" strokeWidth="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </div>
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '12px', color: '#aaa', marginBottom: '10px' }}>
          <svg viewBox="0 0 24 24" width="11" height="11" fill="#bd6a71" style={{ display: 'inline', marginRight: '3px', verticalAlign: 'middle' }}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          2024{' '}
          <span style={{ color: '#bd6a71', fontWeight: 600 }}>Ippo Wedding Planner.</span>
          {' '}All Rights Reserved.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', alignItems: 'center' }}>
          <a href="#" style={{ fontFamily: "'Inter',sans-serif", fontSize: '12px', color: '#bd6a71', textDecoration: 'none' }}>Privacy Policy</a>
          <span style={{ color: '#ddd' }}>|</span>
          <a href="#" style={{ fontFamily: "'Inter',sans-serif", fontSize: '12px', color: '#bd6a71', textDecoration: 'none' }}>Terms & Conditions</a>
        </div>
      </div>

      {/* ── WhatsApp Float Button ── */}
      <button className="whatsapp-float">
        <MessageCircle size={28} color="#fff" />
      </button>

    </footer>
  );
};

export default Footer;
