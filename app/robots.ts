import { MetadataRoute } from 'next';
import { DOMAIN } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/thank-you'],
    },
    sitemap: `${DOMAIN}/sitemap.xml`,
  };
}
