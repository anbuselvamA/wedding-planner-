import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Testimonials.css';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: "Boss Event Decorator turned our dream wedding into reality. Every single detail was perfectly managed. We couldn't have asked for a more magical day!",
    name: 'Ananya & Karthik',
    role: 'Married · Virudhachalam',
    avatar: '/images/avatar_1.webp',
  },
  {
    id: 2,
    text: 'From planning to execution, everything was seamless and absolutely beautiful. We enjoyed our special day completely stress-free. Highly recommended!',
    name: 'Meera & Arjun',
    role: 'Married · Bengaluru',
    avatar: '/images/avatar_2.webp',
  },
  {
    id: 3,
    text: "Their creativity, dedication and passion made our wedding truly magical. Thank you Boss Event Decorator for creating the most beautiful memories of our lifetime.",
    name: 'Divya & Rohan',
    role: 'Married · Mumbai',
    avatar: '/images/avatar_3.webp',
  },
];

/* How many cards visible depending on width */
function getVisible() {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth <= 640) return 1;
  if (window.innerWidth <= 992) return 2;
  return 3;
}

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(getVisible);
  const autoRef = useRef(null);

  const maxIndex = reviews.length - visible;

  const stopAuto = useCallback(() => clearInterval(autoRef.current), []);
  const startAuto = useCallback(() => {
    stopAuto();
    autoRef.current = setInterval(() => {
      setCurrent(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
  }, [maxIndex, stopAuto]);

  useEffect(() => {
    const onResize = () => {
      const v = getVisible();
      setVisible(v);
      setCurrent(0);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [startAuto, stopAuto]);

  const go = (dir) => {
    stopAuto();
    setCurrent(prev => {
      const next = prev + dir;
      if (next < 0) return maxIndex;
      if (next > maxIndex) return 0;
      return next;
    });
    startAuto();
  };

  const cardWidthPct = 100 / visible;
  const offset = -current * cardWidthPct;

  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-subtitle">HAPPY COUPLES</p>
          <h2 className="section-title" id="testimonials-heading">What Our Couples Say</h2>
          <div className="section-divider">
            <span></span>
            <div className="diamond"></div>
            <span></span>
          </div>
        </div>

        <div
          className="testimonials-carousel-wrapper"
          data-aos="fade-up"
          data-aos-delay="150"
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
        >
          <div
            className="testimonials-track"
            style={{ transform: `translateX(${offset}%)` }}
            aria-live="polite"
          >
            {reviews.map((review) => (
              <div className="testimonial-card" key={review.id} aria-label={`Review by ${review.name}`}>
                <div className="testimonial-quote" aria-hidden="true">"</div>
                <div className="stars" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#e2a146" color="#e2a146" />
                  ))}
                </div>
                <p className="testimonial-text">{review.text}</p>
                <div className="testimonial-footer">
                  <img
                    loading="lazy"
                    src={review.avatar}
                    alt={review.name}
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <span className="testimonial-author">{review.name}</span>
                    <span className="testimonial-role">{review.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="testimonials-controls" data-aos="fade-up" data-aos-delay="200">
          <button
            className="carousel-btn"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="carousel-dots" role="tablist" aria-label="Testimonial navigation">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${current === i ? ' active' : ''}`}
                onClick={() => { stopAuto(); setCurrent(i); startAuto(); }}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-selected={current === i}
                role="tab"
              />
            ))}
          </div>

          <button
            className="carousel-btn"
            onClick={() => go(1)}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
