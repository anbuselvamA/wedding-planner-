import React from 'react';
import './Navbar.css';
import { Menu, Calendar, Home, Wrench, Image, Package, Users, Mail, ChevronRight, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Sheet, SheetContent } from '@/components/ui/sheet';

// ── Logo SVG (star) ──────────────────────────────────────────────────────────
const StarLogo = ({ size = 28 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none">
    <path d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z" fill="#c9a367" />
    <path d="M12 5L14 9H18L15 12L16 16L12 14L8 16L9 12L6 9H10L12 5Z" fill="#fff" />
  </svg>
);

// ── Nav menu items with icons ─────────────────────────────────────────────────
const navItems = [
  { to: '/',        label: 'Home',     icon: <Home size={20} strokeWidth={1.5} /> },
  { to: '/services',label: 'Services', icon: <Wrench size={20} strokeWidth={1.5} />, chevron: true },
  { to: '/gallery', label: 'Gallery',  icon: <Image size={20} strokeWidth={1.5} /> },
  { to: '/packages',label: 'Packages', icon: <Package size={20} strokeWidth={1.5} /> },
  { to: '/about',   label: 'About Us', icon: <Users size={20} strokeWidth={1.5} /> },
  { to: '/contact', label: 'Contact',  icon: <Mail size={20} strokeWidth={1.5} /> },
];

// ── Social icon ───────────────────────────────────────────────────────────────
const SocialBtn = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer"
    className="w-11 h-11 rounded-full border border-[#f0dde0] flex items-center justify-center text-[#bd6a71] hover:bg-[#bd6a71] hover:text-white hover:border-[#bd6a71] transition-all duration-200">
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

        {/* Desktop / mobile logo */}
        <NavLink to="/" className="navbar-logo" onClick={closeSheet}>
          <div className="logo-icon">
            <StarLogo size={24} />
          </div>
          <div className="logo-text">
            <h2>IPPO</h2>
            <span>WEDDING PLANNER</span>
          </div>
        </NavLink>

        {/* Desktop nav links */}
        <ul className="navbar-links">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={({ isActive }) => isActive ? 'active' : ''}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <NavLink to="/book-consultation" className="btn btn-primary d-none-mobile nav-book-btn">
            <Calendar size={18} /> Book Consultation
          </NavLink>

          {/* Mobile hamburger + Sheet */}
          <Sheet open={open} onOpenChange={setOpen}>
            <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu">
              <Menu size={28} />
            </button>

            <SheetContent side="right" className="w-[78vw] max-w-[320px] p-0 flex flex-col overflow-y-auto bg-[#fffcfa]">

              {/* ── Header ── */}
              <div className="flex flex-col items-center pt-8 pb-4 px-6 border-b border-[#f5ebe8]">
                <StarLogo size={34} />
                <p className="font-serif text-2xl text-[#1a1a1a] mt-2 tracking-wide">IPPO</p>
                <p className="text-[10px] tracking-[3px] text-[#bd6a71] font-semibold uppercase mt-0.5">WEDDING PLANNER</p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="h-px w-10 bg-[#f0dde0]" />
                  <span className="text-[#c9a367] text-base">♥</span>
                  <div className="h-px w-10 bg-[#f0dde0]" />
                </div>
              </div>

              {/* ── Nav Links ── */}
              <nav className="flex flex-col flex-1 px-2 pt-2">
                {navItems.map(({ to, label, icon, chevron }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={closeSheet}
                    className={({ isActive }) =>
                      `flex items-center gap-4 px-4 py-3.5 mx-2 rounded-xl transition-all duration-150 ${
                        isActive
                          ? 'bg-[#fdf0f2] text-[#bd6a71]'
                          : 'text-[#333] hover:bg-[#fdf8f8] hover:text-[#bd6a71]'
                      }`
                    }
                  >
                    <span className="text-[#bd6a71] shrink-0">{icon}</span>
                    <span className="flex-1 font-medium text-base">{label}</span>
                    {chevron && <ChevronRight size={16} className="text-[#bd6a71] opacity-60" />}
                  </NavLink>
                ))}
              </nav>

              {/* ── Book a Consultation card ── */}
              <div className="px-5 pt-3 pb-2">
                <div className="bg-[#fdf0f2] rounded-2xl p-4 border border-[#f5dde0]">
                  <div className="flex items-start gap-3">
                    {/* Calendar-heart icon */}
                    <div className="w-11 h-11 rounded-full bg-white border border-[#f0dde0] flex items-center justify-center shrink-0 shadow-sm">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#bd6a71" strokeWidth="1.5">
                        <rect x="3" y="4" width="18" height="18" rx="3" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <path d="M12 14c0-1.5 2.5-1.5 2.5 0s-2.5 2.5-2.5 2.5S9.5 15.5 9.5 14 12 14 12 14z" fill="#bd6a71" stroke="none"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-[#1a1a1a] leading-tight">Book a Consultation</p>
                      <p className="text-xs text-[#888] mt-0.5 leading-relaxed">Let's plan your dream wedding together.</p>
                    </div>
                  </div>
                  <NavLink
                    to="/book-consultation"
                    onClick={closeSheet}
                    className="mt-3 w-full h-11 bg-[#bd6a71] hover:bg-[#a2565c] text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all"
                  >
                    Book Now <ArrowRight size={15} />
                  </NavLink>
                </div>
              </div>

              {/* ── Let's Connect ── */}
              <div className="px-5 py-4 text-center">
                <p className="font-serif text-[#bd6a71] text-sm mb-1">Let's Connect</p>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="h-px w-8 bg-[#f0dde0]" />
                  <span className="text-[#c9a367] text-xs">♥</span>
                  <div className="h-px w-8 bg-[#f0dde0]" />
                </div>
                <div className="flex items-center justify-center gap-3">
                  {/* Instagram */}
                  <SocialBtn href="https://instagram.com">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="2" y="2" width="20" height="20" rx="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                    </svg>
                  </SocialBtn>
                  {/* Facebook */}
                  <SocialBtn href="https://facebook.com">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </SocialBtn>
                  {/* Pinterest */}
                  <SocialBtn href="https://pinterest.com">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.641 1.267 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.135-1.867 3.135-4.562 0-2.387-1.716-4.057-4.163-4.057-2.836 0-4.5 2.127-4.5 4.326 0 .856.33 1.774.741 2.276a.3.3 0 0 1 .069.286c-.076.315-.244 1.002-.277 1.14-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
                    </svg>
                  </SocialBtn>
                  {/* WhatsApp */}
                  <SocialBtn href="https://wa.me/919876543210">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </SocialBtn>
                </div>
              </div>

              {/* ── Floral decoration ── */}
              <div className="w-full mt-auto overflow-hidden" style={{ maxHeight: '100px' }}>
                <img src="/images/floral_left_edge.png" alt=""
                  className="w-full object-cover object-top opacity-70"
                  style={{ transform: 'scaleX(-1)' }} />
              </div>

            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
