import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL  = 'https://ippowedding.com';
const SITE_NAME = 'IPPO Wedding Planner';
const DEFAULT_IMG = `${SITE_URL}/images/hero_couple.webp`;

/**
 * SEO component — drop this at the top of any page
 *
 * Props:
 *   title       – page title (appended with site name)
 *   description – meta description
 *   path        – URL path, e.g. "/services"
 *   image       – OG image URL (optional, defaults to hero)
 *   type        – OG type ("website" | "article"), default "website"
 *   noindex     – set true to hide from search engines
 */
const SEO = ({
  title       = 'Dream Weddings in Chennai, Tamil Nadu',
  description = 'IPPO Wedding Planner crafts unforgettable weddings in Chennai & across India. Full planning, decor, photography, catering and more. Book your free consultation today.',
  path        = '/',
  image       = DEFAULT_IMG,
  type        = 'website',
  noindex     = false,
}) => {
  const fullTitle   = `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      {/* ── Basic ── */}
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description"   content={description} />
      <meta name="robots"        content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <link rel="canonical"      href={canonicalUrl} />

      {/* ── Open Graph ── */}
      <meta property="og:type"        content={type} />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:url"         content={canonicalUrl} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={image} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale"      content="en_IN" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={image} />

      {/* ── Mobile / Theme ── */}
      <meta name="theme-color" content="#bd6a71" />
    </Helmet>
  );
};

export default SEO;
