import type { APIRoute } from 'astro';
import { DOMAIN } from '@/lib/constants';

export const GET: APIRoute = async () => {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /thank-you

Sitemap: ${DOMAIN}/sitemap.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400'
    }
  });
};
