import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import MobileStickyBtn from './components/MobileStickyBtn';
import { LocalBusinessSchema } from './components/Schema';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';

import BookConsultationPage from './pages/BookConsultationPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const WhatsAppRedirect = ({ message }) => {
  useEffect(() => {
    window.location.replace(`https://wa.me/919600654784?text=${encodeURIComponent(message)}`);
  }, [message]);
  return null;
};

function App() {
  useEffect(() => {
    // Buttery smooth Lenis scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // AOS reveal animations
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
      delay: 0,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <LocalBusinessSchema />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"                  element={<HomePage />} />
        <Route path="/gallery"           element={<GalleryPage />} />

        <Route path="/about"             element={<AboutPage />} />
        <Route path="/contact"           element={<WhatsAppRedirect message="Hello Boss Event Decorator! I have an enquiry." />} />
        <Route path="/book-consultation" element={<BookConsultationPage />} />
      </Routes>
      <Footer />
      {/* Global floating elements */}
      <MobileStickyBtn />
    </Router>
  );
}

export default App;
