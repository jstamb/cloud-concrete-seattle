
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import SEO from '../components/SEO';
import { SERVICES, PHONE_NUMBER, NEIGHBORHOODS, BUSINESS_NAME } from '../constants';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) return <div className="py-20 text-center text-2xl font-black">Service not found</div>;

  return (
    <div className="pb-32">
      <SEO
        title={`${service.name} Contractor Seattle WA | Installation & Repair`}
        description={`Looking for a ${service.name.toLowerCase()} contractor in Seattle? Cloud Concrete offers professional installation & repair with free estimates. Licensed, bonded & insured. Call (206) 495-0997.`}
        schemaType="Service"
        schemaData={{
          "serviceType": service.name,
          "description": service.shortDescription,
          "provider": {
            "@type": "ConcreteContractor",
            "name": BUSINESS_NAME
          },
          "areaServed": {
            "@type": "City",
            "name": "Seattle"
          }
        }}
      />
      <div className="bg-brand-dark py-24 md:py-32 text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-brand-primary/5 -skew-x-12 translate-x-1/4"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-brand-primary/20 border border-brand-primary/30 text-brand-secondary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6">
              Licensed Seattle Contractor
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">{service.name} Contractor <br/><span className="text-brand-secondary italic">in Seattle, WA</span></h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-10 font-medium max-w-2xl">{service.shortDescription}</p>
            <div className="flex flex-wrap gap-5">
              <a href={`tel:${PHONE_NUMBER}`} className="bg-brand-primary hover:brightness-110 text-white px-10 py-5 rounded-xl font-black text-lg transition-all shadow-2xl flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.455 5.455l.773-1.548a1 1 0 011.06-.539l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                {PHONE_NUMBER}
              </a>
              <div className="bg-white/5 border border-white/10 px-8 py-5 rounded-xl flex items-center gap-4">
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">Project Value:</span>
                <span className="text-brand-secondary font-black text-xl tracking-tighter">{service.priceIndicator}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-20">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-2/3">
            <div className="prose prose-slate prose-xl max-w-none">
              <h2 className="text-4xl font-black text-brand-dark mb-8 tracking-tight">Seattle's Trusted {service.name} Contractor</h2>
              <div className="w-20 h-2 bg-brand-primary mb-10"></div>
              <p className="text-slate-600 font-medium leading-relaxed mb-10">{service.longDescription}</p>
              
              <h3 className="text-3xl font-black text-brand-dark mb-8 tracking-tight">Key Benefits of Our {service.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {[
                  "Engineered for Seattle's 37+ inches of annual rainfall.",
                  "High-PSI concrete mixes designed for freeze-thaw durability.",
                  "Professional-grade rebar reinforcement in every slab.",
                  "Custom finishes that enhance curb appeal and property value."
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <svg className="w-6 h-6 text-brand-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span className="text-slate-700 font-bold leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-3xl font-black text-brand-dark mb-8 tracking-tight">Precision Engineering Workflow</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {[
                  { step: "01", title: "Geo-Technical Audit", desc: "Advanced survey of soil composition and water runoff patterns." },
                  { step: "02", title: "Heavy Excavation", desc: "Precision clearing using professional-grade machinery." },
                  { step: "03", title: "Structural Rebar", desc: "Custom steel reinforcement grids for maximum tensile strength." },
                  { step: "04", title: "High-PSI Pour", desc: "Specialized PNW-mix concrete poured at optimal temperatures." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group">
                    <div className="absolute -top-4 -right-4 text-8xl font-black text-brand-primary/5 group-hover:text-brand-primary/10 transition-colors">{item.step}</div>
                    <h4 className="text-xl font-black text-brand-primary mb-3 relative z-10 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-slate-600 font-medium relative z-10 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 mb-16">
                <h3 className="text-2xl font-black text-brand-dark mb-6 tracking-tight">Maintenance & Longevity</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-8">
                  A high-quality {service.name.toLowerCase()} is a long-term investment. To ensure it lasts 30+ years, we recommend:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    <span className="text-slate-700 font-medium">Re-sealing every 3-5 years to maintain the moisture barrier.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    <span className="text-slate-700 font-medium">Avoiding corrosive de-icing salts during winter freeze-thaws.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    <span className="text-slate-700 font-medium">Regular power washing to prevent moss and algae build-up in shaded areas.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-dark text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden mb-16">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 rounded-full -mr-16 -mt-16"></div>
                <h3 className="text-3xl font-black mb-6 relative z-10 leading-tight">Serving Every Seattle District</h3>
                <p className="mb-10 text-slate-300 font-medium leading-relaxed relative z-10">
                  Whether you're in Ballard, Queen Anne, or West Seattle, our local crews are ready to deliver {service.name.toLowerCase()} excellence. We understand the specific permitting requirements for every district in the City of Seattle.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                  {NEIGHBORHOODS.slice(0, 8).map(n => (
                    <Link key={n.slug} to={`/${service.slug}-${n.slug}`} className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-brand-secondary transition-colors">
                      {n.name} &rarr;
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <LeadForm />
              <div className="mt-10 bg-brand-dark text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-primary/10 rounded-full"></div>
                <h4 className="text-lg font-black mb-6 uppercase tracking-[0.2em] text-brand-secondary relative z-10">Technical Specialties</h4>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {service.keywords.map(k => (
                    <span key={k} className="bg-white/5 border border-white/10 text-[10px] font-black px-3 py-1.5 rounded-lg text-slate-400 uppercase tracking-widest hover:text-white hover:border-brand-primary transition-all cursor-default">
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
