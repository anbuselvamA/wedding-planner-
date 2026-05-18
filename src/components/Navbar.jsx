import React from 'react';
import './Navbar.css';
import { Menu, Calendar } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const closeSheet = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeSheet}>
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z" fill="#c9a367" stroke="none" />
              <path d="M12 5L14 9H18L15 12L16 16L12 14L8 16L9 12L6 9H10L12 5Z" fill="#fff" stroke="none" />
            </svg>
          </div>
          <div className="logo-text">
            <h2>IPPO</h2>
            <span>WEDDING PLANNER</span>
          </div>
        </NavLink>

        {/* Desktop Links */}
        <ul className="navbar-links">
          <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
          <li><NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>Services</NavLink></li>
          <li><NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : '')}>Gallery</NavLink></li>
          <li><NavLink to="/packages" className={({ isActive }) => (isActive ? 'active' : '')}>Packages</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
        </ul>

        <div className="navbar-actions">
          <NavLink to="/book-consultation" className="btn btn-primary d-none-mobile nav-book-btn">
            <Calendar size={18} /> Book Consultation
          </NavLink>

          {/* Mobile menu trigger using shadcn Sheet */}
          <Sheet open={open} onOpenChange={setOpen}>
            <button
              className="menu-btn"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>

            <SheetContent side="right" className="w-[300px] flex flex-col">
              <SheetHeader className="border-b border-[#ececec] pb-4 mb-2">
                <SheetTitle className="flex items-center gap-2 text-[#c9a367]">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                    <path d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z" fill="#c9a367" stroke="none" />
                  </svg>
                  IPPO Wedding Planner
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-1 px-6 flex-1">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/services', label: 'Services' },
                  { to: '/gallery', label: 'Gallery' },
                  { to: '/packages', label: 'Packages' },
                  { to: '/about', label: 'About Us' },
                  { to: '/contact', label: 'Contact' },
                ].map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={closeSheet}
                    className={({ isActive }) =>
                      `block py-3 px-2 font-serif text-lg border-b border-[#ececec]/60 transition-colors last:border-0 ${
                        isActive ? 'text-[#bd6a71]' : 'text-[#222] hover:text-[#bd6a71]'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </nav>

              <div className="px-6 pb-6 mt-auto">
                <NavLink
                  to="/book-consultation"
                  onClick={closeSheet}
                  className="btn btn-primary w-full flex items-center justify-center gap-2 hover-glow"
                >
                  <Calendar size={18} /> Book Free Consultation
                </NavLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
