import React from 'react';
import './Testimonials.css';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      text: "Ippo Wedding Planner turned our dream wedding into reality. Every detail was perfectly managed. Highly recommended!",
      name: "Ananya & Karthik",
      avatar: "/images/avatar_1.png"
    },
    {
      id: 2,
      text: "From planning to execution, everything was seamless and beautiful. We enjoyed our day stress-free!",
      name: "Meera & Arjun",
      avatar: "/images/avatar_2.png"
    },
    {
      id: 3,
      text: "Their creativity and dedication made our wedding magical. Thank you for the best memories!",
      name: "Divya & Rohan",
      avatar: "/images/avatar_3.png"
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">HAPPY COUPLES</p>
          <h2 className="section-title">What Our Couples Say</h2>
          <div className="section-divider">
            <span></span>
            <div className="diamond"></div>
            <span></span>
          </div>
        </div>

        <div className="testimonials-carousel">
          <button className="carousel-btn prev-btn">
            <ChevronLeft size={24} color="#a0a0a0" />
          </button>
          
          <div className="testimonials-grid">
            {reviews.map((review) => (
              <div className="testimonial-card" key={review.id}>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#e2a146" color="#e2a146" />
                  ))}
                </div>
                <p className="testimonial-text">{review.text}</p>
                <div className="testimonial-footer">
                  <span className="testimonial-author">— {review.name}</span>
                  <img src={review.avatar} alt={review.name} className="testimonial-avatar" />
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-btn next-btn">
            <ChevronRight size={24} color="#a0a0a0" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
