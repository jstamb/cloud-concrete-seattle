import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import LeadForm from '@/components/LeadForm';
import { BreadcrumbSchema } from '@/components/JsonLd';
import { NEIGHBORHOODS, SERVICES, PHONE_NUMBER } from '@/lib/constants';

type Props = {
  params: Promise<{ slug: string }>;
};

// Get a concrete image based on location index
const getLocationImage = (slug: string): string => {
  const index = NEIGHBORHOODS.findIndex(n => n.slug === slug);
  const imageNumbers = [12, 15, 18, 20, 22, 25, 28, 30, 32, 35, 38, 40, 42, 45, 48, 50, 52, 55, 58, 60, 62, 65, 68, 70, 72, 75, 78, 80, 82, 85, 88, 90, 92, 95, 97, 100, 101, 102, 103, 104, 105, 106, 107];
  const imageNum = imageNumbers[index % imageNumbers.length];
  return `/images/concrete-${imageNum}.jpeg`;
};

export async function generateStaticParams() {
  return NEIGHBORHOODS.map((neighborhood) => ({
    slug: neighborhood.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = NEIGHBORHOODS.find(n => n.slug === slug);

  if (!location) {
    return { title: 'Location Not Found' };
  }

  return {
    title: `Concrete Contractor in ${location.name}, Seattle | Driveways, Patios & More`,
    description: `Looking for a concrete contractor in ${location.name}, Seattle? Cloud Concrete provides expert driveway, patio, and foundation services in ${location.zip}. Free estimates. Call (206) 495-0997.`,
  };
}

export default async function LocationDetail({ params }: Props) {
  const { slug } = await params;
  const location = NEIGHBORHOODS.find(n => n.slug === slug);

  if (!location) {
    notFound();
  }

  return (
    <div className="pb-32">
      <BreadcrumbSchema items={[
        { name: 'Locations', url: '/locations' },
        { name: location.name, url: `/locations/${location.slug}` },
      ]} />

      <div className="bg-brand-dark py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={getLocationImage(location.slug)}
            alt={`${location.name}, Seattle`}
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">Concrete Contractor in <br/><span className="text-brand-secondary italic">{location.name}, Seattle</span></h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 font-medium max-w-3xl mx-auto">
            Your local concrete contractor serving {location.name} ({location.zip}). Driveways, patios, foundations & more.
          </p>
          <div className="flex justify-center gap-4">
            <a href={`tel:${PHONE_NUMBER}`} className="bg-brand-primary text-white px-8 py-4 rounded-xl font-black text-xs shadow-2xl hover:brightness-110 transition-all uppercase tracking-[0.2em]">
              Call Local Team: {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-black text-brand-dark mb-4 uppercase tracking-tight">Your Trusted Concrete Contractor in {location.name}</h2>
            <div className="w-20 h-1.5 bg-brand-primary mb-8"></div>

            <p className="text-base text-slate-600 mb-10 leading-relaxed font-medium">
              Soil conditions in {location.zip} vary, but our expertise doesn&apos;t. We provide structural reinforcement and drainage management designed specifically for the {location.name} landscape.
            </p>

            <div className="bg-slate-900 text-white p-8 rounded-2xl mb-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full -mr-16 -mt-16"></div>
              <h3 className="text-lg font-black mb-4 uppercase tracking-widest text-brand-secondary relative z-10">District Challenges</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed mb-6 relative z-10">
                We handle slope stabilization and hydrostatic pressure management common to {location.name} hillside properties.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative z-10">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-brand-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-200">Soil Compaction</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-brand-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-200">Runoff Control</span>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-black mb-6 tracking-tight uppercase">Services Available in {location.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
              {SERVICES.map(service => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}-${location.slug}`}
                  className="group p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-lg hover:border-brand-primary/20 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex-shrink-0 w-4 h-4 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h4 className="text-[11px] font-black text-brand-dark group-hover:text-brand-primary transition-colors leading-tight tracking-widest uppercase">{service.name}</h4>
                  </div>
                  <p className="text-slate-500 text-[10px] font-medium leading-tight flex-grow line-clamp-2">{service.shortDescription}</p>
                </Link>
              ))}
            </div>

            <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 mb-16">
              <h3 className="text-2xl font-black mb-6 tracking-tight uppercase">Why Residents Trust Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-primary text-brand-secondary rounded flex-shrink-0 flex items-center justify-center font-bold text-xs">1</div>
                  <p className="text-sm font-medium text-slate-700"><strong>Neighborhood Specialists:</strong> Deep experience with {location.name} building codes.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-primary text-brand-secondary rounded flex-shrink-0 flex items-center justify-center font-bold text-xs">2</div>
                  <p className="text-sm font-medium text-slate-700"><strong>PNW Durable:</strong> Modified mixes for local curing conditions.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <LeadForm />
              <div className="mt-8 p-8 bg-brand-dark text-white rounded-2xl shadow-xl">
                <h4 className="text-xs font-black mb-4 uppercase tracking-[0.2em] text-brand-secondary">Nearby Hubs</h4>
                <div className="grid grid-cols-1 gap-2">
                  {NEIGHBORHOODS.filter(n => n.slug !== location.slug).slice(0, 8).map(n => (
                    <Link key={n.slug} href={`/locations/${n.slug}`} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-all">
                      Concrete in {n.name} &rarr;
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
