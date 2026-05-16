import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './GalleryPage.css';

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Weddings', 'Decor', 'Engagement', 'Mehendi', 'Haldi', 'Reception', 'Destination Weddings'];

  // Using a mix of the new gallery images and fallback service images to complete the 9 image grid
  const galleryItems = [
    { id: 1, src: '/images/gallery_page_1.png', category: 'Weddings', size: 'large' },
    { id: 2, src: '/images/gallery_page_2.png', category: 'Decor', size: 'medium' },
    { id: 3, src: '/images/gallery_page_3.png', category: 'Reception', size: 'medium' },
    { id: 4, src: '/images/gallery_page_4.png', category: 'Decor', size: 'medium' },
    { id: 5, src: '/images/gallery_page_5.png', category: 'Decor', size: 'small' },
    { id: 6, src: '/images/gallery_page_6.png', category: 'Reception', size: 'small' },
    { id: 7, src: '/images/svc_full_wedding.png', category: 'Weddings', size: 'medium' },
    { id: 8, src: '/images/svc_bridal_makeup.png', category: 'Mehendi', size: 'medium' },
    { id: 9, src: '/images/svc_entertainment.png', category: 'Reception', size: 'medium' },
  ];

  const filteredItems = activeTab === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <div className="gallery-page">
      {/* ── HERO BANNER ── */}
      <section className="gallery-hero-banner">
        <img src="/images/floral_left_edge.png" alt="floral" className="floral-edge floral-left float-anim" />
        <img src="/images/floral_left_edge.png" alt="floral" className="floral-edge floral-right float-anim" />
        
        <div className="gallery-hero-content" data-aos="zoom-in" data-aos-duration="1200">
          <p className="gallery-hero-subtitle">OUR GALLERY</p>
          <h1 className="gallery-hero-title">
            Moments We Create,<br />
            <span className="gallery-hero-script">Memories You Cherish Forever</span>
          </h1>
          <div className="gallery-hero-divider">
            <span></span>
            <div className="diamond-gold">♥</div>
            <span></span>
          </div>
          <p className="gallery-hero-desc">
            A glimpse of the beautiful weddings we've planned<br/>and the magical moments we've brought to life.
          </p>
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <section className="gallery-filters-section" data-aos="fade-up" data-aos-delay="200">
        <div className="container">
          <div className="gallery-tabs">
            {tabs.map(tab => (
              <button 
                key={tab} 
                className={`gallery-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY GRID ── */}
      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-masonry">
            {filteredItems.map((item, index) => (
              <div className="gallery-masonry-item hover-lift" key={`${item.id}-${index}`} data-aos="zoom-in" data-aos-delay={(index % 3) * 100}>
                <img src={item.src} alt={`Wedding ${item.category}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="gallery-cta" data-aos="fade-up" data-aos-duration="1000">
        <div className="container">
          <div className="gallery-cta-inner">
            <div className="cta-icon-box float-anim">
              <svg viewBox="0 0 24 24" fill="none" stroke="#bd6a71" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <div className="cta-text-content">
              <h2>Ready to Create Your Beautiful Memories?</h2>
              <p>Let us plan your dream wedding with perfection and love.</p>
            </div>
            <Link to="/book-consultation" className="btn btn-primary cta-button-right hover-glow hover-lift">Book Free Consultation →</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default GalleryPage;
