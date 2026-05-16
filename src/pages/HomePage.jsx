import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const HomePage = () => {
  return (
    <main>
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
