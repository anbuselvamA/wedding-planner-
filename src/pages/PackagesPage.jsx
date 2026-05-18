import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { BreadcrumbSchema } from '../components/Schema';
import { Link } from 'react-router-dom';
import { Award, Heart, ShieldCheck, Clock, CheckCircle2, XCircle, HeartHandshake, HeadphonesIcon } from 'lucide-react';
import './PackagesPage.css';

const PackagesPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="packages-page">
      <SEO
        title="Wedding Planning Packages & Pricing"
        description="Choose from our bespoke wedding planning packages. Whether you need full-service planning, partial coordination, or day-of management, IPPO Wedding Planner has you covered."
        path="/packages"
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Packages', path: '/packages' }]} />
      {/* ── HERO BANNER ── */}
      <section className="pkg-hero">
        <div className="pkg-hero-container">
          <div className="pkg-hero-left" data-aos="fade-right" data-aos-duration="1200">
            <p className="pkg-hero-subtitle">OUR PACKAGES</p>
            <h1 className="pkg-hero-title">
              Perfect Planning,<br />
              <span className="pkg-hero-script">For Every Dream & Budget</span>
            </h1>
            <div className="pkg-hero-divider">
              <div className="diamond-gold">♦</div>
            </div>
            <p className="pkg-hero-desc">
              Choose a package that suits your needs and let us take care of the rest. We promise a celebration you'll cherish forever.
            </p>
            <div className="pkg-hero-stats">
              <div className="pkg-stat">
                <Award size={24} className="pkg-stat-icon" />
                <div className="pkg-stat-text">
                  <strong>500+</strong><br/><span>Successful Weddings</span>
                </div>
              </div>
              <div className="pkg-stat">
                <ShieldCheck size={24} className="pkg-stat-icon" />
                <div className="pkg-stat-text">
                  <strong>5+</strong><br/><span>Years Experience</span>
                </div>
              </div>
              <div className="pkg-stat">
                <HeartHandshake size={24} className="pkg-stat-icon" />
                <div className="pkg-stat-text">
                  <strong>Personalized</strong><br/><span>Planning</span>
                </div>
              </div>
              <div className="pkg-stat">
                <CheckCircle2 size={24} className="pkg-stat-icon" />
                <div className="pkg-stat-text">
                  <strong>End-to-End</strong><br/><span>Support</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pkg-hero-right" data-aos="fade-left" data-aos-duration="1500">
            <img loading="lazy" src="/images/svc_catering.webp" alt="Wedding Table Setup" className="float-anim" />
          </div>
        </div>
      </section>

      {/* ── PRICING CARDS ── */}
      <section className="pkg-pricing">
        <div className="pkg-section-header" data-aos="fade-up">
          <h2 className="pkg-section-title">CHOOSE YOUR PERFECT PACKAGE</h2>
          <p className="pkg-section-subtitle">Thoughtfully crafted packages for your perfect celebration</p>
          <div className="diamond-gold">♦</div>
        </div>

        <div className="container">
          <div className="pkg-cards-wrapper">
            
            {/* Silver Package */}
            <div className="pkg-card hover-lift" data-aos="fade-up" data-aos-delay="100">
              <div className="pkg-card-badge silver-badge">
                <Award size={20} />
              </div>
              <h3 className="pkg-card-title">SILVER PACKAGE</h3>
              <p className="pkg-card-desc">Simple, Elegant & Hassle-Free</p>
              <div className="pkg-card-price">₹1,49,000</div>
              <p className="pkg-card-price-desc">Starting From</p>
              
              <ul className="pkg-features-list">
                <li><CheckCircle2 size={16} /> Venue Selection Assistance</li>
                <li><CheckCircle2 size={16} /> Basic Décor & Styling</li>
                <li><CheckCircle2 size={16} /> Vendor Coordination</li>
                <li><CheckCircle2 size={16} /> Invitation Design (Digital)</li>
                <li><CheckCircle2 size={16} /> On-the-Day Coordination</li>
                <li><CheckCircle2 size={16} /> Guest Management</li>
                <li><CheckCircle2 size={16} /> 1 Pre-Wedding Event</li>
              </ul>
              
              <div className="pkg-card-actions">
                <button className="btn btn-outline pkg-btn-outline">View Details</button>
                <Link to="/book-consultation" className="btn btn-primary pkg-btn-primary">Book Now</Link>
              </div>
            </div>

            {/* Gold Package (Highlighted) */}
            <div className="pkg-card highlighted hover-lift" data-aos="fade-up" data-aos-delay="200">
              <div className="pkg-popular-ribbon">MOST POPULAR</div>
              <div className="pkg-card-badge gold-badge">
                <Award size={20} />
              </div>
              <h3 className="pkg-card-title">GOLD PACKAGE</h3>
              <p className="pkg-card-desc">Perfect Balance of Style & Luxury</p>
              <div className="pkg-card-price">₹2,99,000</div>
              <p className="pkg-card-price-desc">Starting From</p>
              
              <ul className="pkg-features-list">
                <li><CheckCircle2 size={16} className="gold-check" /> Everything in Silver Package</li>
                <li><CheckCircle2 size={16} className="gold-check" /> Premium Décor & Styling</li>
                <li><CheckCircle2 size={16} className="gold-check" /> Photography & Videography</li>
                <li><CheckCircle2 size={16} className="gold-check" /> Invitation Design (Printed)</li>
                <li><CheckCircle2 size={16} className="gold-check" /> Bridal Makeup & Styling</li>
                <li><CheckCircle2 size={16} className="gold-check" /> Catering Management</li>
                <li><CheckCircle2 size={16} className="gold-check" /> Entertainment (DJ)</li>
                <li><CheckCircle2 size={16} className="gold-check" /> 2-3 Pre-Wedding Events</li>
                <li><CheckCircle2 size={16} className="gold-check" /> On-the-Day Supervision</li>
              </ul>
              
              <div className="pkg-card-actions">
                <button className="btn btn-outline pkg-btn-outline gold-outline">View Details</button>
                <Link to="/book-consultation" className="btn pkg-btn-gold">Book Now</Link>
              </div>
            </div>

            {/* Premium Royal Package */}
            <div className="pkg-card hover-lift" data-aos="fade-up" data-aos-delay="300">
              <div className="pkg-card-badge royal-badge">
                <Award size={20} />
              </div>
              <h3 className="pkg-card-title">PREMIUM ROYAL PACKAGE</h3>
              <p className="pkg-card-desc">For the Ultimate Celebration</p>
              <div className="pkg-card-price">₹4,99,000</div>
              <p className="pkg-card-price-desc">Starting From</p>
              
              <ul className="pkg-features-list">
                <li><CheckCircle2 size={16} className="royal-check" /> Everything in Gold Package</li>
                <li><CheckCircle2 size={16} className="royal-check" /> Luxury Décor & Custom Design</li>
                <li><CheckCircle2 size={16} className="royal-check" /> Celebrity / Premium Artists</li>
                <li><CheckCircle2 size={16} className="royal-check" /> Bridal & Groom Styling</li>
                <li><CheckCircle2 size={16} className="royal-check" /> Catering (Premium Menu)</li>
                <li><CheckCircle2 size={16} className="royal-check" /> Destination Wedding Assistance</li>
                <li><CheckCircle2 size={16} className="royal-check" /> Hospitality & Guest Experience</li>
                <li><CheckCircle2 size={16} className="royal-check" /> Wedding Website</li>
                <li><CheckCircle2 size={16} className="royal-check" /> Complete End-to-End Management</li>
              </ul>
              
              <div className="pkg-card-actions">
                <button className="btn btn-outline pkg-btn-outline">View Details</button>
                <Link to="/book-consultation" className="btn btn-primary pkg-btn-primary">Book Now</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── COMPARE TABLE ── */}
      <section className="pkg-compare">
        <div className="container">
          <div className="pkg-section-header" data-aos="fade-up">
            <h2 className="pkg-section-title">COMPARE PACKAGES</h2>
          </div>
          
          <div className="pkg-table-container" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <table className="pkg-table">
              <thead>
                <tr>
                  <th>FEATURES</th>
                  <th>SILVER</th>
                  <th>
                    <div className="table-highlight-header">
                      <span className="table-ribbon">MOST POPULAR</span>
                      GOLD
                    </div>
                  </th>
                  <th>PREMIUM ROYAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Venue Selection</td>
                  <td>Basic</td>
                  <td>Premium</td>
                  <td>Exclusive</td>
                </tr>
                <tr>
                  <td>Décor & Styling</td>
                  <td>Basic</td>
                  <td>Premium</td>
                  <td>Luxury Custom</td>
                </tr>
                <tr>
                  <td>Vendor Management</td>
                  <td><CheckCircle2 size={16} className="text-success" /> Yes</td>
                  <td><CheckCircle2 size={16} className="text-success" /> Yes</td>
                  <td><CheckCircle2 size={16} className="text-success" /> Yes</td>
                </tr>
                <tr>
                  <td>Bridal Makeup & Styling</td>
                  <td><CheckCircle2 size={16} className="text-success" /> Yes</td>
                  <td><CheckCircle2 size={16} className="text-success" /> Yes</td>
                  <td><CheckCircle2 size={16} className="text-success" /> Yes</td>
                </tr>
                <tr>
                  <td>Entertainment</td>
                  <td>DJ Basic</td>
                  <td>DJ Premium</td>
                  <td>DJ + Live Acts</td>
                </tr>
                <tr>
                  <td>Pre-Wedding Events</td>
                  <td>1</td>
                  <td>2-3</td>
                  <td>3+</td>
                </tr>
                <tr>
                  <td>On-the-Day Coordination</td>
                  <td><CheckCircle2 size={16} className="text-success" /> Yes</td>
                  <td><CheckCircle2 size={16} className="text-success" /> Yes</td>
                  <td><CheckCircle2 size={16} className="text-success" /> Yes</td>
                </tr>
                <tr>
                  <td>End-to-End Management</td>
                  <td><XCircle size={16} className="text-danger" /> No</td>
                  <td>Partial</td>
                  <td><CheckCircle2 size={16} className="text-success" /> Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FEATURES BANNER ── */}
      <section className="pkg-features-banner">
        <div className="container">
          <div className="pkg-features-grid">
            <div className="pkg-feature-item" data-aos="fade-right" data-aos-delay="100">
              <HeartHandshake className="feature-icon" size={32} strokeWidth={1.5} />
              <div>
                <h4>Personalized Planning</h4>
                <p>Tailored to your needs</p>
              </div>
            </div>
            <div className="pkg-feature-item" data-aos="fade-right" data-aos-delay="200">
              <ShieldCheck className="feature-icon" size={32} strokeWidth={1.5} />
              <div>
                <h4>Trusted Vendors</h4>
                <p>We work with the best</p>
              </div>
            </div>
            <div className="pkg-feature-item" data-aos="fade-right" data-aos-delay="300">
              <Clock className="feature-icon" size={32} strokeWidth={1.5} />
              <div>
                <h4>On-Time Delivery</h4>
                <p>We value your time</p>
              </div>
            </div>
            <div className="pkg-feature-item" data-aos="fade-right" data-aos-delay="400">
              <HeadphonesIcon className="feature-icon" size={32} strokeWidth={1.5} />
              <div>
                <h4>24/7 Support</h4>
                <p>We're always here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;
