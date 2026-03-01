import type { APIRoute } from 'astro';
import { DOMAIN } from '@/lib/constants';

export const GET: APIRoute = async () => {
  const robotsTxt = `# robots.txt - Cloud Concrete of Seattle
# Last updated by SEO Autopilot: 2026-03-01

User-agent: *
Allow: /
Disallow: /thank-you
Disallow: /api/
Disallow: /*?*

# AI Search Crawlers - Allow for LLMO visibility
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: cohere-ai
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400'
    }
  });
};
