import type { Metadata } from 'next';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import { BreadcrumbSchema } from '@/components/JsonLd';
import { PHONE_NUMBER, BUSINESS_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us | Request a Free Concrete Quote',
  description: "Get in touch with Cloud Concrete of Seattle for a free estimate on your next project. We serve all Seattle neighborhoods and surrounding areas.",
};

export default function Contact() {
  return (
    <div className="pb-32">
      <BreadcrumbSchema items={[{ name: 'Contact', url: '/contact' }]} />

      <div className="bg-brand-dark py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/concrete-38.jpeg"
            alt="Concrete project background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6">Let&apos;s Discuss <br/><span className="text-brand-secondary italic">Your Vision</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">From custom driveways to structural foundations, our Seattle experts are ready to help you build something permanent.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-black text-brand-dark mb-8 tracking-tight">Direct Access</h2>
            <div className="w-20 h-2 bg-brand-primary mb-12"></div>

            <div className="space-y-12 mb-16">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.455 5.455l.773-1.548a1 1 0 011.06-.539l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Phone Support</h4>
                  <a href={`tel:${PHONE_NUMBER}`} className="text-2xl font-black text-brand-dark hover:text-brand-primary transition-colors">{PHONE_NUMBER}</a>
                  <p className="text-slate-500 text-sm mt-1 font-medium">Mon-Fri: 7am - 6pm &bull; Sat: 8am - 2pm</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Service Area</h4>
                  <p className="text-2xl font-black text-brand-dark">Greater Seattle Metro</p>
                  <p className="text-slate-500 text-sm mt-1 font-medium">Serving all neighborhoods within 30 miles of downtown Seattle.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
              <h3 className="text-2xl font-black text-brand-dark mb-6 tracking-tight">Why Book a Consult?</h3>
              <ul className="space-y-4">
                {[
                  "Detailed site measurement and drainage audit.",
                  "Professional material recommendations based on slope.",
                  "Firm price quote valid for 30 days.",
                  "Project timeline and logistical planning."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-brand-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span className="text-slate-600 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:w-1/2">
            <LeadForm />
          </div>
        </div>
      </div>

      {/* Map Embed Section */}
      <section className="h-[400px] w-full bg-slate-200 mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172138.6410214441!2d-122.5068662!3d47.612924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21a17cdbeada0b81%3A0x37d1e31ba319afeb!2sCloud%20Concrete%20of%20Seattle!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Cloud Concrete Service Map"
        ></iframe>
      </section>
    </div>
  );
}
