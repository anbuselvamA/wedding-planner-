import React from 'react';
import './Gallery.css';
import { ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

const images = [
  { id: 1, src: '/images/gallery_1.webp', alt: 'Wedding Mandap Decor' },
  { id: 2, src: '/images/gallery_2.webp', alt: 'Wedding Reception Hall' },
  { id: 3, src: '/images/gallery_3.webp', alt: 'Romantic Couple Portrait' },
  { id: 4, src: '/images/gallery_4.webp', alt: 'Outdoor Wedding Setup' },
  { id: 5, src: '/images/gallery_5.webp', alt: 'Wedding Floral Decoration' },
];

const Gallery = () => {
  return (
    <section className="gallery" aria-labelledby="gallery-heading">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-subtitle">OUR WORK</p>
          <h2 className="section-title" id="gallery-heading">
            A Glimpse Of Our Magic
          </h2>
          <div className="section-divider">
            <span></span>
            <div className="diamond"></div>
            <span></span>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="gallery-grid-desktop" data-aos="fade-up" data-aos-delay="150" data-aos-duration="900">
          {images.map((img) => (
            <div
              className="gallery-item hover-lift"
              key={img.id}
              data-label={img.alt}
              role="img"
              aria-label={img.alt}
            >
              <img loading="lazy" src={img.src} alt={img.alt} />
              <div className="gallery-item-overlay">
                <div className="gallery-view-icon">
                  <ZoomIn size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="gallery-carousel-mobile" data-aos="fade-up" data-aos-duration="800">
          <Carousel opts={{ align: 'center', loop: true }} className="w-full">
            <CarouselContent>
              {images.map((img) => (
                <CarouselItem key={img.id} className="basis-[85%]">
                  <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '4/5' }}>
                    <img
                      loading="lazy"
                      src={img.src}
                      alt={img.alt}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        <div className="gallery-action" data-aos="fade-up" data-aos-delay="200">
          <Link to="/gallery" className="btn btn-primary hover-glow" id="gallery-view-all-btn">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
