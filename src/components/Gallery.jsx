import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">OUR WORK</p>
          <h2 className="section-title">A Glimpse Of Our Magic</h2>
          <div className="section-divider">
            <span></span>
            <div className="diamond"></div>
            <span></span>
          </div>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/images/gallery_1.png" alt="Wedding Mandap" />
          </div>
          <div className="gallery-item">
            <img src="/images/gallery_2.png" alt="Wedding Reception" />
          </div>
          <div className="gallery-item">
            <img src="/images/gallery_3.png" alt="Wedding Couple" />
          </div>
          <div className="gallery-item">
            <img src="/images/gallery_4.png" alt="Outdoor Wedding Setup" />
          </div>
          <div className="gallery-item">
            <img src="/images/gallery_5.png" alt="Wedding Decoration" />
          </div>
        </div>

        <div className="gallery-action">
          <button className="btn btn-primary">View Full Gallery</button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
