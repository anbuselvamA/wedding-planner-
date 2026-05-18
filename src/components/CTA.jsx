import React, { useState } from 'react';
import './CTA.css';
import { Link } from 'react-router-dom';
import { Phone, User, Calendar, MapPin, Users, IndianRupee, MessageSquare, Lock, Send } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

/* ── Divider with text ─────────────────────────────────────────────────────── */
const FormDivider = ({ children }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '4px 0' }}>
    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, #f0dde0)' }} />
    <span style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: '14px',
      color: '#bd6a71',
      fontWeight: 500,
      whiteSpace: 'nowrap',
    }}>
      {children} <span style={{ color: '#c9a367' }}>♥</span>
    </span>
    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, #f0dde0)' }} />
  </div>
);

/* ── Field Label ───────────────────────────────────────────────────────────── */
const FieldLabel = ({ children }) => (
  <label style={{
    display: 'block',
    fontFamily: "'Inter', sans-serif",
    fontSize: '10px',
    fontWeight: 700,
    letterSpacing: '1.2px',
    textTransform: 'uppercase',
    color: '#bd6a71',
    marginBottom: '5px',
    paddingLeft: '2px',
  }}>
    {children}
  </label>
);

/* ── Input Box ─────────────────────────────────────────────────────────────── */
const InputBox = ({ icon, children }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    background: 'white',
    border: '1.5px solid #f0dde0',
    borderRadius: '12px',
    padding: '12px 14px',
    transition: 'border-color 0.2s',
  }}
    onFocus={(e) => e.currentTarget.style.borderColor = '#bd6a71'}
    onBlur={(e) => e.currentTarget.style.borderColor = '#f0dde0'}
  >
    <span style={{ color: '#bd6a71', display: 'flex', flexShrink: 0 }}>{icon}</span>
    {children}
  </div>
);

const inputStyle = {
  flex: 1,
  background: 'transparent',
  border: 'none',
  outline: 'none',
  fontFamily: "'Inter', sans-serif",
  fontSize: '14px',
  color: '#333',
  minWidth: 0,
};

/* ─────────────────────────────────────────────────────────────────────────── */
const CTA = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '', phone: '', date: '', location: '', guests: '', budget: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
      setFormData({ name: '', phone: '', date: '', location: '', guests: '', budget: '', message: '' });
    }, 2500);
  };

  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-banner" style={{ backgroundImage: "url('/images/cta_banner.png')" }}>
          <div className="cta-content">
            <h2>Ready to start planning your dream wedding?</h2>
            <p>Let's create unforgettable memories together.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary cta-btn hover-glow" onClick={() => setOpen(true)}>
                Quick Enquiry
              </button>
              <Link to="/book-consultation" className="btn btn-outline cta-btn">
                Full Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Quick Enquiry Dialog ── */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden"
          style={{ background: '#fffcfa', maxHeight: '95vh', overflowY: 'auto' }}>
          <div style={{ display: 'flex', height: '100%' }}>

            {/* Desktop left panel */}
            <div className="hidden md:flex md:w-[42%] bg-[#fdf0f2] relative flex-col items-center shrink-0 overflow-hidden">
              <div className="relative w-full h-64 overflow-hidden">
                <img src="/images/gallery_2.png" alt="Wedding"
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '0 0 60% 0 / 0 0 40% 0' }} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fdf0f2]"
                  style={{ borderRadius: '0 0 60% 0 / 0 0 40% 0' }} />
              </div>
              <div className="relative -mt-10 z-10 w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-[#f7d8dc]">
                <svg viewBox="0 0 60 60" width="44" height="44" fill="none">
                  <circle cx="20" cy="30" r="12" stroke="#c9a367" strokeWidth="3" fill="none"/>
                  <circle cx="40" cy="30" r="12" stroke="#c9a367" strokeWidth="3" fill="none"/>
                </svg>
              </div>
              <div className="px-7 pt-4 pb-3 text-center flex flex-col items-center">
                <p className="text-[10px] uppercase tracking-[3px] text-[#bd6a71] font-semibold mb-1">WE'D LOVE TO HEAR FROM YOU</p>
                <h2 className="font-serif text-3xl text-[#222] mb-1 leading-tight">Quick Enquiry</h2>
                <div className="text-[#c9a367] text-sm mb-3">◆</div>
                <p className="text-sm text-[#666] leading-relaxed text-center">Share your details and our wedding specialist will get in touch within 24 hours.</p>
              </div>
              <div className="mt-auto w-full">
                <img src="/images/floral_left_edge.png" alt="" className="w-full object-cover opacity-60"
                  style={{ maxHeight: '100px', transform: 'scaleX(-1)' }} />
              </div>
            </div>

            {/* ── Right / Mobile panel ── */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#fffcfa', overflowY: 'auto' }}>

              {submitted ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 24px', gap: '12px' }}>
                  <div style={{ fontSize: '52px' }}>💌</div>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', color: '#222' }}>Thank You!</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#888', textAlign: 'center' }}>
                    Our wedding specialist will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ padding: '0 0 16px 0' }}>

                  {/* ── Mobile Header — hidden on desktop ── */}
                  <div className="flex md:hidden" style={{
                    alignItems: 'center',
                    gap: '12px',
                    padding: '18px 20px 14px',
                    background: 'linear-gradient(135deg, #fdf0f2 0%, #fffcfa 100%)',
                    borderBottom: '1px solid #f5ebe8',
                    marginBottom: '4px',
                  }}>
                    {/* Rings icon */}
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '50%',
                      background: '#fdf0f2', border: '1.5px solid #f0dde0',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <svg viewBox="0 0 60 60" width="32" height="32" fill="none">
                        <circle cx="20" cy="30" r="11" stroke="#c9a367" strokeWidth="3" fill="none"/>
                        <circle cx="38" cy="30" r="11" stroke="#c9a367" strokeWidth="3" fill="none"/>
                      </svg>
                    </div>
                    <div>
                      <p style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '9px',
                        fontWeight: 700,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        color: '#bd6a71',
                        marginBottom: '2px',
                      }}>IPPO WEDDING PLANNER</p>
                      <p style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '22px',
                        fontWeight: 500,
                        color: '#1a1a1a',
                        lineHeight: 1.2,
                      }}>Quick Enquiry</p>
                    </div>
                  </div>

                  {/* ── Form Body ── */}
                  <div style={{ padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>

                    <FormDivider>Tell us about you</FormDivider>

                    {/* Full Name */}
                    <div>
                      <FieldLabel>Full Name *</FieldLabel>
                      <InputBox icon={<User size={17} />}>
                        <input name="name" placeholder="Enter your full name"
                          value={formData.name} onChange={handleChange} required
                          style={{ ...inputStyle }} />
                      </InputBox>
                    </div>

                    {/* Phone */}
                    <div>
                      <FieldLabel>Phone Number *</FieldLabel>
                      <InputBox icon={<Phone size={17} />}>
                        <input name="phone" type="tel" placeholder="+91 98765 43210"
                          value={formData.phone} onChange={handleChange} required
                          style={{ ...inputStyle }} />
                      </InputBox>
                    </div>

                    {/* Date + Location — 2 col */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <div>
                        <FieldLabel>Wedding Date *</FieldLabel>
                        <InputBox icon={<Calendar size={16} />}>
                          <input name="date" type="date" value={formData.date}
                            onChange={handleChange} required
                            style={{ ...inputStyle, fontSize: '12px', colorScheme: 'light' }} />
                        </InputBox>
                      </div>
                      <div>
                        <FieldLabel>Location *</FieldLabel>
                        <InputBox icon={<MapPin size={16} />}>
                          <input name="location" placeholder="City / Venue"
                            value={formData.location} onChange={handleChange} required
                            style={{ ...inputStyle }} />
                        </InputBox>
                      </div>
                    </div>

                    {/* Guest + Budget — 2 col */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <div>
                        <FieldLabel>Guest Count *</FieldLabel>
                        <InputBox icon={<Users size={16} />}>
                          <select name="guests" value={formData.guests} onChange={handleChange} required
                            style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}>
                            <option value="" disabled>Select guest count</option>
                            <option value="50-100">50 – 100</option>
                            <option value="100-300">100 – 300</option>
                            <option value="300-500">300 – 500</option>
                            <option value="500+">500+</option>
                          </select>
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#bd6a71" strokeWidth="2" style={{ flexShrink: 0 }}>
                            <polyline points="6,9 12,15 18,9"/>
                          </svg>
                        </InputBox>
                      </div>
                      <div>
                        <FieldLabel>Budget *</FieldLabel>
                        <InputBox icon={<IndianRupee size={16} />}>
                          <select name="budget" value={formData.budget} onChange={handleChange} required
                            style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}>
                            <option value="" disabled>Select budget</option>
                            <option value="below-5L">Below ₹5L</option>
                            <option value="5-10L">₹5–10L</option>
                            <option value="10-25L">₹10–25L</option>
                            <option value="25-50L">₹25–50L</option>
                            <option value="above-50L">Above ₹50L</option>
                          </select>
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#bd6a71" strokeWidth="2" style={{ flexShrink: 0 }}>
                            <polyline points="6,9 12,15 18,9"/>
                          </svg>
                        </InputBox>
                      </div>
                    </div>

                    <FormDivider>Additional Details</FormDivider>

                    {/* Special Requests — with floral decoration */}
                    <div>
                      <FieldLabel>Special Requests</FieldLabel>
                      <div style={{
                        position: 'relative',
                        background: 'white',
                        border: '1.5px solid #f0dde0',
                        borderRadius: '12px',
                        overflow: 'hidden',
                      }}>
                        <div style={{ display: 'flex', gap: '10px', padding: '12px 14px 0' }}>
                          <span style={{ color: '#bd6a71', flexShrink: 0, marginTop: '2px' }}>
                            <MessageSquare size={17} />
                          </span>
                          <textarea
                            name="message"
                            placeholder="Tell us about your dream wedding..."
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            style={{
                              ...inputStyle,
                              resize: 'none',
                              width: '100%',
                              paddingBottom: '40px',
                            }}
                          />
                        </div>
                        {/* Floral bottom-right decoration */}
                        <img
                          src="/images/floral_left_edge.png"
                          alt=""
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            width: '90px',
                            opacity: 0.35,
                            pointerEvents: 'none',
                            transform: 'scaleX(-1)',
                          }}
                        />
                      </div>
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      style={{
                        width: '100%',
                        height: '54px',
                        background: 'linear-gradient(135deg, #bd6a71 0%, #c97a82 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '14px',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '16px',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        cursor: 'pointer',
                        boxShadow: '0 6px 24px rgba(189,106,113,0.35)',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        marginTop: '4px',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(189,106,113,0.4)'; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(189,106,113,0.35)'; }}
                    >
                      <Send size={18} />
                      Send Enquiry ♡
                    </button>

                    {/* Trust row */}
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      gap: '10px', flexWrap: 'wrap',
                    }}>
                      {[
                        { icon: <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="#bd6a71" strokeWidth="2"><path d="M12 2L4 6v6c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V6l-8-4z"/></svg>, text: '100% Secure' },
                        { icon: <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="#bd6a71" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>, text: 'Quick Response' },
                        { icon: <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="#bd6a71" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>, text: 'Private' },
                      ].map((item, i) => (
                        <React.Fragment key={i}>
                          {i > 0 && <span style={{ width: '1px', height: '10px', background: '#e0e0e0' }} />}
                          <span style={{
                            display: 'flex', alignItems: 'center', gap: '4px',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '11px', color: '#aaa',
                          }}>
                            {item.icon} {item.text}
                          </span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CTA;
