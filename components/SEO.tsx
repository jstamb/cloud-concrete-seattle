
import React from 'react';
import { useLocation } from 'react-router-dom';
import { DOMAIN, BUSINESS_NAME, PHONE_NUMBER } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  schemaType?: 'LocalBusiness' | 'Service' | 'Article' | 'FAQPage';
  schemaData?: any;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, schemaType, schemaData, canonical }) => {
  const location = useLocation();
  const fullTitle = `${title} | ${BUSINESS_NAME}`;
  const url = canonical ? `${DOMAIN}${canonical}` : `${DOMAIN}${location.pathname}`;

  // 1. LocalBusiness Schema (Always Present)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ConcreteContractor",
    "name": BUSINESS_NAME,
    "image": "https://cloudconcreteseattle.com/images/logo.png",
    "url": DOMAIN,
    "telephone": PHONE_NUMBER,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Seattle",
      "addressRegion": "WA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.613042,
      "longitude": -122.3420644
    },
    "areaServed": {
      "@type": "City",
      "name": "Seattle"
    }
  };

  // 2. BreadcrumbList Schema
  const pathnames = location.pathname.split('/').filter((x) => x);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": DOMAIN
      },
      ...pathnames.map((path, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' '),
        "item": `${DOMAIN}/${pathnames.slice(0, index + 1).join('/')}`
      }))
    ]
  };

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={schemaType === 'Article' ? 'article' : 'website'} />
      <meta property="og:image" content="https://cloudconcreteseattle.com/images/og-image.jpg" />
      
      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Structured Data Scripts */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {schemaType && schemaData && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": schemaType,
            ...schemaData
          })}
        </script>
      )}
    </>
  );
};

export default SEO;
