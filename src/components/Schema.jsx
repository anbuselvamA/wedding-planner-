import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Injects JSON-LD structured data for:
 * - LocalBusiness (main site)
 * - BreadcrumbList (per page)
 * - FAQPage (services page)
 */

export const LocalBusinessSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://ippowedding.com/#business',
    name: 'IPPO Wedding Planner',
    description: 'Premium wedding planning services in Chennai, Tamil Nadu. Full wedding planning, decor, photography, catering, and more.',
    url: 'https://ippowedding.com',
    telephone: '+91-98765-43210',
    email: 'hello@ippowedding.com',
    image: 'https://ippowedding.com/images/hero_couple.webp',
    logo: 'https://ippowedding.com/favicon.svg',
    priceRange: '₹₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Chennai',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      postalCode: '600001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.0827,
      longitude: 80.2707,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    sameAs: [
      'https://instagram.com/ippowedding',
      'https://facebook.com/ippowedding',
      'https://pinterest.com/ippowedding',
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: 13.0827, longitude: 80.2707 },
      geoRadius: '500000',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Wedding Planning Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full Wedding Planning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Venue Selection' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Decoration & Styling' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding Photography' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Catering' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Guest Management' } },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '312',
      bestRating: '5',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export const BreadcrumbSchema = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `https://ippowedding.com${item.path}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export const FAQSchema = ({ faqs }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
