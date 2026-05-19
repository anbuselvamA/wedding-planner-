import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import './MobileStickyBtn.css';

const MobileStickyBtn = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 350);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (location.pathname === '/book-consultation') {
    return null;
  }

  return (
    <div className={`mobile-sticky-btn${visible ? ' visible' : ''}`} aria-hidden={!visible}>
      <Link
        to="/book-consultation"
        className="mobile-sticky-link"
        id="mobile-sticky-book-btn"
        tabIndex={visible ? 0 : -1}
      >
        <Calendar size={18} className="sticky-icon" />
        <span>Book Free Consultation</span>
        <ArrowRight size={16} className="sticky-arrow" />
      </Link>
    </div>
  );
};

export default MobileStickyBtn;
