import React, { useState } from 'react';
import './CTA.css';
import { Link } from 'react-router-dom';
import { Phone, User, Calendar, MapPin, Users, IndianRupee, MessageSquare, Lock, Send, HeartHandshake } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

// ─── Trust Badge ────────────────────────────────────────────────────────────
const TrustBadge = ({ icon, label, sub }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="w-10 h-10 rounded-full border border-[#e8b4ba] flex items-center justify-center bg-white/80">
      {icon}
    </div>
    <span className="text-xs font-semibold text-[#333] leading-none">{label}</span>
    <span className="text-[10px] text-[#888] leading-none">{sub}</span>
  </div>
);

// ─── Form Field ─────────────────────────────────────────────────────────────
const Field = ({ icon, children }) => (
  <div className="flex items-center gap-3 bg-white border border-[#f0e4e6] rounded-xl px-4 py-3 focus-within:border-[#bd6a71] focus-within:shadow-sm transition-all">
    <span className="text-[#bd6a71] shrink-0">{icon}</span>
    {children}
  </div>
);

const inputCls = "flex-1 bg-transparent text-sm outline-none text-[#333] placeholder:text-[#bbb] min-w-0";

// ─── Section Label ───────────────────────────────────────────────────────────
const SectionLabel = ({ children }) => (
  <div className="text-center mb-4">
    <p className="font-serif text-lg text-[#bd6a71]">{children}</p>
    <span className="text-[#c9a367] text-sm">♥</span>
  </div>
);

// ─── Main CTA Component ──────────────────────────────────────────────────────
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

      {/* ── Pixel-Perfect Quick Enquiry Dialog ── */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl bg-white p-0 max-h-[95vh] overflow-y-auto">
          <div className="flex flex-col md:flex-row min-h-0">

            {/* ── LEFT PANEL ── */}
            <div className="relative w-full md:w-[42%] bg-[#fdf0f2] flex flex-col items-center shrink-0 overflow-hidden">

              {/* Top wedding photo */}
              <div className="relative w-full h-56 md:h-64 overflow-hidden">
                <img
                  src="/images/gallery_2.png"
                  alt="Wedding decoration"
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '0 0 60% 0 / 0 0 40% 0' }}
                />
                {/* gradient fade */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fdf0f2]" style={{ borderRadius: '0 0 60% 0 / 0 0 40% 0' }} />
              </div>

              {/* Wedding rings icon overlapping the photo */}
              <div className="relative -mt-10 z-10 w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-[#f7d8dc]">
                <svg viewBox="0 0 60 60" width="44" height="44" fill="none">
                  <circle cx="20" cy="30" r="12" stroke="#c9a367" strokeWidth="3" fill="none"/>
                  <circle cx="40" cy="30" r="12" stroke="#c9a367" strokeWidth="3" fill="none"/>
                  <path d="M20 22 L22 18 L24 22" stroke="#c9a367" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M40 22 L42 18 L44 22" stroke="#c9a367" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>

              {/* Text content */}
              <div className="px-7 pt-4 pb-3 text-center flex flex-col items-center">
                <p className="text-[10px] uppercase tracking-[3px] text-[#bd6a71] font-semibold mb-1">
                  WE'D LOVE TO HEAR FROM YOU
                </p>
                <h2 className="font-serif text-3xl text-[#222] mb-1 leading-tight">Quick Enquiry</h2>
                <div className="text-[#c9a367] text-sm mb-3">◆</div>
                <p className="text-sm text-[#666] leading-relaxed text-center">
                  Share your details and our wedding specialist will get in touch with you within 24 hours.
                </p>
              </div>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-5 px-6 py-4">
                <TrustBadge
                  icon={<HeartHandshake size={18} color="#bd6a71" />}
                  label="Expert"
                  sub="Guidance"
                />
                <TrustBadge
                  icon={
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#bd6a71" strokeWidth="2">
                      <path d="M12 2L4 6v6c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V6l-8-4z"/>
                    </svg>
                  }
                  label="100%"
                  sub="Secure"
                />
                <TrustBadge
                  icon={
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#bd6a71" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12,6 12,12 16,14"/>
                    </svg>
                  }
                  label="Quick"
                  sub="Response"
                />
              </div>

              {/* Decorative pink roses at bottom */}
              <div className="mt-auto w-full">
                <img
                  src="/images/floral_left_edge.png"
                  alt=""
                  className="w-full object-cover opacity-60"
                  style={{ maxHeight: '100px', transform: 'scaleX(-1) scaleY(1)' }}
                />
              </div>
            </div>

            {/* ── RIGHT PANEL ── */}
            <div className="flex-1 bg-white px-6 py-6 md:px-8 overflow-y-auto">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-16 gap-4">
                  <div className="text-5xl">💌</div>
                  <p className="font-serif text-2xl text-[#222]">Thank You!</p>
                  <p className="text-sm text-[#888] text-center">Our wedding specialist will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  {/* Section: Tell us about you */}
                  <SectionLabel>Tell us about you</SectionLabel>

                  <Field icon={<User size={17} />}>
                    <input name="name" placeholder="Your Name *" value={formData.name}
                      onChange={handleChange} required className={inputCls} />
                  </Field>

                  <Field icon={<Phone size={17} />}>
                    <input name="phone" type="tel" placeholder="Phone Number *" value={formData.phone}
                      onChange={handleChange} required className={inputCls} />
                  </Field>

                  <Field icon={<Calendar size={17} />}>
                    <input name="date" type="date" placeholder="Wedding Date *" value={formData.date}
                      onChange={handleChange} required
                      className={`${inputCls} [color-scheme:light]`} />
                  </Field>

                  <Field icon={<MapPin size={17} />}>
                    <input name="location" placeholder="Wedding Location *" value={formData.location}
                      onChange={handleChange} required className={inputCls} />
                  </Field>

                  {/* Section: Additional Details */}
                  <SectionLabel>Additional Details</SectionLabel>

                  <Field icon={<Users size={17} />}>
                    <select name="guests" value={formData.guests} onChange={handleChange}
                      className={`${inputCls} cursor-pointer appearance-none`} required>
                      <option value="" disabled>Guest Count (Approx.) *</option>
                      <option value="50-100">50 – 100</option>
                      <option value="100-300">100 – 300</option>
                      <option value="300-500">300 – 500</option>
                      <option value="500+">500+</option>
                    </select>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#bd6a71" strokeWidth="2" className="shrink-0">
                      <polyline points="6,9 12,15 18,9"/>
                    </svg>
                  </Field>

                  <Field icon={<IndianRupee size={17} />}>
                    <select name="budget" value={formData.budget} onChange={handleChange}
                      className={`${inputCls} cursor-pointer appearance-none`} required>
                      <option value="" disabled>Budget Range *</option>
                      <option value="below-5L">Below ₹5 Lakhs</option>
                      <option value="5-10L">₹5 – 10 Lakhs</option>
                      <option value="10-25L">₹10 – 25 Lakhs</option>
                      <option value="25-50L">₹25 – 50 Lakhs</option>
                      <option value="above-50L">Above ₹50 Lakhs</option>
                    </select>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#bd6a71" strokeWidth="2" className="shrink-0">
                      <polyline points="6,9 12,15 18,9"/>
                    </svg>
                  </Field>

                  <Field icon={<MessageSquare size={17} />}>
                    <textarea name="message" placeholder="Anything special you'd like to tell us?"
                      value={formData.message} onChange={handleChange} rows={3}
                      className={`${inputCls} resize-none`} />
                  </Field>

                  {/* Submit */}
                  <button type="submit"
                    className="mt-1 w-full h-14 rounded-xl bg-[#bd6a71] hover:bg-[#a2565c] text-white font-semibold text-base flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                    <Send size={18} />
                    Send Enquiry ♡
                  </button>

                  {/* Privacy note */}
                  <p className="flex items-center justify-center gap-1.5 text-[11px] text-[#aaa] text-center">
                    <Lock size={12} /> Your information is safe with us. We respect your privacy.
                  </p>
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
