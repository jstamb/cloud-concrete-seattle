import type { Metadata } from 'next';
import { Inter, Lexend } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import StickyCTA from '@/components/StickyCTA';
import { LocalBusinessSchema } from '@/components/JsonLd';
import { BUSINESS_NAME, DOMAIN } from '@/lib/constants';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: `${BUSINESS_NAME} | Premier Concrete Contractors`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description: "Seattle's trusted concrete contractor. Driveways, patios, foundations, stamped concrete & more. Licensed, bonded & insured. Free estimates. Call (206) 495-0997.",
  keywords: ['concrete contractor Seattle', 'concrete driveway Seattle', 'stamped concrete Seattle', 'concrete patio Seattle', 'foundation contractor Seattle'],
  authors: [{ name: BUSINESS_NAME }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: DOMAIN,
    siteName: BUSINESS_NAME,
    title: `${BUSINESS_NAME} | Premier Concrete Contractors`,
    description: "Seattle's trusted concrete contractor. Driveways, patios, foundations, stamped concrete & more. Licensed, bonded & insured. Free estimates.",
    images: [
      {
        url: '/images/CloudConcreteofSeattle.jpeg',
        width: 1200,
        height: 630,
        alt: `${BUSINESS_NAME} - Professional Concrete Contractor in Seattle`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS_NAME} | Premier Concrete Contractors`,
    description: "Seattle's trusted concrete contractor. Driveways, patios, foundations, stamped concrete & more. Licensed, bonded & insured. Free estimates.",
    images: ['/images/CloudConcreteofSeattle.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'geo.region': 'US-WA',
    'geo.placename': 'Seattle',
    'geo.position': '47.613042;-122.3420644',
    'ICBM': '47.613042, -122.3420644',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <LocalBusinessSchema />
      </head>
      <body className="bg-slate-50 text-slate-900 overflow-x-hidden">
        {/* Noscript fallback for SEO crawlers */}
        <noscript>
          <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
            <h1>Cloud Concrete of Seattle - Professional Concrete Contractor</h1>
            <p>Seattle&apos;s trusted concrete contractor specializing in driveways, patios, foundations, stamped concrete, and decorative concrete. Licensed, bonded, and insured with a 10-year warranty on all structural work.</p>

            <h2>Our Concrete Services</h2>
            <ul>
              <li><a href="/services/concrete-driveways">Concrete Driveways</a> - Custom-built driveways for Seattle homes</li>
              <li><a href="/services/stamped-concrete">Stamped Concrete</a> - Decorative concrete with stone and wood patterns</li>
              <li><a href="/services/concrete-patios">Concrete Patios</a> - Outdoor living spaces built to last</li>
              <li><a href="/services/concrete-foundations">Concrete Foundations</a> - Structural foundation services</li>
              <li><a href="/services/concrete-retaining-walls">Retaining Walls</a> - Engineered slope stabilization</li>
              <li><a href="/services/exposed-aggregate">Exposed Aggregate</a> - Slip-resistant decorative finishes</li>
            </ul>

            <h2>Service Areas</h2>
            <p>Serving Seattle neighborhoods including Ballard, Capitol Hill, Queen Anne, West Seattle, Fremont, and all surrounding areas including Bellevue, Kirkland, Redmond, and Renton.</p>

            <nav>
              <a href="/">Home</a> |
              <a href="/about">About Us</a> |
              <a href="/services">Services</a> |
              <a href="/locations">Service Areas</a> |
              <a href="/blog">Blog</a> |
              <a href="/contact">Contact</a>
            </nav>

            <p><strong>Contact Us:</strong> Call (206) 495-0997 for a free estimate</p>
            <p>Cloud Concrete of Seattle - Licensed and Insured Concrete Contractors</p>
          </div>
        </noscript>

        {/* Rybbit Analytics */}
        <Script
          src="https://app.rybbit.io/api/script.js"
          data-site-id="5b7460f0c557"
          strategy="afterInteractive"
        />

        <div className="flex flex-col min-h-screen">
          <Header />
          <Breadcrumbs />
          <main className="flex-grow">
            {children}
          </main>
          <StickyCTA />
          <Footer />
        </div>
      </body>
    </html>
  );
}
