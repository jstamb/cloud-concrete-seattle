import type { APIRoute } from 'astro';
import { SERVICES, NEIGHBORHOODS, BLOG_POSTS, DOMAIN } from '@/lib/constants';

export const GET: APIRoute = async () => {
  const baseUrl = DOMAIN;
  const today = new Date().toISOString().split('T')[0];

  // Static pages
  const staticPages = [
    { url: baseUrl, priority: '1.0', changefreq: 'weekly' },
    { url: `${baseUrl}/about`, priority: '0.8', changefreq: 'monthly' },
    { url: `${baseUrl}/contact`, priority: '0.9', changefreq: 'monthly' },
    { url: `${baseUrl}/privacy`, priority: '0.3', changefreq: 'yearly' },
    { url: `${baseUrl}/services`, priority: '0.9', changefreq: 'weekly' },
    { url: `${baseUrl}/locations`, priority: '0.9', changefreq: 'weekly' },
    { url: `${baseUrl}/blog`, priority: '0.8', changefreq: 'weekly' },
  ];

  // Service pages
  const servicePages = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    priority: '0.8',
    changefreq: 'weekly'
  }));

  // Location pages
  const locationPages = NEIGHBORHOODS.map((neighborhood) => ({
    url: `${baseUrl}/locations/${neighborhood.slug}`,
    priority: '0.7',
    changefreq: 'weekly'
  }));

  // Blog posts
  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    priority: '0.6',
    changefreq: 'monthly'
  }));

  // Blog categories
  const categories = Array.from(new Set(BLOG_POSTS.map(p => p.category)));
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/blog/category/${category.toLowerCase().replace(/&/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')}`,
    priority: '0.5',
    changefreq: 'weekly'
  }));

  // Service + Location combination pages (the programmatic SEO pages)
  const combinedPages: { url: string; priority: string; changefreq: string }[] = [];
  for (const service of SERVICES) {
    for (const neighborhood of NEIGHBORHOODS) {
      combinedPages.push({
        url: `${baseUrl}/${service.slug}-${neighborhood.slug}`,
        priority: '0.6',
        changefreq: 'monthly'
      });
    }
  }

  const allPages = [...staticPages, ...servicePages, ...locationPages, ...blogPages, ...categoryPages, ...combinedPages];

  // Escape ampersands for XML
  const escapeXml = (str: string) => str.replace(/&/g, '&amp;');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${escapeXml(page.url)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
