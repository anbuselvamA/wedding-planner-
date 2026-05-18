import React, { useState } from 'react';
import './CTA.css';
import { Link } from 'react-router-dom';
import {
  Phone, User, Calendar, MapPin, Users,
  IndianRupee, MessageSquare, Lock, Send, HeartHandshake
} from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

/* ─── Trust Badge ─────────────────────────────────────────────── */
const TrustBadge = ({ icon, label, sub }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="w-10 h-10 rounded-full border border-[#e8b4ba] flex items-center justify-center bg-white/80">
      {icon}
    </div>
    <span className="text-xs font-semibold text-[#333] leading-none">{label}</span>
    <span className="text-[10px] text-[#888] leading-none">{sub}</span>
  </div>
);

/* ─── Labeled Input Field ─────────────────────────────────────── */
const LabelField = ({ icon, label, children }) => (
  <div className="flex flex-col gap-1">
    <label className="text-[11px] font-semibold uppercase tracking-wide text-[#bd6a71] pl-1">
      {label}
    </label>
    <div className="flex items-center gap-3 bg-[#fdf8f8] border border-[#f0dde0] rounded-2xl px-4 py-3.5 focus-within:border-[#bd6a71] focus-within:bg-white focus-within:shadow-md transition-all duration-200">
      <span className="text-[#bd6a71] shrink-0">{icon}</span>
      {children}
    </div>
  </div>
);

const inputCls =
  "flex-1 bg-transparent text-sm outline-none text-[#222] placeholder:text-[#ccc] min-w-0 font-medium";

/* ─── Section Divider ─────────────────────────────────────────── */
const SectionDivider = ({ children }) => (
  <div className="flex items-center gap-3 my-1">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#f0dde0]" />
    <span className="text-[#bd6a71] font-serif text-sm font-medium whitespace-nowrap">{children} ♥</span>
    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#f0dde0]" />
  </div>
);

/* ─── Main CTA ────────────────────────────────────────────────── */
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
        <DialogContent className="max-w-3xl bg-white p-0 h-[92vh] md:h-auto md:max-h-[92vh] overflow-hidden">
          <div className="flex h-full md:h-auto">

            {/* ── LEFT PANEL — desktop only ── */}
            <div className="hidden md:flex md:w-[42%] bg-[#fdf0f2] relative flex-col items-center shrink-0 overflow-hidden">
              <div className="relative w-full h-56 md:h-64 overflow-hidden">
                <img src="/images/gallery_2.png" alt="Wedding decoration"
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '0 0 60% 0 / 0 0 40% 0' }} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fdf0f2]"
                  style={{ borderRadius: '0 0 60% 0 / 0 0 40% 0' }} />
              </div>
              <div className="relative -mt-10 z-10 w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-[#f7d8dc]">
                <svg viewBox="0 0 60 60" width="44" height="44" fill="none">
                  <circle cx="20" cy="30" r="12" stroke="#c9a367" strokeWidth="3" fill="none"/>
                  <circle cx="40" cy="30" r="12" stroke="#c9a367" strokeWidth="3" fill="none"/>
                  <path d="M20 22 L22 18 L24 22" stroke="#c9a367" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M40 22 L42 18 L44 22" stroke="#c9a367" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <div className="px-7 pt-4 pb-3 text-center flex flex-col items-center">
                <p className="text-[10px] uppercase tracking-[3px] text-[#bd6a71] font-semibold mb-1">WE'D LOVE TO HEAR FROM YOU</p>
                <h2 className="font-serif text-3xl text-[#222] mb-1 leading-tight">Quick Enquiry</h2>
                <div className="text-[#c9a367] text-sm mb-3">◆</div>
                <p className="text-sm text-[#666] leading-relaxed text-center">
                  Share your details and our wedding specialist will get in touch with you within 24 hours.
                </p>
              </div>
              <div className="flex items-center justify-center gap-5 px-6 py-4">
                <TrustBadge icon={<HeartHandshake size={18} color="#bd6a71" />} label="Expert" sub="Guidance" />
                <TrustBadge icon={<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#bd6a71" strokeWidth="2"><path d="M12 2L4 6v6c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V6l-8-4z"/></svg>} label="100%" sub="Secure" />
                <TrustBadge icon={<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#bd6a71" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>} label="Quick" sub="Response" />
              </div>
              <div className="mt-auto w-full">
                <img src="/images/floral_left_edge.png" alt="" className="w-full object-cover opacity-60"
                  style={{ maxHeight: '100px', transform: 'scaleX(-1)' }} />
              </div>
            </div>

            {/* ── RIGHT PANEL ── */}
            <div className="flex-1 flex flex-col bg-white overflow-hidden">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 p-8">
                  <div className="text-6xl">💌</div>
                  <p className="font-serif text-2xl text-[#222]">Thank You!</p>
                  <p className="text-sm text-[#888] text-center leading-relaxed">
                    Our wedding specialist will<br/>contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col h-full overflow-y-auto">
                  {/* ── Mobile header (hidden on desktop) ── */}
                  <div className="flex md:hidden items-center gap-3 px-5 pt-5 pb-4 bg-gradient-to-r from-[#fdf0f2] to-white border-b border-[#f0dde0]">
                    <div className="w-10 h-10 rounded-full bg-white shadow border border-[#f7d8dc] flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 60 60" width="26" height="26" fill="none">
                        <circle cx="20" cy="30" r="12" stroke="#c9a367" strokeWidth="3" fill="none"/>
                        <circle cx="40" cy="30" r="12" stroke="#c9a367" strokeWidth="3" fill="none"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[2px] text-[#bd6a71] font-semibold leading-none mb-0.5">
                        IPPO Wedding Planner
                      </p>
                      <p className="font-serif text-lg text-[#222] leading-tight">Quick Enquiry</p>
                    </div>
                  </div>

                  {/* ── Form ── */}
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 px-5 py-5 md:px-8 md:py-6">

                    <SectionDivider>Tell us about you</SectionDivider>

                    <LabelField icon={<User size={16} />} label="Full Name *">
                      <input name="name" placeholder="Enter your full name"
                        value={formData.name} onChange={handleChange} required className={inputCls} />
                    </LabelField>

                    <LabelField icon={<Phone size={16} />} label="Phone Number *">
                      <input name="phone" type="tel" placeholder="+91 98765 43210"
                        value={formData.phone} onChange={handleChange} required className={inputCls} />
                    </LabelField>

                    <div className="grid grid-cols-2 gap-3">
                      <LabelField icon={<Calendar size={16} />} label="Wedding Date *">
                        <input name="date" type="date" value={formData.date}
                          onChange={handleChange} required className={`${inputCls} [color-scheme:light] text-xs`} />
                      </LabelField>
                      <LabelField icon={<MapPin size={16} />} label="Location *">
                        <input name="location" placeholder="City / Venue"
                          value={formData.location} onChange={handleChange} required className={inputCls} />
                      </LabelField>
                    </div>

                    <SectionDivider>Additional Details</SectionDivider>

                    <div className="grid grid-cols-2 gap-3">
                      <LabelField icon={<Users size={16} />} label="Guest Count *">
                        <select name="guests" value={formData.guests} onChange={handleChange}
                          className={`${inputCls} cursor-pointer appearance-none`} required>
                          <option value="" disabled>Select</option>
                          <option value="50-100">50 – 100</option>
                          <option value="100-300">100 – 300</option>
                          <option value="300-500">300 – 500</option>
                          <option value="500+">500+</option>
                        </select>
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#bd6a71" strokeWidth="2" className="shrink-0"><polyline points="6,9 12,15 18,9"/></svg>
                      </LabelField>
                      <LabelField icon={<IndianRupee size={16} />} label="Budget *">
                        <select name="budget" value={formData.budget} onChange={handleChange}
                          className={`${inputCls} cursor-pointer appearance-none`} required>
                          <option value="" disabled>Select</option>
                          <option value="below-5L">Below ₹5L</option>
                          <option value="5-10L">₹5 – 10L</option>
                          <option value="10-25L">₹10 – 25L</option>
                          <option value="25-50L">₹25 – 50L</option>
                          <option value="above-50L">Above ₹50L</option>
                        </select>
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#bd6a71" strokeWidth="2" className="shrink-0"><polyline points="6,9 12,15 18,9"/></svg>
                      </LabelField>
                    </div>

                    <LabelField icon={<MessageSquare size={16} />} label="Special Requests">
                      <textarea name="message" placeholder="Tell us about your dream wedding..."
                        value={formData.message} onChange={handleChange} rows={3}
                        className={`${inputCls} resize-none self-start w-full`} />
                    </LabelField>

                    {/* Submit */}
                    <button type="submit"
                      className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#bd6a71] to-[#c97a82] hover:from-[#a2565c] hover:to-[#bd6a71] text-white font-semibold text-base flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 mt-1">
                      <Send size={18} />
                      Send Enquiry ♡
                    </button>

                    {/* Trust row — mobile only */}
                    <div className="flex md:hidden items-center justify-center gap-4 pt-1">
                      <span className="flex items-center gap-1 text-[10px] text-[#aaa]">
                        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#bd6a71" strokeWidth="2"><path d="M12 2L4 6v6c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V6l-8-4z"/></svg>
                        100% Secure
                      </span>
                      <span className="w-px h-3 bg-[#ececec]" />
                      <span className="flex items-center gap-1 text-[10px] text-[#aaa]">
                        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#bd6a71" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                        Quick Response
                      </span>
                      <span className="w-px h-3 bg-[#ececec]" />
                      <span className="flex items-center gap-1 text-[10px] text-[#aaa]">
                        <Lock size={10} color="#bd6a71" />
                        Private
                      </span>
                    </div>
                  </form>
                </div>
              )}
            </div>

          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CTA;
