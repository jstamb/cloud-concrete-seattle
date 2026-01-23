import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/JsonLd';
import { BUSINESS_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for ${BUSINESS_NAME}. Learn how we handle your information.`,
};

export default function Privacy() {
  return (
    <div className="pb-32">
      <BreadcrumbSchema items={[{ name: 'Privacy', url: '/privacy' }]} />

      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-5xl font-black text-brand-dark mb-12">Privacy <span className="text-brand-primary italic">Policy</span></h1>
        <div className="prose prose-slate prose-lg font-medium text-slate-600 leading-relaxed space-y-8">
          <p>At {BUSINESS_NAME}, we take your privacy seriously. This policy outlines how we collect, use, and protect your information when you interact with our website.</p>

          <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tight">1. Information Collection</h2>
          <p>We collect information you provide directly via our lead forms, including your name, phone number, and project details. We also collect basic analytical data through cookies to improve our site performance.</p>

          <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tight">2. Use of Information</h2>
          <p>Your information is used exclusively to provide project estimates and communicate regarding our services. We do not sell your data to third parties.</p>

          <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tight">3. Data Protection</h2>
          <p>We implement industry-standard security measures to safeguard your personal information against unauthorized access or disclosure.</p>

          <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tight">4. Contact Us</h2>
          <p>If you have any questions about this policy, please contact us at the phone number listed on our website.</p>
        </div>
      </div>
    </div>
  );
}
