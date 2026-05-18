import React, { useState } from 'react';
import './CTA.css';
import { Link } from 'react-router-dom';
import { Phone, User, Calendar } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const CTA = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', date: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
      setFormData({ name: '', phone: '', date: '' });
    }, 2000);
  };

  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-banner" style={{ backgroundImage: "url('/images/cta_banner.png')" }}>
          <div className="cta-content">
            <h2>Ready to start planning your dream wedding?</h2>
            <p>Let's create unforgettable memories together.</p>
            <div className="cta-buttons">
              {/* Quick enquiry Dialog */}
              <button
                className="btn btn-primary cta-btn hover-glow"
                onClick={() => setOpen(true)}
              >
                Quick Enquiry
              </button>
              <Link to="/book-consultation" className="btn btn-outline cta-btn">
                Full Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* shadcn Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">
              ♥ Quick Enquiry
            </DialogTitle>
            <DialogDescription className="text-center">
              Leave your details and we'll call you back within 24 hours.
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-3">💌</div>
              <p className="font-serif text-lg text-[#222]">Thank you!</p>
              <p className="text-sm text-[#666] mt-1">We'll be in touch very soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-4">
              <div className="flex items-center gap-3 border border-[#ececec] rounded-xl px-3 py-2 focus-within:border-[#bd6a71] transition-colors">
                <User size={18} color="#bd6a71" />
                <input
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="flex-1 bg-transparent text-sm outline-none text-[#222] placeholder:text-[#aaa]"
                />
              </div>
              <div className="flex items-center gap-3 border border-[#ececec] rounded-xl px-3 py-2 focus-within:border-[#bd6a71] transition-colors">
                <Phone size={18} color="#bd6a71" />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="flex-1 bg-transparent text-sm outline-none text-[#222] placeholder:text-[#aaa]"
                />
              </div>
              <div className="flex items-center gap-3 border border-[#ececec] rounded-xl px-3 py-2 focus-within:border-[#bd6a71] transition-colors">
                <Calendar size={18} color="#bd6a71" />
                <input
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="flex-1 bg-transparent text-sm outline-none text-[#222]"
                />
              </div>
              <Button type="submit" className="mt-2 w-full h-12 text-base">
                Send Enquiry ♥
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CTA;
