import React from 'react';
import SEO from '../components/SEO';
import { BreadcrumbSchema } from '../components/Schema';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const HomePage = () => {
  return (
    <main>
      <SEO
        title="Dream Weddings in Chennai, Tamil Nadu"
        description="RR Wedding Planner crafts unforgettable weddings in Chennai & across India. Full planning, decor, photography, catering and more. Book your free consultation today."
        path="/"
        image="https://rrwedding.com/images/hero_couple.webp"
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }]} />
      <Hero />
      <Services />
      <Stats />
      <Gallery />
      <Testimonials />
      <CTA />
    </main>
  );
};

export default HomePage;
