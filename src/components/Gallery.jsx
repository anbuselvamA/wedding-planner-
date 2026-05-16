import React, { useState, useRef } from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    { id: 1, src: '/images/gallery_1.png', alt: 'Wedding Mandap' },
    { id: 2, src: '/images/gallery_2.png', alt: 'Wedding Reception' },
    { id: 3, src: '/images/gallery_3.png', alt: 'Wedding Couple' },
    { id: 4, src: '/images/gallery_4.png', alt: 'Outdoor Wedding Setup' },
    { id: 5, src: '/images/gallery_5.png', alt: 'Wedding Decoration' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section className="gallery">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-subtitle">OUR WORK</p>
          <h2 className="section-title">A Glimpse Of Our Magic</h2>
          <div className="section-divider">
            <span></span>
            <div className="diamond"></div>
            <span></span>
          </div>
        </div>

        <div className="gallery-wrapper" data-aos="fade-up" data-aos-delay="200">
          <div className="gallery-counter">
            {activeIndex + 1} / {images.length}
          </div>
          <div 
            className="gallery-grid" 
            ref={scrollContainerRef} 
            onScroll={handleScroll}
          >
            {images.map((img) => (
              <div className="gallery-item" key={img.id}>
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
        </div>

        <div className="gallery-action" data-aos="fade-up" data-aos-delay="300">
          <button className="btn btn-primary hover-glow hover-lift">View Full Gallery</button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
