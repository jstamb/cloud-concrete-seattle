import { DOMAIN, BUSINESS_NAME, PHONE_NUMBER } from '@/lib/constants';

interface JsonLdProps {
  data: Record<string, unknown>;
}

// JSON-LD structured data component
// Note: This uses dangerouslySetInnerHTML which is safe here because:
// 1. The data is developer-controlled (not user input)
// 2. JSON.stringify escapes special characters
// 3. This is the recommended approach for JSON-LD in Next.js
export function JsonLd({ data }: JsonLdProps) {
  const jsonString = JSON.stringify(data);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ConcreteContractor",
    "name": BUSINESS_NAME,
    "description": "Seattle's trusted concrete contractor specializing in driveways, patios, foundations, stamped concrete, and decorative concrete. Licensed, bonded, and insured with a 10-year warranty.",
    "image": `${DOMAIN}/images/CloudConcreteofSeattle.jpeg`,
    "url": DOMAIN,
    "telephone": PHONE_NUMBER,
    "priceRange": "$$-$$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Seattle",
      "addressRegion": "WA",
      "postalCode": "98101",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.613042,
      "longitude": -122.3420644
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Seattle",
        "sameAs": "https://en.wikipedia.org/wiki/Seattle"
      },
      {
        "@type": "City",
        "name": "Bellevue"
      },
      {
        "@type": "City",
        "name": "Kirkland"
      },
      {
        "@type": "City",
        "name": "Redmond"
      },
      {
        "@type": "City",
        "name": "Renton"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Concrete Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Concrete Driveways",
            "description": "Custom-built concrete driveways designed to withstand Seattle's unique weather patterns."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Stamped Concrete",
            "description": "High-end decorative stamped concrete patios, driveways, and walkways."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Concrete Foundations",
            "description": "Professional foundation services for homes and additions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Concrete Patios",
            "description": "Custom outdoor living spaces with various finish options."
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.google.com/maps/place/Cloud+Concrete+of+Seattle"
    ]
  };

  return <JsonLd data={schema} />;
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": DOMAIN
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.name,
        "item": `${DOMAIN}${item.url}`
      }))
    ]
  };

  return <JsonLd data={schema} />;
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return <JsonLd data={schema} />;
}

export function ServiceSchema({
  serviceName,
  description
}: {
  serviceName: string;
  description: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "description": description,
    "provider": {
      "@type": "ConcreteContractor",
      "name": BUSINESS_NAME
    },
    "areaServed": {
      "@type": "City",
      "name": "Seattle"
    }
  };

  return <JsonLd data={schema} />;
}

export function ArticleSchema({
  title,
  excerpt,
  imageUrl,
  datePublished
}: {
  title: string;
  excerpt: string;
  imageUrl: string;
  datePublished: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": excerpt,
    "image": imageUrl,
    "datePublished": datePublished,
    "author": {
      "@type": "Organization",
      "name": BUSINESS_NAME
    },
    "publisher": {
      "@type": "Organization",
      "name": BUSINESS_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": `${DOMAIN}/images/logo.png`
      }
    }
  };

  return <JsonLd data={schema} />;
}
