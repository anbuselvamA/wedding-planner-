import React, { useState } from 'react';
import './Gallery.css';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

const Gallery = () => {
  const images = [
    { id: 1, src: '/images/gallery_1.webp', alt: 'Wedding Mandap' },
    { id: 2, src: '/images/gallery_2.webp', alt: 'Wedding Reception' },
    { id: 3, src: '/images/gallery_3.webp', alt: 'Wedding Couple' },
    { id: 4, src: '/images/gallery_4.webp', alt: 'Outdoor Wedding Setup' },
    { id: 5, src: '/images/gallery_5.webp', alt: 'Wedding Decoration' },
  ];

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

        {/* Desktop: Grid layout (unchanged) */}
        <div className="gallery-grid-desktop" data-aos="fade-up" data-aos-delay="200">
          {images.map((img) => (
            <div className="gallery-item hover-lift" key={img.id}>
              <img loading="lazy" src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>

        {/* Mobile: shadcn Carousel */}
        <div className="gallery-carousel-mobile" data-aos="fade-up" data-aos-delay="200">
          <Carousel opts={{ align: 'start', loop: true }} className="w-full">
            <CarouselContent>
              {images.map((img) => (
                <CarouselItem key={img.id}>
                  <div className="rounded-xl overflow-hidden aspect-[4/5]">
                    <img loading="lazy"
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
          {/* Slide counter is shown by embla — simple indicator dots */}
        </div>

        <div className="gallery-action" data-aos="fade-up" data-aos-delay="300">
          <button className="btn btn-primary hover-glow hover-lift">View Full Gallery</button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
