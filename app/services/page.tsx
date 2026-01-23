import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/JsonLd';
import { SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Concrete Contractor Services Seattle | Driveways, Patios & More',
  description: "Full-service concrete contractor in Seattle, WA. Driveways, patios, foundations, stamped concrete, retaining walls & more. Licensed & insured. Free estimates.",
};

export default function ServicesHub() {
  return (
    <div className="pb-32">
      <BreadcrumbSchema items={[{ name: 'Services', url: '/services' }]} />

      <div className="bg-brand-dark py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">Concrete Contractor <br/><span className="text-brand-secondary italic">Services</span></h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">Full-service concrete contractor for residential and commercial Seattle projects. Free estimates.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SERVICES.map(service => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group p-5 bg-white border border-slate-100 rounded-2xl hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 className="text-sm font-black text-brand-dark group-hover:text-brand-primary transition-colors leading-tight tracking-tight uppercase">{service.name}</h2>
              </div>
              <p className="text-slate-500 text-[11px] font-medium leading-relaxed flex-grow line-clamp-3">{service.shortDescription}</p>
              <div className="mt-4 text-brand-primary font-black uppercase tracking-widest text-[9px] flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                Learn More <span className="text-base">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
