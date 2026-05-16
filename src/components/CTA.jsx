import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-banner" style={{ backgroundImage: "url('/images/cta_banner.png')" }}>
          <div className="cta-content">
            <h2>Ready to start planning your dream wedding?</h2>
            <p>Let's create unforgettable memories together.</p>
            <button className="btn btn-outline cta-btn">Book Free Consultation</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
